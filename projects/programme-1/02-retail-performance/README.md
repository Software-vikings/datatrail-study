# Project 2 — Retail Performance Analysis

## Business question

Which months, regions and product categories contribute most to net revenue, and where should a retail manager investigate a performance gap?

## Data and metric definitions

- Input: synthetic order-line data in `data/retail_orders.csv`.
- Grain: one order line.
- Unique key: `order_line_id`; `order_id` can repeat when an order contains multiple lines.
- Gross revenue = quantity × unit price.
- Net revenue = gross revenue × (1 − discount percentage).
- Revenue is calculated before tax, delivery charges, refunds and cost of goods; it is not profit.

## Workflow

1. Validate required columns, nonblank identifiers/dimensions, unique order-line IDs, finite numeric values, date parsing, positive quantities, non-negative prices and discounts between 0 and 1.
2. Calculate line-level gross and net revenue.
3. Build monthly, region, category and customer summaries.
4. Reconcile all summary revenue to the sum of the validated line-level revenue.
5. Create three clearly labelled Matplotlib charts and an evidence-backed insight brief.

## Run

~~~bash
python3 -m pip install pandas matplotlib
python3 projects/programme-1/02-retail-performance/src/analyze_retail.py
~~~

Optional output location:

~~~bash
python3 projects/programme-1/02-retail-performance/src/analyze_retail.py --input projects/programme-1/02-retail-performance/data/retail_orders.csv --output-dir /tmp/retail-analysis
~~~

## Deliverables

- Monthly, region, category and customer CSV summaries.
- Monthly trend, regional performance and category performance PNG charts.
- `insights.md` with the strongest segment, leading month, revenue reconciliation and limitations.

## Review rubric

Explain why net revenue is not profit. State the denominator for any share or average. Reconcile segment totals to the validated detail table. Label axes with units and dates. Do not recommend a promotion solely because a segment has low revenue; inspect volume, mix, discounting and data coverage first.
