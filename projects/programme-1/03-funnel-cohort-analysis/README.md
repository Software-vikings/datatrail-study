# Project 3 — Customer Funnel and Cohort Analysis

## Business question

Where do prospects leave the customer journey, and how does observed customer activity change across signup cohorts?

## Event model

Input is synthetic event-level data at one event per row. A customer can generate multiple event rows. The main stages are visit, signup, trial_start and purchase. A customer advances only when each next stage occurs at or after the qualifying previous stage for that same customer. For repeated events, the earliest event after the previous stage is selected. This is a sequential funnel, so stage counts cannot increase as the journey progresses.

A signup cohort is the month of a customer's first signup event. A customer is active in a later month when at least one recorded event occurs on or after that signup timestamp. Retention is active unique customers divided by the cohort's signup size.

## Workflow

1. Validate unique event IDs, timestamps, customers and known event types.
2. Build a sequential distinct-customer funnel, excluding out-of-order stages and using each preceding stage as the conversion denominator.
3. Identify each customer's first signup month.
4. Count unique active customers by cohort and activity month, calculate cohort age and retention percentage.
5. Export funnel, cohort activity and retention matrices, plus a heatmap and metric-definition note.

## Run

~~~bash
python3 -m pip install pandas matplotlib
python3 projects/programme-1/03-funnel-cohort-analysis/src/analyze_funnel_cohorts.py
~~~

## Deliverables

- `funnel_metrics.csv`
- `cohort_activity.csv`
- `cohort_retention.csv`
- `cohort_retention_heatmap.png`
- `metric_definitions.md`

## Interpretation guardrails

A funnel is not a causal explanation for drop-off. Event instrumentation may be incomplete, users can visit without being identified, and a purchase can occur outside the measured system. Cohort retention is activity-based, not proof of subscription renewal or customer satisfaction. Always state the event window, stage denominator and cohort size.
