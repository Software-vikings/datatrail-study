#!/usr/bin/env python3
"""Execute all four Programme 1 portfolio projects in isolated temporary folders."""

from __future__ import annotations

import importlib.util
import json
import tempfile
from pathlib import Path

import pandas as pd
from openpyxl import load_workbook

ROOT = Path(__file__).resolve().parents[1]
PROJECTS = ROOT / "projects" / "programme-1"


def load_module(name: str, path: Path):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise AssertionError(f"Cannot load project module: {path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def verify_project_1(base: Path) -> None:
    folder = PROJECTS / "01-sales-data-quality"
    module = load_module("sales_quality_project", folder / "src" / "clean_sales.py")
    result = module.run(folder / "data" / "raw_sales.csv", base / "project-1")
    quality = result["quality"]
    assert quality["raw_rows"] == quality["accepted_rows"] + quality["rejected_rows"]
    assert quality["duplicate_transaction_ids"] == 1
    assert quality["accepted_rows"] == 8
    assert quality["rejected_rows"] == 7
    assert quality["reconciliation_passed"] is True
    assert abs(float(result["cleaned"]["revenue"].sum()) - quality["accepted_revenue"]) < 0.01
    for name in ("cleaned_sales.csv", "rejected_sales.csv", "decision_log.csv", "monthly_reconciliation.csv", "data_quality_report.json"):
        assert (base / "project-1" / name).is_file(), name
    decision = pd.read_csv(base / "project-1" / "decision_log.csv")
    assert len(decision) == quality["raw_rows"] and set(decision["decision"]) == {"accepted", "rejected"}
    print("[PASS] Project 1: cleaning, duplicate/invalid-row audit, decision log and monthly reconciliation")


def verify_project_2(base: Path) -> None:
    folder = PROJECTS / "02-retail-performance"
    module = load_module("retail_performance_project", folder / "src" / "analyze_retail.py")
    result = module.analyze(folder / "data" / "retail_orders.csv", base / "project-2")
    assert len(result["orders"]) == 20
    assert abs(float(result["monthly"]["net_revenue"].sum()) - result["net_revenue"]) < 0.01
    assert len(result["region"]) == 4 and len(result["category"]) == 3
    for name in ("monthly_performance.csv", "region_performance.csv", "category_performance.csv", "customer_performance.csv", "monthly_net_revenue.png", "region_performance.png", "category_performance.png", "insights.md"):
        assert (base / "project-2" / name).is_file(), name
    print("[PASS] Project 2: net revenue, segment summaries, three charts and business insight brief")


def verify_project_3(base: Path) -> None:
    folder = PROJECTS / "03-funnel-cohort-analysis"
    module = load_module("funnel_cohort_project", folder / "src" / "analyze_funnel_cohorts.py")
    result = module.analyze_events(folder / "data" / "customer_events.csv", base / "project-3")
    funnel = result["funnel"]
    counts = funnel["unique_customers"].tolist()
    assert counts == [12, 10, 6, 4], counts
    assert result["funnel"]["conversion_from_previous"].dropna().between(0, 1).all()

    # A customer only advances when each event occurs in sequence. The probe
    # includes a signup before visit, an early trial followed by a valid later
    # trial, and a purchase timestamp that precedes the trial.
    probe = pd.DataFrame([
        ("A1", "A", "visit", "2026-01-01 09:00"),
        ("A2", "A", "signup", "2026-01-01 10:00"),
        ("A3", "A", "trial_start", "2026-01-01 11:00"),
        ("A4", "A", "purchase", "2026-01-01 12:00"),
        ("B1", "B", "signup", "2026-01-01 08:00"),
        ("B2", "B", "visit", "2026-01-01 09:00"),
        ("B3", "B", "trial_start", "2026-01-01 10:00"),
        ("B4", "B", "purchase", "2026-01-01 11:00"),
        ("C1", "C", "visit", "2026-01-01 08:00"),
        ("C2", "C", "signup", "2026-01-01 09:00"),
        ("C3", "C", "trial_start", "2026-01-01 08:30"),
        ("C4", "C", "trial_start", "2026-01-01 10:00"),
        ("C5", "C", "purchase", "2026-01-01 11:00"),
        ("D1", "D", "visit", "2026-01-01 08:00"),
        ("D2", "D", "signup", "2026-01-01 09:00"),
        ("D3", "D", "trial_start", "2026-01-01 10:00"),
        ("D4", "D", "purchase", "2026-01-01 09:30"),
        ("E1", "E", "signup", "2026-01-01 08:00"),
        ("E2", "E", "trial_start", "2026-01-01 09:00"),
    ], columns=["event_id", "customer_id", "event_type", "event_timestamp"])
    probe["event_timestamp"] = pd.to_datetime(probe["event_timestamp"])
    probe_funnel = module.build_sequential_funnel(probe)
    assert probe_funnel["unique_customers"].tolist() == [4, 3, 3, 2]
    invalid_events = pd.read_csv(folder / "data" / "customer_events.csv", dtype={"event_id": "string", "customer_id": "string"})
    invalid_events.loc[0, "customer_id"] = ""
    invalid_path = base / "project-3-missing-customer.csv"
    invalid_events.to_csv(invalid_path, index=False)
    try:
        module.analyze_events(invalid_path, base / "project-3-invalid")
    except ValueError as exc:
        assert "customer_id" in str(exc)
    else:
        raise AssertionError("Project 3 must reject events without a customer_id")
    assert list(result["retention"].index) == ["2026-01", "2026-02", "2026-03"]
    assert float(result["cohort_activity"]["retention_pct"].min()) >= 0
    for name in ("funnel_metrics.csv", "cohort_activity.csv", "cohort_retention.csv", "cohort_retention_heatmap.png", "metric_definitions.md"):
        assert (base / "project-3" / name).is_file(), name
    print("[PASS] Project 3: distinct-customer funnel, monthly cohorts, retention matrix and definitions")


def verify_project_4(base: Path) -> None:
    folder = PROJECTS / "04-automated-reporting-pipeline"
    module = load_module("automated_reporting_project", folder / "src" / "report_pipeline.py")
    result = module.run_pipeline(folder / "fixtures" / "api_response.json", folder / "monthly", base / "project-4")
    assert len(result["api_records"]) == 3 and len(result["monthly_records"]) == 5
    assert len(result["all_rows"]) == 8 and len(result["paid"]) == 6
    assert abs(result["paid_revenue"] - 10200.0) < 0.01
    assert result["db_path"].is_file() and result["report_path"].is_file()
    for name in ("source_snapshot.json", "paid_order_extract.csv", "monthly_paid_summary.csv", "run.log"):
        assert (base / "project-4" / name).is_file(), name
    workbook = load_workbook(result["report_path"], data_only=False)
    try:
        assert workbook.sheetnames == ["Summary", "Details"]
        assert workbook["Summary"]["C5"].value == "=SUM(C2:C4)"
        assert workbook["Details"].max_row == 7
        assert workbook["Details"].freeze_panes == "A2"
    finally:
        workbook.close()
    assert "Reconciliation: PASS" in result["run_log"]
    print("[PASS] Project 4: fixture ingestion, parameterised SQLite, pandas extract and Excel report")


def main() -> None:
    with tempfile.TemporaryDirectory(prefix="datatrail-programme1-projects-") as temporary:
        base = Path(temporary)
        verify_project_1(base)
        verify_project_2(base)
        verify_project_3(base)
        verify_project_4(base)
    print("[PASS] Programme 1 portfolio: four projects executed successfully in isolated temporary folders.")


if __name__ == "__main__":
    main()
