#!/usr/bin/env python3
"""Analyse distinct-customer funnel conversion and signup-cohort retention."""

from __future__ import annotations

import argparse
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import pandas as pd

KNOWN_EVENTS = {"visit", "signup", "trial_start", "purchase", "page_view"}
FUNNEL = ["visit", "signup", "trial_start", "purchase"]


def analyze_events(input_csv: Path, output_dir: Path) -> dict:
    input_csv, output_dir = Path(input_csv), Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    events = pd.read_csv(input_csv, dtype={"event_id": "string", "customer_id": "string"})
    required = {"event_id", "customer_id", "event_type", "event_timestamp"}
    missing = required - set(events.columns)
    if missing:
        raise ValueError(f"Missing columns: {sorted(missing)}")
    if events["event_id"].duplicated().any():
        raise ValueError("event_id must be unique")
    events["event_timestamp"] = pd.to_datetime(events["event_timestamp"], errors="coerce")
    if events["event_timestamp"].isna().any():
        raise ValueError("Invalid event timestamp")
    if not events["event_type"].isin(KNOWN_EVENTS).all():
        raise ValueError("Unknown event_type")

    funnel_sets = {
        event_type: set(events.loc[events["event_type"] == event_type, "customer_id"].dropna())
        for event_type in FUNNEL
    }
    counts = [len(funnel_sets[event_type]) for event_type in FUNNEL]
    funnel_rows = []
    previous = None
    for event_type, count in zip(FUNNEL, counts):
        conversion = None if previous is None or previous == 0 else count / previous
        overall = count / counts[0] if counts[0] else 0
        funnel_rows.append({
            "stage": event_type, "unique_customers": count,
            "conversion_from_previous": conversion, "conversion_from_visits": overall,
        })
        previous = count
    funnel = pd.DataFrame(funnel_rows)
    funnel.to_csv(output_dir / "funnel_metrics.csv", index=False)

    signups = events.loc[events["event_type"] == "signup"].groupby("customer_id")["event_timestamp"].min()
    if signups.empty:
        raise ValueError("At least one signup event is required")
    cohorts = signups.rename("signup_timestamp").reset_index()
    cohorts["cohort_month"] = cohorts["signup_timestamp"].dt.to_period("M").astype(str)
    active = events.merge(cohorts[["customer_id", "signup_timestamp", "cohort_month"]], on="customer_id", how="inner")
    active = active.loc[active["event_timestamp"] >= active["signup_timestamp"]].copy()
    active["activity_month"] = active["event_timestamp"].dt.to_period("M").astype(str)
    active["cohort_period"] = (
        (pd.to_datetime(active["activity_month"] + "-01").dt.year - pd.to_datetime(active["cohort_month"] + "-01").dt.year) * 12
        + pd.to_datetime(active["activity_month"] + "-01").dt.month
        - pd.to_datetime(active["cohort_month"] + "-01").dt.month
    )
    cohort_sizes = cohorts.groupby("cohort_month")["customer_id"].nunique().rename("cohort_size")
    activity = (
        active.groupby(["cohort_month", "activity_month", "cohort_period"])["customer_id"]
        .nunique().rename("active_customers").reset_index()
    )
    activity = activity.merge(cohort_sizes, on="cohort_month", how="left")
    activity["retention_pct"] = activity["active_customers"] / activity["cohort_size"] * 100
    activity.to_csv(output_dir / "cohort_activity.csv", index=False)
    retention = activity.pivot(index="cohort_month", columns="cohort_period", values="retention_pct")
    retention.to_csv(output_dir / "cohort_retention.csv")

    fig, ax = plt.subplots(figsize=(8, 4))
    image = ax.imshow(retention.fillna(0).values, aspect="auto", vmin=0, vmax=100)
    ax.set_xticks(range(len(retention.columns)), labels=[f"Month {value}" for value in retention.columns])
    ax.set_yticks(range(len(retention.index)), labels=retention.index)
    ax.set(title="Customer cohort activity retention", xlabel="Months since signup cohort", ylabel="Signup cohort")
    fig.colorbar(image, ax=ax, label="Active customers (%)")
    fig.tight_layout()
    fig.savefig(output_dir / "cohort_retention_heatmap.png", dpi=150)
    plt.close(fig)

    definitions = (
        "# Metric definitions\n\n"
        "- Funnel population: distinct customer IDs observed at each event stage in the input window.\n"
        "- Stage conversion: unique customers at this stage divided by unique customers at the immediately previous stage.\n"
        "- Visit conversion: stage customers divided by distinct visitors.\n"
        "- Signup cohort: month of each customer's first observed signup event.\n"
        "- Active customer: at least one recorded event on or after first signup in the activity month.\n"
        "- Retention: active unique customers divided by the original cohort size.\n\n"
        "These measures describe recorded events; they do not prove causation, satisfaction or paid renewal.\n"
    )
    (output_dir / "metric_definitions.md").write_text(definitions, encoding="utf-8")
    return {"events": events, "funnel": funnel, "cohort_activity": activity, "retention": retention}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    default_input = Path(__file__).resolve().parents[1] / "data" / "customer_events.csv"
    parser.add_argument("--input", type=Path, default=default_input)
    parser.add_argument("--output-dir", type=Path, default=Path("output/project-3"))
    args = parser.parse_args()
    result = analyze_events(args.input, args.output_dir)
    print("Event rows:", len(result["events"]))
    print("Visitors:", int(result["funnel"].iloc[0]["unique_customers"]))
    print("Signups:", int(result["funnel"].iloc[1]["unique_customers"]))
    print("Cohorts:", len(result["retention"].index))


if __name__ == "__main__":
    main()
