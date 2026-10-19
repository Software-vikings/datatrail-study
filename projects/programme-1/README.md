# Programme 1 — portfolio projects

This folder contains four reproducible analyst projects designed to demonstrate an end-to-end workflow rather than a collection of disconnected charts.

## Projects

1. **Sales Data Cleaning and Quality Audit** — inspect raw sales, document data defects, apply transparent cleaning rules, and reconcile accepted/rejected records.
2. **Retail Performance Analysis** — calculate net revenue, compare monthly/region/category/customer performance, create charts and write evidence-based actions.
3. **Customer Funnel and Cohort Analysis** — define stage denominators, quantify funnel conversion, build monthly signup cohorts and report retention with limitations.
4. **Automated Reporting Pipeline** — ingest a deterministic API fixture and monthly extracts, load SQLite safely, query with pandas, and generate a formatted Excel workbook.

Each project contains its own README, source data and executable Python workflow. All sample data is synthetic. The automated verifier writes outputs only to temporary folders.

## Environment

From the repository root:

~~~bash
python3 -m pip install pandas matplotlib openpyxl
python3 scripts/verify_programme1_projects.py
~~~

Run a project independently using the commands in its README. Outputs are written to the selected output directory; the source data is never overwritten.

## Portfolio review rubric (0–4 per dimension)

| Dimension | 0 | 2 | 4 |
|---|---|---|---|
| Problem framing | No decision question | Question is broad | Specific business decision and stakeholder |
| Data quality | No validation | Basic checks | Measured defects, explicit rules and reconciliation |
| Method | No repeatable method | Partly reproducible | Correct, tested and justified workflow |
| Communication | Outputs without meaning | Some interpretation | Clear findings, limitations and actionable recommendation |
| Reproducibility | Cannot rerun | Partial instructions | Dependencies, inputs, commands and expected outputs documented |

A portfolio project is ready for review at **15/20 or above**, provided Data Quality and Reproducibility are not scored zero. A high score does not excuse inaccurate metrics or unsupported claims.

## Submission standard

Every project should answer: What decision was being supported? What is the grain of each table? Which records were excluded and why? How are the key metrics defined? Can the main totals be reconciled? What can the data not prove? What should the stakeholder do next? How can another analyst reproduce the result?
