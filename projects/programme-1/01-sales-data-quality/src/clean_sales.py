#!/usr/bin/env python3
"""Clean a synthetic sales extract and create a traceable quality audit."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import numpy as np
import pandas as pd

REQUIRED_COLUMNS = {
    "transaction_id", "order_date", "customer_id", "city",
    "product", "quantity", "unit_price"
}


def run(input_csv: Path, output_dir: Path) -> dict:
    input_csv = Path(input_csv)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    source = pd.read_csv(input_csv, dtype={"transaction_id": "string", "customer_id": "string", "city": "string", "product": "string"})
    if source.empty:
        raise ValueError("Input file contains no sales records")
    missing_columns = REQUIRED_COLUMNS - set(source.columns)
    if missing_columns:
        raise ValueError(f"Missing required columns: {sorted(missing_columns)}")

    frame = source.copy()
    frame["_source_row"] = range(2, len(frame) + 2)
    frame["transaction_id"] = frame["transaction_id"].astype("string").str.strip()
    frame["customer_id"] = frame["customer_id"].astype("string").str.strip()
    frame["city"] = frame["city"].astype("string").str.strip().str.title()
    frame["product"] = frame["product"].astype("string").str.strip().str.title()
    frame["order_date"] = pd.to_datetime(frame["order_date"], errors="coerce")
    frame["quantity"] = pd.to_numeric(frame["quantity"], errors="coerce")
    frame["unit_price"] = pd.to_numeric(frame["unit_price"], errors="coerce")

    duplicate = frame.duplicated(subset=["transaction_id"], keep="first")
    reason_map: dict[int, list[str]] = {index: [] for index in frame.index}
    for index in frame.index:
        if bool(duplicate.loc[index]):
            reason_map[index].append("duplicate_transaction_id")
        if pd.isna(frame.loc[index, "order_date"]):
            reason_map[index].append("invalid_order_date")
        if pd.isna(frame.loc[index, "customer_id"]) or not str(frame.loc[index, "customer_id"]).strip():
            reason_map[index].append("missing_customer_id")
        if pd.isna(frame.loc[index, "city"]) or not str(frame.loc[index, "city"]).strip():
            reason_map[index].append("missing_city")
        if pd.isna(frame.loc[index, "product"]) or not str(frame.loc[index, "product"]).strip():
            reason_map[index].append("missing_product")
        quantity = frame.loc[index, "quantity"]
        if pd.isna(quantity) or not np.isfinite(quantity) or quantity <= 0:
            reason_map[index].append("invalid_quantity")
        price = frame.loc[index, "unit_price"]
        if pd.isna(price) or not np.isfinite(price) or price < 0:
            reason_map[index].append("invalid_unit_price")
        if pd.isna(frame.loc[index, "transaction_id"]) or not str(frame.loc[index, "transaction_id"]).strip():
            reason_map[index].append("missing_transaction_id")

    candidate_revenue = frame["quantity"] * frame["unit_price"]
    for index in frame.index:
        if not reason_map[index] and not np.isfinite(candidate_revenue.loc[index]):
            reason_map[index].append("non_finite_revenue")

    valid_mask = pd.Series([not reason_map[index] for index in frame.index], index=frame.index)
    accepted = frame.loc[valid_mask].copy()
    rejected = frame.loc[~valid_mask].copy()
    accepted["revenue"] = accepted["quantity"] * accepted["unit_price"]
    accepted["order_month"] = accepted["order_date"].dt.to_period("M").astype(str)

    decision_rows = []
    for index, row in frame.iterrows():
        reasons = reason_map[index]
        decision_rows.append({
            "source_row": int(row["_source_row"]),
            "transaction_id": row["transaction_id"],
            "decision": "accepted" if not reasons else "rejected",
            "reason": "validated_and_normalized" if not reasons else ";".join(reasons),
        })

    monthly = (
        accepted.groupby("order_month", as_index=False)
        .agg(order_count=("transaction_id", "count"), revenue=("revenue", "sum"))
        .sort_values("order_month")
    )
    quality = {
        "input_file": input_csv.name,
        "raw_rows": int(len(frame)),
        "accepted_rows": int(len(accepted)),
        "rejected_rows": int(len(rejected)),
        "duplicate_transaction_ids": int(duplicate.sum()),
        "invalid_dates": int(frame["order_date"].isna().sum()),
        "missing_customer_ids": int(frame["customer_id"].isna().sum() + frame["customer_id"].eq("").sum()),
        "missing_cities": int(frame["city"].isna().sum() + frame["city"].eq("").sum()),
        "missing_products": int(frame["product"].isna().sum() + frame["product"].eq("").sum()),
        "invalid_quantities": int((frame["quantity"].isna() | ~np.isfinite(frame["quantity"].fillna(0)) | (frame["quantity"] <= 0)).sum()),
        "invalid_unit_prices": int((frame["unit_price"].isna() | ~np.isfinite(frame["unit_price"].fillna(0)) | (frame["unit_price"] < 0)).sum()),
        "non_finite_revenue_rows": int(sum("non_finite_revenue" in reasons for reasons in reason_map.values())),
        "accepted_revenue": round(float(accepted["revenue"].sum()), 2),
        "reconciliation_passed": int(len(frame)) == int(len(accepted) + len(rejected)),
    }

    visible_columns = [column for column in frame.columns if not column.startswith("_")]
    accepted[visible_columns + ["revenue", "order_month"]].to_csv(output_dir / "cleaned_sales.csv", index=False)
    rejected[visible_columns].assign(
        rejection_reason=[ ";".join(reason_map[index]) for index in rejected.index ]
    ).to_csv(output_dir / "rejected_sales.csv", index=False)
    pd.DataFrame(decision_rows).to_csv(output_dir / "decision_log.csv", index=False)
    monthly.to_csv(output_dir / "monthly_reconciliation.csv", index=False)
    (output_dir / "data_quality_report.json").write_text(
        json.dumps(quality, indent=2, sort_keys=True), encoding="utf-8"
    )
    return {"cleaned": accepted, "rejected": rejected, "monthly": monthly, "quality": quality}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    default_input = Path(__file__).resolve().parents[1] / "data" / "raw_sales.csv"
    parser.add_argument("--input", type=Path, default=default_input)
    parser.add_argument("--output-dir", type=Path, default=Path("output/project-1"))
    args = parser.parse_args()
    result = run(args.input, args.output_dir)
    report = result["quality"]
    print(f"Raw rows: {report['raw_rows']}")
    print(f"Accepted rows: {report['accepted_rows']}")
    print(f"Rejected rows: {report['rejected_rows']}")
    print(f"Accepted revenue: {report['accepted_revenue']:.2f}")
    print(f"Reconciled: {report['reconciliation_passed']}")


if __name__ == "__main__":
    main()
