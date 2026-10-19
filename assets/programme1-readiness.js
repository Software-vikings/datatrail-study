window.DataTrailProgramme1Readiness = {
  "version": "1.0.0",
  "projects": [
    {
      "id": "sales-quality",
      "title": "Sales Data Cleaning and Quality Audit",
      "summary": "Turn a defective sales extract into a documented, reconciled dataset with a row-level decision log.",
      "folder": "projects/programme-1/01-sales-data-quality",
      "skills": [
        "pandas cleaning",
        "data quality rules",
        "duplicate detection",
        "data lineage",
        "reconciliation"
      ],
      "deliverables": [
        "cleaned_sales.csv",
        "rejected_sales.csv",
        "decision_log.csv",
        "monthly_reconciliation.csv",
        "data_quality_report.json"
      ],
      "milestones": [
        "State the grain and business key",
        "Profile missing, invalid and duplicate fields",
        "Document cleaning/rejection rules",
        "Generate clean, rejected and audit outputs",
        "Reconcile source, accepted and rejected counts",
        "Explain limitations and source-system actions"
      ]
    },
    {
      "id": "retail-performance",
      "title": "Retail Performance Analysis",
      "summary": "Analyse monthly and segment performance, build charts and produce a business insight brief.",
      "folder": "projects/programme-1/02-retail-performance",
      "skills": [
        "pandas aggregation",
        "metric definitions",
        "Matplotlib",
        "segment analysis",
        "business recommendations"
      ],
      "deliverables": [
        "monthly_performance.csv",
        "region_performance.csv",
        "category_performance.csv",
        "customer_performance.csv",
        "three PNG charts",
        "insights.md"
      ],
      "milestones": [
        "Define gross and net revenue",
        "Validate order-line data",
        "Build monthly and segment summaries",
        "Reconcile summary to line-level revenue",
        "Create labelled visualisations",
        "Present recommendations and caveats"
      ]
    },
    {
      "id": "funnel-cohort",
      "title": "Customer Funnel and Cohort Analysis",
      "summary": "Define distinct-user funnel denominators and calculate signup-cohort activity retention.",
      "folder": "projects/programme-1/03-funnel-cohort-analysis",
      "skills": [
        "event data",
        "conversion analysis",
        "cohort construction",
        "retention matrix",
        "metric governance"
      ],
      "deliverables": [
        "funnel_metrics.csv",
        "cohort_activity.csv",
        "cohort_retention.csv",
        "cohort_retention_heatmap.png",
        "metric_definitions.md"
      ],
      "milestones": [
        "Validate event grain and event IDs",
        "Define funnel stages and unique-user denominators",
        "Calculate stage and overall conversion",
        "Assign first-signup cohorts",
        "Calculate monthly activity and retention",
        "Explain instrumentation and causality limits"
      ]
    },
    {
      "id": "automated-reporting",
      "title": "Automated Reporting Pipeline",
      "summary": "Ingest an offline API fixture and monthly files into SQLite, analyse them with pandas and deliver a validated Excel workbook.",
      "folder": "projects/programme-1/04-automated-reporting-pipeline",
      "skills": [
        "API ingestion contract",
        "CSV validation",
        "SQLite",
        "parameterised SQL",
        "pandas",
        "openpyxl",
        "logging"
      ],
      "deliverables": [
        "source_snapshot.json",
        "report_database.sqlite",
        "paid_order_extract.csv",
        "monthly_paid_summary.csv",
        "monthly_report.xlsx",
        "run.log"
      ],
      "milestones": [
        "Validate API fixture and monthly file schemas",
        "Deduplicate and validate source records",
        "Load all sources into relational SQLite tables",
        "Extract and aggregate paid orders with pandas",
        "Reconcile database details to monthly summary",
        "Generate and reload the Excel workbook",
        "Document run steps, security and limitations"
      ]
    }
  ],
  "interviewAllocation": {
    "Lowball": 20,
    "Core": 35,
    "Highball": 25,
    "Trap": 20,
    "total": 100
  },
  "interviewQuestions": [
    {
      "id": "p1-lowball-001",
      "tier": "Lowball",
      "topic": "Data fundamentals",
      "question": "What does one row represent in a dataset?",
      "answer": "A row represents one observation at the table's declared grain, such as one order line, one customer or one event. The grain must be stated before calculating counts or joining tables.",
      "rationale": "The same dataset can contain repeated customer IDs because its grain may be order-line rather than customer.",
      "followUp": "What could go wrong if you count rows as customers?"
    },
    {
      "id": "p1-lowball-002",
      "tier": "Lowball",
      "topic": "Data fundamentals",
      "question": "What is a primary key?",
      "answer": "A primary key is a column or set of columns that uniquely identifies each row and cannot be NULL. It provides a stable way to refer to a record.",
      "rationale": "A supposed key that contains duplicates is not a valid unique identifier.",
      "followUp": "How would you test a proposed composite key?"
    },
    {
      "id": "p1-lowball-003",
      "tier": "Lowball",
      "topic": "Data quality",
      "question": "How are a missing value and zero different?",
      "answer": "Missing means the value is unknown, unavailable or not recorded. Zero is a known numeric value. Replacing missing values with zero changes the meaning and can distort averages and totals.",
      "rationale": "The correct treatment depends on why the value is missing and what the metric means.",
      "followUp": "Give an example where zero is a valid observation."
    },
    {
      "id": "p1-lowball-004",
      "tier": "Lowball",
      "topic": "Statistics",
      "question": "When would you report the median instead of the mean?",
      "answer": "Use the median when a distribution is skewed or contains extreme values and the typical central observation is more representative than the arithmetic average.",
      "rationale": "A small number of very high transaction values can pull the mean upward.",
      "followUp": "How would you show both typical value and spread?"
    },
    {
      "id": "p1-lowball-005",
      "tier": "Lowball",
      "topic": "pandas",
      "question": "What is a pandas DataFrame?",
      "answer": "A DataFrame is a two-dimensional labelled table with rows, columns and column-specific data types. It is commonly used for cleaning, transformation and analysis.",
      "rationale": "The labels and dtypes help make operations explicit and reduce manual row handling.",
      "followUp": "How would you inspect a newly loaded DataFrame?"
    },
    {
      "id": "p1-lowball-006",
      "tier": "Lowball",
      "topic": "pandas",
      "question": "What does groupby do?",
      "answer": "groupby divides rows into groups based on one or more keys, applies calculations to each group and combines the results.",
      "rationale": "For example, grouping order rows by month and summing revenue produces monthly revenue.",
      "followUp": "How is agg different from transform?"
    },
    {
      "id": "p1-lowball-007",
      "tier": "Lowball",
      "topic": "Python",
      "question": "What is the difference between a list and a dictionary?",
      "answer": "A list stores an ordered sequence accessed by position. A dictionary stores key-value pairs accessed by key.",
      "rationale": "A list suits ordered repeated values; a dictionary suits named attributes or lookup records.",
      "followUp": "When would a list of dictionaries be useful?"
    },
    {
      "id": "p1-lowball-008",
      "tier": "Lowball",
      "topic": "Python",
      "question": "Why should a function return a value instead of only printing it?",
      "answer": "A returned value can be reused, tested, combined with other calculations or saved. Printed text is only a display side effect.",
      "rationale": "Separating calculation from display makes analysis functions easier to test and reuse.",
      "followUp": "How could a reporting script use the same function twice?"
    },
    {
      "id": "p1-lowball-009",
      "tier": "Lowball",
      "topic": "Files",
      "question": "What is the difference between CSV and XLSX?",
      "answer": "CSV is plain text representing delimited tabular values. XLSX is an Office Open XML workbook that can contain multiple sheets, styles, formulas and other workbook features.",
      "rationale": "CSV is simple and interoperable; XLSX is appropriate when the deliverable needs workbook structure and presentation.",
      "followUp": "Which format would you use for a machine-readable extract?"
    },
    {
      "id": "p1-lowball-010",
      "tier": "Lowball",
      "topic": "APIs",
      "question": "What is an API?",
      "answer": "An API is a documented contract that allows one software system to request data or actions from another system.",
      "rationale": "An HTTP API defines endpoints, methods, parameters and response structures.",
      "followUp": "Why is an API response contract important to an analyst?"
    },
    {
      "id": "p1-lowball-011",
      "tier": "Lowball",
      "topic": "APIs",
      "question": "What does an HTTP GET request normally do?",
      "answer": "GET retrieves a representation of a resource and should not be used to change server state.",
      "rationale": "Query parameters can filter or page the retrieved records.",
      "followUp": "What is the role of a URL path versus a query parameter?"
    },
    {
      "id": "p1-lowball-012",
      "tier": "Lowball",
      "topic": "APIs",
      "question": "What is JSON?",
      "answer": "JSON is a text format for structured data using objects, arrays, strings, numbers, booleans and null.",
      "rationale": "An API may return an object containing a results array and pagination metadata.",
      "followUp": "Why should you validate JSON keys before analysis?"
    },
    {
      "id": "p1-lowball-013",
      "tier": "Lowball",
      "topic": "APIs",
      "question": "Why should an HTTP client check the response status?",
      "answer": "A successful network connection does not guarantee the request succeeded. Status codes distinguish successful responses, client errors, rate limits and server failures.",
      "rationale": "A 404 should not be treated as a valid empty dataset.",
      "followUp": "How would you handle a 429 response?"
    },
    {
      "id": "p1-lowball-014",
      "tier": "Lowball",
      "topic": "APIs",
      "question": "What is a request timeout?",
      "answer": "A timeout limits how long a client waits for a response before treating the attempt as failed.",
      "rationale": "Without a timeout, a stuck service can block a reporting workflow indefinitely.",
      "followUp": "What would you choose as a reasonable timeout for a small report?"
    },
    {
      "id": "p1-lowball-015",
      "tier": "Lowball",
      "topic": "SQL",
      "question": "What is SQLite?",
      "answer": "SQLite is a lightweight relational database engine that stores a database in a file or in memory and runs within the application process.",
      "rationale": "It is useful for local analytics, prototypes and deterministic exercises without a separate database server.",
      "followUp": "When would a server database be more appropriate?"
    },
    {
      "id": "p1-lowball-016",
      "tier": "Lowball",
      "topic": "SQL",
      "question": "What is a parameterised SQL query?",
      "answer": "A parameterised query uses placeholders for input values and supplies those values separately from the SQL text.",
      "rationale": "The database treats the parameter as data, which reduces SQL injection risk and handles quoting safely.",
      "followUp": "Show how you would bind a customer name in sqlite3."
    },
    {
      "id": "p1-lowball-017",
      "tier": "Lowball",
      "topic": "Databases",
      "question": "What is a database transaction?",
      "answer": "A transaction groups database changes into a logical unit that commits together or rolls back on failure.",
      "rationale": "This prevents a partial update from leaving related tables inconsistent.",
      "followUp": "What should happen if the second insert in a transaction fails?"
    },
    {
      "id": "p1-lowball-018",
      "tier": "Lowball",
      "topic": "Excel automation",
      "question": "What is a workbook and what is a worksheet?",
      "answer": "A workbook is the Excel file. A worksheet is one tabular sheet inside that file.",
      "rationale": "One workbook can separate a summary from row-level details.",
      "followUp": "What should a handoff workbook include for an analyst?"
    },
    {
      "id": "p1-lowball-019",
      "tier": "Lowball",
      "topic": "Excel automation",
      "question": "Does openpyxl calculate Excel formulas?",
      "answer": "No. openpyxl can write and read formula text, but it does not evaluate formulas. Excel or another compatible calculation engine must calculate the result.",
      "rationale": "Tests should inspect stored formulas and should not claim a cached numeric result exists unless a calculation engine produced it.",
      "followUp": "How can you request recalculation when the workbook opens?"
    },
    {
      "id": "p1-lowball-020",
      "tier": "Lowball",
      "topic": "Business metrics",
      "question": "What does reconciliation mean in reporting?",
      "answer": "Reconciliation checks that related totals agree across stages or representations, such as accepted source rows matching clean rows plus rejected rows.",
      "rationale": "It detects lost, duplicated or transformed records that change the numbers unexpectedly.",
      "followUp": "Which totals would you reconcile in an automated sales report?"
    },
    {
      "id": "p1-core-001",
      "tier": "Core",
      "topic": "Problem framing",
      "question": "How do you turn a vague request like 'sales are down' into an analysis plan?",
      "answer": "Clarify the decision, time period, comparison baseline, business definition of sales, granularity and relevant segments. Then inspect the data and define the measures before analysis.",
      "rationale": "This prevents answering a different question from the stakeholder's actual decision.",
      "followUp": "What would you ask before comparing this month with last month?"
    },
    {
      "id": "p1-core-002",
      "tier": "Core",
      "topic": "Data quality",
      "question": "How do you decide whether to remove a duplicate row?",
      "answer": "First identify the table grain and business key. Compare duplicate records, distinguish a repeated export from legitimate multiple events, document the rule and retain an audit trail.",
      "rationale": "Blindly dropping duplicates can remove valid transactions when the chosen key is too broad.",
      "followUp": "What if two rows share an order ID but have different line-item IDs?"
    },
    {
      "id": "p1-core-003",
      "tier": "Core",
      "topic": "Data quality",
      "question": "What would you do when a date column contains mixed formats?",
      "answer": "Preserve the raw value, parse with an explicit format where possible, coerce invalid values to a flagged missing result, quantify failures and investigate the source before deciding to correct or exclude them.",
      "rationale": "Silent date coercion can shift periods or misclassify records.",
      "followUp": "How would you test ambiguous dates such as 03/04/2026?"
    },
    {
      "id": "p1-core-004",
      "tier": "Core",
      "topic": "Data quality",
      "question": "How do you handle inconsistent category labels such as 'south', ' South ' and 'SOUTH'?",
      "answer": "Apply a documented normalization such as whitespace trimming and consistent casing, then compare category frequencies before and after. Preserve the raw label if auditability matters.",
      "rationale": "Normalization should merge spelling variants, not merge genuinely different categories.",
      "followUp": "How would you handle 'NY' and 'New York'?"
    },
    {
      "id": "p1-core-005",
      "tier": "Core",
      "topic": "Data quality",
      "question": "How would you identify an outlier in a revenue dataset?",
      "answer": "Inspect the distribution, use robust summaries such as quartiles and IQR, compare values to business constraints and investigate source records. Do not delete a value solely because it is statistically unusual.",
      "rationale": "An unusual transaction may be a valid high-value sale rather than an error.",
      "followUp": "How would your decision differ for an impossible negative quantity?"
    },
    {
      "id": "p1-core-006",
      "tier": "Core",
      "topic": "Data quality",
      "question": "What belongs in a cleaning decision log?",
      "answer": "At minimum the source row/key, decision, rule or reason, fields changed and enough context to reproduce the treatment. Summaries should quantify each defect type.",
      "rationale": "A decision log lets another analyst explain why records changed or disappeared.",
      "followUp": "How would you make the log useful for correcting the upstream system?"
    },
    {
      "id": "p1-core-007",
      "tier": "Core",
      "topic": "pandas",
      "question": "When would you use loc rather than iloc?",
      "answer": "loc selects by index or label and supports label-based conditions. iloc selects by integer position.",
      "rationale": "The choice is semantic: labels describe which records or fields; positions describe their ordinal location.",
      "followUp": "What can break if you assume an index is always 0,1,2...?"
    },
    {
      "id": "p1-core-008",
      "tier": "Core",
      "topic": "pandas",
      "question": "What is the difference between merge and concat?",
      "answer": "merge combines tables by matching keys, like a relational join. concat stacks or aligns objects along an axis.",
      "rationale": "A customer-to-orders relationship generally needs merge; monthly extracts with the same columns generally need concat.",
      "followUp": "How would you validate a many-to-one merge?"
    },
    {
      "id": "p1-core-009",
      "tier": "Core",
      "topic": "pandas",
      "question": "What is a many-to-many join risk?",
      "answer": "If a key appears multiple times on both sides, matching rows multiply into every combination for that key. This can inflate counts and sums.",
      "rationale": "Row multiplication is a common source of overreported revenue after joins.",
      "followUp": "Which pandas merge validation would you use for a customer dimension?"
    },
    {
      "id": "p1-core-010",
      "tier": "Core",
      "topic": "pandas",
      "question": "How would you preserve unmatched records when joining orders to customers?",
      "answer": "Use a left join from orders to customers and inspect rows whose customer fields are missing. Keep an unmatched-key count and investigate or label them explicitly.",
      "rationale": "An inner join silently drops orders whose customer key is not found.",
      "followUp": "How would you reconcile order counts before and after the join?"
    },
    {
      "id": "p1-core-011",
      "tier": "Core",
      "topic": "pandas",
      "question": "When should you use transform rather than agg?",
      "answer": "Use agg when you want one row per group with summary values. Use transform when you need a group-level calculation broadcast back to each original row.",
      "rationale": "For example, a region's average sale can be attached to each order row using transform.",
      "followUp": "How could you calculate each order's share of its region's revenue?"
    },
    {
      "id": "p1-core-012",
      "tier": "Core",
      "topic": "pandas",
      "question": "How would you combine monthly CSV files safely?",
      "answer": "Discover files deterministically, validate schema and dtypes per file, attach source-file metadata, parse dates, concatenate, check duplicate keys and reconcile file counts and totals.",
      "rationale": "Files that look similar can drift in columns or formats across months.",
      "followUp": "What would you do if one file has an extra column and another is missing a required column?"
    },
    {
      "id": "p1-core-013",
      "tier": "Core",
      "topic": "Python",
      "question": "Why should reusable analysis code separate functions for input, validation and reporting?",
      "answer": "Each function has one responsibility, so it can be tested independently and failures can be localized. The orchestration function connects the stages.",
      "rationale": "This makes reruns, debugging and reuse safer than one long script.",
      "followUp": "How would you pass configuration without relying on global variables?"
    },
    {
      "id": "p1-core-014",
      "tier": "Core",
      "topic": "Python",
      "question": "How do you handle an expected file-not-found error?",
      "answer": "Catch FileNotFoundError around the operation, report the path and explain the expected input. Avoid catching every Exception and hiding programming defects.",
      "rationale": "Specific exceptions preserve actionable diagnostics and do not disguise unrelated bugs.",
      "followUp": "What should a batch pipeline do when one monthly file is missing?"
    },
    {
      "id": "p1-core-015",
      "tier": "Core",
      "topic": "Python",
      "question": "What is the benefit of a virtual environment?",
      "answer": "It isolates project dependencies and versions, allowing a project to be installed and reproduced without changing packages used by other projects.",
      "rationale": "Dependency isolation makes setup and deployment predictable.",
      "followUp": "What would you record in a requirements file?"
    },
    {
      "id": "p1-core-016",
      "tier": "Core",
      "topic": "Python",
      "question": "How would you make a file-processing script idempotent?",
      "answer": "Ensure rerunning with the same inputs produces the same outputs without duplicating side effects. Use deterministic ordering, controlled output replacement or upserts and stable keys.",
      "rationale": "A rerunnable script reduces operational risk when a scheduled task is retried.",
      "followUp": "What could cause a supposedly idempotent pipeline to double-count records?"
    },
    {
      "id": "p1-core-017",
      "tier": "Core",
      "topic": "SQL",
      "question": "What is the difference between WHERE and HAVING?",
      "answer": "WHERE filters source rows before aggregation. HAVING filters aggregated groups after GROUP BY.",
      "rationale": "A date filter usually belongs in WHERE; a condition on SUM(revenue) belongs in HAVING.",
      "followUp": "Can HAVING be used without GROUP BY in SQLite?"
    },
    {
      "id": "p1-core-018",
      "tier": "Core",
      "topic": "SQL",
      "question": "How would you calculate monthly revenue in SQL?",
      "answer": "Group rows by a month expression derived from the transaction date and sum the revenue field, with an explicit date-range filter if needed.",
      "rationale": "SQL can perform filtering and aggregation close to the stored data, reducing the extract size.",
      "followUp": "How would you compare current month with previous month?"
    },
    {
      "id": "p1-core-019",
      "tier": "Core",
      "topic": "SQL",
      "question": "Why are bound parameters safer than interpolating values into SQL?",
      "answer": "Bound parameters keep query structure separate from supplied values and prevent data from being interpreted as executable SQL.",
      "rationale": "String interpolation exposes queries to injection, quoting bugs and type errors.",
      "followUp": "How do you pass two parameters to a sqlite3 query?"
    },
    {
      "id": "p1-core-020",
      "tier": "Core",
      "topic": "SQL",
      "question": "How would you find duplicate business keys in a table?",
      "answer": "Group by the key and use HAVING COUNT(*) greater than one, or use a window count to retain row-level detail.",
      "rationale": "The duplicate test must match the declared grain and key policy.",
      "followUp": "How would you identify the first and later occurrence of a duplicated key?"
    },
    {
      "id": "p1-core-021",
      "tier": "Core",
      "topic": "SQL",
      "question": "What is the difference between INNER JOIN and LEFT JOIN?",
      "answer": "INNER JOIN keeps only matching rows. LEFT JOIN retains every row from the left table and supplies NULLs for unmatched right rows.",
      "rationale": "The correct join depends on whether unmatched facts should remain visible.",
      "followUp": "How would you count unmatched foreign keys after a left join?"
    },
    {
      "id": "p1-core-022",
      "tier": "Core",
      "topic": "SQL",
      "question": "When would you prefer SQL aggregation over pandas aggregation?",
      "answer": "Use SQL when filtering, joining and aggregating large stored tables is efficient near the data source. Use pandas for in-memory transformations, richer data cleaning and analysis after extracting a manageable result.",
      "rationale": "Both tools can group data; choose based on data volume, maintainability and location.",
      "followUp": "How would you avoid extracting an entire multi-million-row fact table?"
    },
    {
      "id": "p1-core-023",
      "tier": "Core",
      "topic": "Statistics",
      "question": "What is the difference between standard deviation and standard error?",
      "answer": "Standard deviation describes variability among observations. Standard error describes uncertainty in an estimate, often decreasing with the square root of sample size under assumptions.",
      "rationale": "They answer different questions and should not be used interchangeably.",
      "followUp": "Which one belongs in an error bar when showing uncertainty in a sample mean?"
    },
    {
      "id": "p1-core-024",
      "tier": "Core",
      "topic": "Statistics",
      "question": "What does a 95% confidence interval mean?",
      "answer": "In repeated sampling under the method's assumptions, about 95% of intervals constructed in this way would contain the fixed population parameter. It is not a 95% probability statement about this particular fixed parameter after observing the data.",
      "rationale": "Correct interpretation avoids describing a confidence interval as a probability range for an individual observation.",
      "followUp": "What assumptions affect the interval's validity?"
    },
    {
      "id": "p1-core-025",
      "tier": "Core",
      "topic": "Statistics",
      "question": "Why might you use Welch's t-test instead of the pooled t-test?",
      "answer": "Welch's test compares two independent means without assuming equal population variances and adjusts its degrees of freedom accordingly.",
      "rationale": "Equal sample variances should not be assumed automatically.",
      "followUp": "When would a paired t-test be more appropriate?"
    },
    {
      "id": "p1-core-026",
      "tier": "Core",
      "topic": "Statistics",
      "question": "What is an effect size and why report it with a p-value?",
      "answer": "An effect size quantifies the magnitude of a difference or relationship. A p-value alone does not describe practical importance.",
      "rationale": "A tiny effect can be statistically significant in a very large sample.",
      "followUp": "Which effect size could accompany a two-group mean comparison?"
    },
    {
      "id": "p1-core-027",
      "tier": "Core",
      "topic": "Statistics",
      "question": "What is the difference between correlation and causation?",
      "answer": "Correlation describes association between variables. Causation requires a design or identification strategy that rules out plausible alternative explanations.",
      "rationale": "Confounding, reverse causality and selection bias can create misleading associations.",
      "followUp": "What evidence would strengthen a causal claim?"
    },
    {
      "id": "p1-core-028",
      "tier": "Core",
      "topic": "Statistics",
      "question": "When is a chi-square test of independence appropriate?",
      "answer": "It tests association between two categorical variables using counts in a contingency table, assuming observations are appropriately independent and expected cell counts are adequate.",
      "rationale": "It is not a test for differences between two continuous means.",
      "followUp": "What alternative might you consider for very sparse tables?"
    },
    {
      "id": "p1-core-029",
      "tier": "Core",
      "topic": "Visualisation",
      "question": "How do you choose between a bar chart and a line chart?",
      "answer": "Use bars to compare discrete categories and lines to show ordered trends over time or another continuous sequence.",
      "rationale": "The chart should match the structure of the question and data.",
      "followUp": "When would a sorted horizontal bar chart be clearer than vertical bars?"
    },
    {
      "id": "p1-core-030",
      "tier": "Core",
      "topic": "Visualisation",
      "question": "Why should a time-series chart label its time zone and aggregation period?",
      "answer": "Dates can be interpreted differently across time zones and period definitions. Explicit labelling makes the metric window reproducible.",
      "rationale": "A daily metric can shift across boundaries if UTC and local time are mixed.",
      "followUp": "How would you aggregate events recorded in UTC for an India business report?"
    },
    {
      "id": "p1-core-031",
      "tier": "Core",
      "topic": "Visualisation",
      "question": "When is a zero baseline important?",
      "answer": "For bars, the length of a bar encodes magnitude, so a truncated zero baseline can exaggerate differences. For some line charts, a focused range may be reasonable if clearly labelled.",
      "rationale": "Visual integrity depends on how the visual encoding communicates size.",
      "followUp": "How can you call attention to a small trend without misleading the audience?"
    },
    {
      "id": "p1-core-032",
      "tier": "Core",
      "topic": "APIs",
      "question": "Which API failures should normally be retried?",
      "answer": "Retry selected transient failures such as timeouts, HTTP 429 and some 5xx responses with a bounded attempt count and backoff. Do not blindly retry permanent 4xx errors.",
      "rationale": "A retry policy needs a safety cap and should respect Retry-After when available.",
      "followUp": "How would you handle a 401 versus a 503?"
    },
    {
      "id": "p1-core-033",
      "tier": "Core",
      "topic": "APIs",
      "question": "How do you protect API credentials in a data pipeline?",
      "answer": "Store them in environment variables or a secrets manager, read them at runtime, restrict access, redact logs and rotate them. Never commit or expose private credentials in browser code.",
      "rationale": "A public browser application cannot keep a private secret confidential.",
      "followUp": "Where should a private API key be used in a web architecture?"
    },
    {
      "id": "p1-core-034",
      "tier": "Core",
      "topic": "APIs",
      "question": "How would you detect incomplete API pagination?",
      "answer": "Follow the API's documented cursor or next-page token until it signals completion. Validate page sequence and totals where available, enforce a maximum-page limit and record retrieval metadata.",
      "rationale": "A fixed number of page calls can silently truncate data when result volume changes.",
      "followUp": "How would you resume safely after a page request fails?"
    },
    {
      "id": "p1-core-035",
      "tier": "Core",
      "topic": "Databases",
      "question": "How do you ensure a batch insert is all-or-nothing?",
      "answer": "Wrap the inserts in a transaction, commit after all statements succeed and roll back when a failure occurs.",
      "rationale": "The transaction boundary must cover every related write.",
      "followUp": "How would you verify that the rollback left the database unchanged?"
    },
    {
      "id": "p1-highball-001",
      "tier": "Highball",
      "topic": "Data architecture",
      "question": "How would you design a reproducible analytics pipeline for a recurring finance report?",
      "answer": "Separate extraction, immutable/raw retention, schema validation, cleaning, transformation, aggregation, reconciliation, output generation and run metadata. Version the code and dependencies; parameterize dates and output locations; make reruns idempotent; log row counts and failures.",
      "rationale": "A pipeline is an operational product with lineage and controls, not just a script that happens to run once.",
      "followUp": "How would you backfill a year of monthly data without creating duplicate reports?"
    },
    {
      "id": "p1-highball-002",
      "tier": "Highball",
      "topic": "Data quality",
      "question": "How would you quantify data quality for a customer master table?",
      "answer": "Define measurable dimensions such as completeness, uniqueness, validity, consistency and timeliness at a stated grain. Build rule-level counts and rates, track trends, identify business impact and route defects to owners.",
      "rationale": "A single overall quality score hides which rules fail and how material the failure is.",
      "followUp": "Which quality metrics would block a revenue report?"
    },
    {
      "id": "p1-highball-003",
      "tier": "Highball",
      "topic": "Data modelling",
      "question": "Explain slowly changing dimensions at a practical level.",
      "answer": "A slowly changing dimension tracks changes in descriptive attributes. Type 1 overwrites the old value; Type 2 stores versioned rows with effective dates and a current-record marker so historical facts can retain the attribute valid at that time.",
      "rationale": "The right type depends on whether historical reporting needs the old attribute values.",
      "followUp": "How would you preserve region-at-time-of-sale when a customer moves?"
    },
    {
      "id": "p1-highball-004",
      "tier": "Highball",
      "topic": "pandas",
      "question": "How would you diagnose unexpected row multiplication after a merge?",
      "answer": "Check key uniqueness and cardinality on both inputs, compare row counts before and after, inspect duplicated keys and use pandas merge validation such as many_to_one or one_to_one where justified.",
      "rationale": "A successful merge is not proof of a correct relationship.",
      "followUp": "How could you identify the exact keys responsible for the multiplication?"
    },
    {
      "id": "p1-highball-005",
      "tier": "Highball",
      "topic": "pandas",
      "question": "How would you process a dataset too large to fit in memory?",
      "answer": "Push filters and aggregations into the database or source, read in chunks where supported, use appropriate dtypes, process partitions and write incremental results. Consider a columnar engine when appropriate.",
      "rationale": "Chunking is useful only if the calculation can be decomposed without losing correctness.",
      "followUp": "How would you calculate an exact distinct-customer count across chunks?"
    },
    {
      "id": "p1-highball-006",
      "tier": "Highball",
      "topic": "pandas",
      "question": "How would you build a trustworthy rolling 7-day metric?",
      "answer": "Sort by timestamp, define the time zone and calendar boundaries, resample or use a time-based rolling window, handle missing days explicitly and verify whether the window includes the current observation.",
      "rationale": "A seven-row window is not necessarily seven calendar days when dates are missing.",
      "followUp": "What would change between a trailing seven-day sum and a seven-day average?"
    },
    {
      "id": "p1-highball-007",
      "tier": "Highball",
      "topic": "SQL",
      "question": "How would you calculate a customer retention cohort matrix in SQL?",
      "answer": "Identify each customer's first signup cohort, join subsequent qualifying activity, calculate month age from cohort to activity month, count distinct active customers for each cohort/age pair and divide by the cohort size.",
      "rationale": "The denominator must remain the original cohort size for each age period.",
      "followUp": "How would you prevent events before first signup from counting as retention?"
    },
    {
      "id": "p1-highball-008",
      "tier": "Highball",
      "topic": "SQL",
      "question": "Explain a window function versus GROUP BY.",
      "answer": "GROUP BY collapses rows into one row per group. A window function calculates across a related set while preserving the rows, supporting rankings, running totals and row comparisons.",
      "rationale": "Choose window functions when the original records must remain available alongside group-level values.",
      "followUp": "Write the logic for each customer's first transaction date."
    },
    {
      "id": "p1-highball-009",
      "tier": "Highball",
      "topic": "SQL",
      "question": "How would you detect gaps in daily activity using SQL?",
      "answer": "Build a calendar or sequence of expected dates, aggregate actual activity by day and left join the expected sequence. Flag dates with no matching activity. Alternatively use LAG to compare consecutive observed dates when only gaps between observations matter.",
      "rationale": "The expected calendar is needed to detect leading and trailing missing periods reliably.",
      "followUp": "How would you distinguish a missing source day from a genuine zero-activity day?"
    },
    {
      "id": "p1-highball-010",
      "tier": "Highball",
      "topic": "SQL",
      "question": "How would you make an analytical SQL extract both safe and performant?",
      "answer": "Use bound parameters for values, select only required columns, filter early, inspect join keys and cardinality, use appropriate indexes and review the query plan. Avoid SELECT * on large fact tables.",
      "rationale": "Security and performance are separate concerns; a parameterised query can still be inefficient.",
      "followUp": "Which predicates or join columns would you consider indexing?"
    },
    {
      "id": "p1-highball-011",
      "tier": "Highball",
      "topic": "Statistics",
      "question": "How would you evaluate a before/after change when the same customers are measured twice?",
      "answer": "Use a paired analysis of within-customer differences, inspect the distribution of differences and report the estimated change with an interval and effect size. Consider missing follow-up and time-related confounding.",
      "rationale": "The paired structure reduces between-customer variability but does not make the change causal by itself.",
      "followUp": "What design would strengthen a causal interpretation?"
    },
    {
      "id": "p1-highball-012",
      "tier": "Highball",
      "topic": "Statistics",
      "question": "How do you control false discoveries when testing hundreds of segments?",
      "answer": "Predefine a primary analysis where possible, account for multiplicity with a method such as Holm or Benjamini-Hochberg depending on the inferential goal, and distinguish exploratory results from confirmatory claims.",
      "rationale": "Repeated testing increases the chance of at least one apparently significant result by chance.",
      "followUp": "How would you explain false discovery rate to a business stakeholder?"
    },
    {
      "id": "p1-highball-013",
      "tier": "Highball",
      "topic": "Statistics",
      "question": "What is Simpson's paradox and how can it affect a KPI?",
      "answer": "An aggregate trend can reverse within subgroups when group sizes or composition change. Always inspect relevant strata and understand the weighting behind the aggregate.",
      "rationale": "A channel may look better overall because its audience mix differs, not because its conversion is better in each segment.",
      "followUp": "How would you communicate both the aggregate and stratified result?"
    },
    {
      "id": "p1-highball-014",
      "tier": "Highball",
      "topic": "Statistics",
      "question": "How would you estimate uncertainty for a conversion rate?",
      "answer": "For a simple binomial proportion, use a suitable interval such as Wilson's interval, report numerator and denominator, and check independence and sampling assumptions. For clustered or repeated observations, use a method that reflects that structure.",
      "rationale": "The standard normal approximation can perform poorly with small samples or extreme proportions.",
      "followUp": "What changes if customers contribute multiple sessions?"
    },
    {
      "id": "p1-highball-015",
      "tier": "Highball",
      "topic": "Statistics",
      "question": "How would you decide whether to use ANOVA or multiple t-tests?",
      "answer": "For three or more independent group means, use an omnibus ANOVA under its assumptions, then apply appropriate post-hoc comparisons with multiplicity control when the omnibus test and analysis plan justify them.",
      "rationale": "Many unadjusted pairwise tests inflate false-positive risk.",
      "followUp": "What diagnostic checks would you perform before a one-way ANOVA?"
    },
    {
      "id": "p1-highball-016",
      "tier": "Highball",
      "topic": "Experimentation",
      "question": "How would you size an A/B test?",
      "answer": "Specify the primary metric, baseline rate or variance, smallest meaningful effect, significance level, desired power, allocation ratio and experiment duration. Account for clustering, repeated looks and expected attrition when relevant.",
      "rationale": "Sample size depends on a decision-relevant effect, not on a generic number of users.",
      "followUp": "How would seasonality or a low traffic rate affect the plan?"
    },
    {
      "id": "p1-highball-017",
      "tier": "Highball",
      "topic": "Experimentation",
      "question": "What is a guardrail metric?",
      "answer": "A guardrail metric detects an unacceptable side effect while the primary metric measures the target outcome, such as measuring refund rate alongside conversion.",
      "rationale": "Optimizing one metric can damage customer experience, quality or long-term value.",
      "followUp": "Which guardrails would you use for an aggressive discount experiment?"
    },
    {
      "id": "p1-highball-018",
      "tier": "Highball",
      "topic": "Visualisation",
      "question": "How would you visualize a conversion funnel without hiding denominator changes?",
      "answer": "Show distinct users at each stage, stage-to-stage conversion and overall conversion from the original eligible population. Label the analysis window and cohort eligibility rules.",
      "rationale": "Raw counts alone obscure stage-specific loss and inconsistent populations.",
      "followUp": "How would you handle users who skip a recorded stage?"
    },
    {
      "id": "p1-highball-019",
      "tier": "Highball",
      "topic": "APIs",
      "question": "How would you build a resilient incremental API ingestion process?",
      "answer": "Use stable cursors or updated-at checkpoints, bounded retries, rate-limit awareness, idempotent upserts keyed by source identifiers, schema validation and persisted checkpoints. Reconcile page/record counts and capture a source watermark.",
      "rationale": "A retry can return records already seen; idempotency avoids duplicate ingestion.",
      "followUp": "What happens if the process stops after saving the data but before saving the checkpoint?"
    },
    {
      "id": "p1-highball-020",
      "tier": "Highball",
      "topic": "APIs",
      "question": "How do you handle API schema drift?",
      "answer": "Validate required fields and types, preserve raw payloads where permitted, add version-aware parsing, alert on unexpected fields or missing required fields and quarantine incompatible records instead of silently misreading them.",
      "rationale": "A response can return HTTP 200 while changing field meaning or structure.",
      "followUp": "How would you deploy a parser change without corrupting a historical backfill?"
    },
    {
      "id": "p1-highball-021",
      "tier": "Highball",
      "topic": "Databases",
      "question": "How would you choose transaction boundaries for a reporting pipeline?",
      "answer": "Group logically dependent writes so they commit atomically. Keep long-running extraction outside a write transaction when possible, stage data, validate it, then commit a controlled load or swap.",
      "rationale": "Long transactions can lock resources; tiny transactions can leave partial loads.",
      "followUp": "How would staging tables help with a failed monthly load?"
    },
    {
      "id": "p1-highball-022",
      "tier": "Highball",
      "topic": "Databases",
      "question": "How would you prevent duplicate ingestion when a job is retried?",
      "answer": "Define a stable natural or source key, enforce uniqueness, use insert-on-conflict/upsert behaviour deliberately and record batch/run identifiers. Reconcile inserted, updated and skipped records.",
      "rationale": "Deduplication after the fact is weaker than an enforced database constraint.",
      "followUp": "How would you handle a source record whose business key changes?"
    },
    {
      "id": "p1-highball-023",
      "tier": "Highball",
      "topic": "Excel automation",
      "question": "How would you generate a workbook with both formula transparency and reproducible totals?",
      "answer": "Write detail and summary rows, store formulas where users expect them, independently calculate the expected totals in Python for reconciliation, request recalculation on open and inspect formulas rather than treating cached values as calculated by openpyxl.",
      "rationale": "The Python reconciliation gives an independent check of the workbook's intended calculation.",
      "followUp": "How could you validate an output workbook without Excel installed?"
    },
    {
      "id": "p1-highball-024",
      "tier": "Highball",
      "topic": "Excel automation",
      "question": "How would you make a monthly workbook generator maintainable?",
      "answer": "Separate input discovery, schema validation, transformation, workbook construction, styling, output naming and logging into functions. Pass configuration explicitly and test each stage with synthetic files.",
      "rationale": "A workbook script becomes brittle when business logic and formatting are interleaved.",
      "followUp": "How would you introduce a new worksheet without changing the ingestion code?"
    },
    {
      "id": "p1-highball-025",
      "tier": "Highball",
      "topic": "Project review",
      "question": "What evidence makes a portfolio project credible to a hiring manager?",
      "answer": "A precise business question, declared grain and metric definitions, traceable input data, reproducible code, quality checks, reconciled totals, readable outputs, limitations and a defensible recommendation.",
      "rationale": "A screenshot alone does not demonstrate that the work can be reproduced or that the metric is correct.",
      "followUp": "How would you demonstrate the project live in a ten-minute review?"
    },
    {
      "id": "p1-trap-001",
      "tier": "Trap",
      "topic": "Data quality",
      "question": "A row has quantity zero. Should you automatically delete it?",
      "answer": "No. Check the table grain and business meaning. A zero quantity might be a cancellation, adjustment or invalid line; document the rule and retain an audit reason if excluded.",
      "rationale": "A value that looks impossible in one dataset may be valid in another business process.",
      "followUp": "What source field would help you distinguish a cancellation from an error?"
    },
    {
      "id": "p1-trap-002",
      "tier": "Trap",
      "topic": "Data quality",
      "question": "You find 500 duplicate customer IDs in an orders table. Is the table corrupted?",
      "answer": "Not necessarily. Customer ID can repeat legitimately because the grain may be one row per order. Test the declared key, such as order ID or order-line ID.",
      "rationale": "Uniqueness must be checked against the correct grain.",
      "followUp": "How would you prove which columns define a row?"
    },
    {
      "id": "p1-trap-003",
      "tier": "Trap",
      "topic": "pandas",
      "question": "After a left merge, the row count increases. Does that mean the merge succeeded?",
      "answer": "No. Duplicate keys on the right may have multiplied left-side rows. Inspect key cardinality and use merge validation before trusting totals.",
      "rationale": "A merge can execute without error and still be analytically wrong.",
      "followUp": "What relationship should a dimension table usually satisfy?"
    },
    {
      "id": "p1-trap-004",
      "tier": "Trap",
      "topic": "pandas",
      "question": "A missing revenue value appears as NaN. Can you fill it with zero so the total works?",
      "answer": "Only if zero is the documented meaning. Otherwise the value is unknown, and zero imputation changes both totals and denominators. Investigate and quantify missingness first.",
      "rationale": "Making code run is not the same as preserving meaning.",
      "followUp": "How would you report revenue completeness?"
    },
    {
      "id": "p1-trap-005",
      "tier": "Trap",
      "topic": "Statistics",
      "question": "A p-value is 0.03. Does that mean there is a 97% chance your hypothesis is true?",
      "answer": "No. It is the probability, under the null and model assumptions, of observing a result at least as extreme as the one obtained. It is not the probability the null or alternative is true.",
      "rationale": "This is a classic reversal of conditional probability.",
      "followUp": "What additional quantities would you report alongside the p-value?"
    },
    {
      "id": "p1-trap-006",
      "tier": "Trap",
      "topic": "Statistics",
      "question": "A 95% confidence interval contains zero. Does that prove there is no effect?",
      "answer": "No. It means the data and method do not rule out zero at that interval level. The interval may also include effects that are practically important.",
      "rationale": "Absence of statistically significant evidence is not proof of no effect.",
      "followUp": "How would the interval width affect your conclusion?"
    },
    {
      "id": "p1-trap-007",
      "tier": "Trap",
      "topic": "Statistics",
      "question": "A correlation is 0.9. Can you conclude one variable caused the other?",
      "answer": "No. Confounding, reverse causality, common time trends and selection can produce strong associations without a causal relationship.",
      "rationale": "Association does not establish a causal mechanism.",
      "followUp": "What experiment or quasi-experimental design might help?"
    },
    {
      "id": "p1-trap-008",
      "tier": "Trap",
      "topic": "Statistics",
      "question": "A dashboard shows a 50% increase from 2 conversions to 3. Is that a strong result?",
      "answer": "The relative increase is 50%, but it is only one additional conversion and may be highly uncertain. Show absolute counts and uncertainty, not just the percentage.",
      "rationale": "Relative changes can exaggerate small-base movements.",
      "followUp": "What denominator and interval would you show?"
    },
    {
      "id": "p1-trap-009",
      "tier": "Trap",
      "topic": "Visualisation",
      "question": "Can you truncate the y-axis of a bar chart to make small differences visible?",
      "answer": "Usually not without a very clear reason because bar length encodes magnitude from a baseline. Use a dot plot or clearly labelled focused line chart if the intent is to show small differences.",
      "rationale": "A dramatic visual can mislead even when the values are correct.",
      "followUp": "Which alternative chart would you choose?"
    },
    {
      "id": "p1-trap-010",
      "tier": "Trap",
      "topic": "APIs",
      "question": "The API returned HTTP 200. Can you assume the data is valid?",
      "answer": "No. The response body may have the wrong type, missing keys, invalid values or an empty result caused by a request mistake. Validate schema and business constraints.",
      "rationale": "Transport success is separate from data correctness.",
      "followUp": "Which checks would you run before writing the payload to a database?"
    },
    {
      "id": "p1-trap-011",
      "tier": "Trap",
      "topic": "APIs",
      "question": "The API returned HTTP 404. Should you keep retrying three times?",
      "answer": "Normally no. A 404 is a client-side resource error and repeating an unchanged request will not fix it. Correct the URL or handle the missing resource.",
      "rationale": "Retries should target transient failures, not every failure.",
      "followUp": "Which status might justify a bounded retry?"
    },
    {
      "id": "p1-trap-012",
      "tier": "Trap",
      "topic": "APIs",
      "question": "You placed an API key in frontend JavaScript but obscured it with Base64. Is it secret?",
      "answer": "No. Base64 is encoding, not encryption. Anyone who can load the client code can recover the value. Use a trusted server-side component for private credentials.",
      "rationale": "Obfuscation does not establish a security boundary.",
      "followUp": "How would the browser authenticate to your backend instead?"
    },
    {
      "id": "p1-trap-013",
      "tier": "Trap",
      "topic": "SQL",
      "question": "You parameterised the WHERE value. Is the entire dynamically built query automatically safe?",
      "answer": "No. Parameters protect values, not SQL identifiers or arbitrary fragments. Table names, column names and sort directions need allow-lists or fixed query structure.",
      "rationale": "SQL parameterization has a defined scope.",
      "followUp": "How would you safely support a user choosing one of three sort columns?"
    },
    {
      "id": "p1-trap-014",
      "tier": "Trap",
      "topic": "SQL",
      "question": "A connection context manager exits successfully. Is the SQLite connection always closed?",
      "answer": "No. The context manager commits or rolls back the transaction; it does not automatically close the connection. Use an explicit close or try/finally.",
      "rationale": "Confusing transaction management with resource lifecycle can leak connections.",
      "followUp": "Where would you put close() in a report function?"
    },
    {
      "id": "p1-trap-015",
      "tier": "Trap",
      "topic": "Databases",
      "question": "An INSERT fails halfway through a batch. Can you assume prior rows were rolled back?",
      "answer": "Only if the writes were enclosed in a transaction that was rolled back. Without an explicit transaction boundary, partial work may remain committed depending on connection behaviour.",
      "rationale": "Atomicity must be designed, not assumed.",
      "followUp": "How would you test the rollback?"
    },
    {
      "id": "p1-trap-016",
      "tier": "Trap",
      "topic": "Excel automation",
      "question": "openpyxl saved a formula. Why is the cell blank when loaded with data_only=True?",
      "answer": "The workbook may not contain a calculated cached value because openpyxl does not evaluate formulas. Load with data_only=False to inspect formula text, or open it in a calculation engine.",
      "rationale": "A formula expression and its calculated result are different workbook values.",
      "followUp": "How could you independently reconcile that formula's intended total?"
    },
    {
      "id": "p1-trap-017",
      "tier": "Trap",
      "topic": "Excel automation",
      "question": "A workbook opens successfully. Does that prove its totals are correct?",
      "answer": "No. Structural validity only proves the file can be parsed. Check detail rows, summary aggregations, formulas, filters, formatting and source-to-output reconciliation.",
      "rationale": "A polished workbook can still contain a wrong number.",
      "followUp": "Which independent total would you compute before saving?"
    },
    {
      "id": "p1-trap-018",
      "tier": "Trap",
      "topic": "Metrics",
      "question": "Your conversion rate increased after a campaign. Can you credit the campaign?",
      "answer": "Not without a suitable comparison or causal design. Other changes, selection, seasonality or different traffic composition may explain the increase.",
      "rationale": "A before/after association is not necessarily an incremental campaign effect.",
      "followUp": "What experiment or control group could estimate lift?"
    },
    {
      "id": "p1-trap-019",
      "tier": "Trap",
      "topic": "Metrics",
      "question": "The average order value increased. Does that mean every customer spent more?",
      "answer": "No. The mean can rise because a small number of large purchases or a change in customer mix increased the total. Inspect distribution, median and segment composition.",
      "rationale": "Aggregate means hide heterogeneity.",
      "followUp": "Which distribution chart and quantiles would you use?"
    },
    {
      "id": "p1-trap-020",
      "tier": "Trap",
      "topic": "Project communication",
      "question": "A stakeholder asks you to remove rejected rows from the report so it looks cleaner. What do you do?",
      "answer": "Keep the approved reporting dataset clear, but retain the rejection log and quality summary. Explain exclusions and their impact so the output remains auditable.",
      "rationale": "Presentation should not erase evidence about data quality.",
      "followUp": "How would you present accepted and rejected counts without overwhelming an executive?"
    }
  ]
};
