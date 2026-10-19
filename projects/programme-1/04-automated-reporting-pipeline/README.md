# Project 4 — Automated Reporting Pipeline

## Business question

Can a repeatable workflow ingest external-source data and monthly extracts, persist a queryable source of truth, and deliver an auditable Excel report without manual copying?

## Architecture

1. **Source ingestion:** a deterministic JSON API response fixture and a folder of monthly CSV extracts. The fixture models an API payload but intentionally makes no network calls.
2. **Validation:** nonblank IDs, customer identifiers, canonical calendar months, an allow-listed status, finite non-negative amounts and a unique order key across all sources.
3. **Database:** SQLite relational table with primary-key and amount constraints. SQL values are passed using placeholders.
4. **Analysis:** a parameterised pandas SQL query extracts paid orders; monthly amounts are aggregated and reconciled to the detail rows.
5. **Delivery:** an openpyxl workbook with Summary and Details tabs, number formats, filters, frozen headers and a grand-total formula.
6. **Audit trail:** the source JSON snapshot and run log are saved with the workbook.

## Run

~~~bash
python3 -m pip install pandas openpyxl
python3 projects/programme-1/04-automated-reporting-pipeline/src/report_pipeline.py
~~~

## Outputs

- `monthly_report.xlsx`
- `source_snapshot.json`
- `run.log`
- `report_database.sqlite`

## Reliability and security

No live endpoint, API key or third-party uptime is required. The JSON fixture can be replaced by a transport adapter that supplies a validated API page. Credentials should be stored in environment variables and supplied only to a trusted backend; never commit a token or embed a private secret in browser JavaScript. SQLite values are parameter-bound. The report is not considered ready unless detail and summary totals reconcile. A batch with no paid orders still produces a workbook with zero-valued totals rather than an invalid reversed formula range.

## Limitations

This example uses a compact fixture and a single SQLite file. Production ingestion would need source-specific pagination/rate-limit handling, idempotent upserts, schema versioning, access controls, retries, monitoring and an operational retention policy.
