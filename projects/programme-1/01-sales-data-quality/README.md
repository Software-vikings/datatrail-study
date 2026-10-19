# Project 1 — Sales Data Cleaning and Quality Audit

## Business question

Which source sales records are safe to use for revenue reporting, and what is the measurable impact of excluding or correcting defective records?

## Data

- Input: `data/raw_sales.csv`, a synthetic transaction extract.
- Grain: one source row per attempted transaction record.
- Key: `transaction_id`.
- Important fields: order date, customer, city, product, quantity and unit price.

The source intentionally contains a duplicate transaction ID, a missing city, an invalid date, an invalid quantity and a non-numeric price. Some text fields contain inconsistent whitespace/capitalisation. The workflow also rejects missing customer IDs and product names if those defects occur in another source extract.

## Method

1. Preserve a source-row number so every decision can be traced.
2. Normalize whitespace and category text without silently inventing missing values.
3. Parse dates and numeric fields explicitly; invalid conversion becomes a recorded quality defect.
4. Retain the first occurrence of a transaction ID and flag later duplicates.
5. Reject records with a duplicate key, missing customer ID/city/product, invalid date, non-positive quantity or invalid/negative unit price.
6. Calculate revenue only for accepted rows.
7. Export the cleaned records, rejected records, row-level decision log, monthly reconciliation and JSON quality summary.

## Run

From the repository root:

~~~bash
python3 -m pip install pandas
python3 projects/programme-1/01-sales-data-quality/src/clean_sales.py
~~~

Optional paths:

~~~bash
python3 projects/programme-1/01-sales-data-quality/src/clean_sales.py --input projects/programme-1/01-sales-data-quality/data/raw_sales.csv --output-dir /tmp/sales-quality-output
~~~

## Deliverables

- `cleaned_sales.csv`
- `rejected_sales.csv`
- `decision_log.csv`
- `monthly_reconciliation.csv`
- `data_quality_report.json`

## Acceptance checks

- The input row count equals accepted plus rejected rows.
- Every rejected row has at least one named reason.
- The first occurrence of a duplicate transaction ID is retained and later duplicates are rejected.
- Revenue equals quantity × unit price for every accepted row.
- The sum of monthly revenue equals the total accepted revenue.

## Limitations

The synthetic extract cannot establish whether an order was actually paid, delivered or refunded. No missing city or date is guessed. The first duplicate is retained as an explicit business rule; production use would require a source-system policy and investigation of conflicting duplicate rows.
