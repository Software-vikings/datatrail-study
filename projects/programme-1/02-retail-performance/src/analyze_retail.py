#!/usr/bin/env python3
"""Build repeatable retail performance summaries, charts and an insight brief."""

from __future__ import annotations

import argparse
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

REQUIRED = {
    "order_line_id", "order_id", "order_date", "customer_id", "region", "category",
    "product", "quantity", "unit_price", "discount_pct"
}


def analyze(input_csv: Path, output_dir: Path) -> dict:
    input_csv, output_dir = Path(input_csv), Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    frame = pd.read_csv(input_csv)
    if frame.empty:
        raise ValueError("Input contains no order lines")
    missing = REQUIRED - set(frame.columns)
    if missing:
        raise ValueError(f"Missing columns: {sorted(missing)}")
    text_columns = ["order_line_id", "order_id", "customer_id", "region", "category", "product"]
    for column in text_columns:
        frame[column] = frame[column].astype("string").str.strip()
        if frame[column].isna().any() or frame[column].eq("").any():
            raise ValueError(f"{column} contains missing or blank values")
    if frame["order_line_id"].duplicated().any():
        raise ValueError("order_line_id must be unique at the one-row-per-order-line grain")

    frame["order_date"] = pd.to_datetime(frame["order_date"], errors="coerce")
    frame["quantity"] = pd.to_numeric(frame["quantity"], errors="coerce")
    frame["unit_price"] = pd.to_numeric(frame["unit_price"], errors="coerce")
    frame["discount_pct"] = pd.to_numeric(frame["discount_pct"], errors="coerce")
    if frame["order_date"].isna().any():
        raise ValueError("Invalid order_date values found")
    numeric_values = frame[["quantity", "unit_price", "discount_pct"]].to_numpy(dtype=float)
    if not np.isfinite(numeric_values).all():
        raise ValueError("Numeric fields must contain finite, non-missing values")
    if (frame["quantity"] <= 0).any() or (frame["unit_price"] < 0).any():
        raise ValueError("Quantity must be positive and unit_price cannot be negative")
    if ((frame["discount_pct"] < 0) | (frame["discount_pct"] > 1)).any():
        raise ValueError("discount_pct must be between zero and one")

    frame["gross_revenue"] = frame["quantity"] * frame["unit_price"]
    frame["net_revenue"] = frame["gross_revenue"] * (1 - frame["discount_pct"])
    if not np.isfinite(frame[["gross_revenue", "net_revenue"]].to_numpy(dtype=float)).all():
        raise ValueError("Calculated gross/net revenue must be finite")
    frame["month"] = frame["order_date"].dt.to_period("M").astype(str)

    monthly = frame.groupby("month", as_index=False).agg(
        order_lines=("order_id", "count"),
        net_revenue=("net_revenue", "sum"),
    ).sort_values("month")
    region = frame.groupby("region", as_index=False).agg(
        order_lines=("order_id", "count"), net_revenue=("net_revenue", "sum")
    ).sort_values("net_revenue", ascending=False)
    category = frame.groupby("category", as_index=False).agg(
        order_lines=("order_id", "count"), net_revenue=("net_revenue", "sum")
    ).sort_values("net_revenue", ascending=False)
    customer = frame.groupby("customer_id", as_index=False).agg(
        order_lines=("order_id", "count"), net_revenue=("net_revenue", "sum")
    ).sort_values("net_revenue", ascending=False)

    for label, summary_frame in (("monthly", monthly), ("region", region), ("category", category), ("customer", customer)):
        if not np.isfinite(summary_frame["net_revenue"].to_numpy(dtype=float)).all():
            raise ValueError(f"{label.title()} net revenue aggregation overflowed")
    revenue_total = float(frame["net_revenue"].sum())
    details_total = float(monthly["net_revenue"].sum())
    if not np.isfinite(revenue_total) or not np.isfinite(details_total):
        raise ValueError("Total net revenue reconciliation overflowed")

    monthly.to_csv(output_dir / "monthly_performance.csv", index=False)
    region.to_csv(output_dir / "region_performance.csv", index=False)
    category.to_csv(output_dir / "category_performance.csv", index=False)
    customer.to_csv(output_dir / "customer_performance.csv", index=False)

    fig, ax = plt.subplots(figsize=(8, 4))
    ax.plot(monthly["month"], monthly["net_revenue"], marker="o")
    ax.set(title="Monthly net revenue", xlabel="Order month", ylabel="Net revenue (currency units)")
    ax.grid(axis="y", alpha=0.25)
    fig.tight_layout()
    fig.savefig(output_dir / "monthly_net_revenue.png", dpi=150)
    plt.close(fig)

    fig, ax = plt.subplots(figsize=(8, 4))
    ax.bar(region["region"], region["net_revenue"])
    ax.set(title="Net revenue by region", xlabel="Region", ylabel="Net revenue (currency units)")
    fig.tight_layout()
    fig.savefig(output_dir / "region_performance.png", dpi=150)
    plt.close(fig)

    fig, ax = plt.subplots(figsize=(8, 4))
    ax.barh(category["category"], category["net_revenue"])
    ax.set(title="Net revenue by product category", xlabel="Net revenue (currency units)", ylabel="Category")
    fig.tight_layout()
    fig.savefig(output_dir / "category_performance.png", dpi=150)
    plt.close(fig)

    top_region = str(region.iloc[0]["region"])
    top_category = str(category.iloc[0]["category"])
    best_month = str(monthly.sort_values("net_revenue", ascending=False).iloc[0]["month"])
    if abs(revenue_total - details_total) > 0.01:
        raise AssertionError("Monthly summary does not reconcile to detail revenue")

    brief = (
        "# Retail performance — findings\n\n"
        f"- Validated order lines: {len(frame)}\n"
        f"- Net revenue: {revenue_total:.2f}\n"
        f"- Highest-revenue region: {top_region}\n"
        f"- Highest-revenue category: {top_category}\n"
        f"- Leading month: {best_month}\n\n"
        "## Interpretation\n"
        "These rankings describe the supplied synthetic extract. Net revenue is before tax, delivery, refunds and cost of goods; "
        "it is not profit. Investigate order volume, discount levels, returns and margin before changing prices or inventory.\n"
    )
    (output_dir / "insights.md").write_text(brief, encoding="utf-8")
    return {
        "orders": frame, "monthly": monthly, "region": region, "category": category,
        "net_revenue": revenue_total, "top_region": top_region,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    default_input = Path(__file__).resolve().parents[1] / "data" / "retail_orders.csv"
    parser.add_argument("--input", type=Path, default=default_input)
    parser.add_argument("--output-dir", type=Path, default=Path("output/project-2"))
    args = parser.parse_args()
    result = analyze(args.input, args.output_dir)
    print(f"Validated order lines: {len(result['orders'])}")
    print(f"Net revenue: {result['net_revenue']:.2f}")
    print(f"Leading region: {result['top_region']}")


if __name__ == "__main__":
    main()
