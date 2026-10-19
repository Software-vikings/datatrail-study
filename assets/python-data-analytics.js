window.DataTrailPythonAnalytics = {
  "id": "python-data-analytics",
  "title": "Python for Data Analytics",
  "version": "1.4.0",
  "status": "in-progress",
  "description": "A mastery-based programme from absolute beginner Python through independent business-data workflows and data analyst interview readiness.",
  "learningContract": {
    "explanationOrder": [
      "everyday_problem",
      "plain_language_analogy",
      "python_concept",
      "technical_definition"
    ],
    "codeExamples": "Small, self-contained, runnable examples with every output displayed.",
    "exerciseFeedback": "Separate execution from correctness; show named checks, expected and actual values, a specific failure reason, a hint and retry.",
    "progression": "Mastery checks, not timers, typing or XP alone.",
    "practice": [
      "prediction",
      "guided",
      "easy",
      "core",
      "stretch",
      "debugging",
      "real_dataset",
      "cumulative_review"
    ],
    "accessibility": "Ordinary English, one new idea at a time, no unexplained jargon."
  },
  "stages": [
    {
      "id": "foundation",
      "title": "Stage A · Core Python foundations",
      "firstChapter": "P1-C00",
      "lastChapter": "P1-C08",
      "chapterCount": 9
    },
    {
      "id": "arrays",
      "title": "Stage B · NumPy and pandas",
      "firstChapter": "P1-C09",
      "lastChapter": "P1-C14",
      "chapterCount": 6
    },
    {
      "id": "analysis",
      "title": "Stage C · Statistics and visualisation",
      "firstChapter": "P1-C15",
      "lastChapter": "P1-C16",
      "chapterCount": 2
    },
    {
      "id": "workflows",
      "title": "Stage D · Real analyst workflows",
      "firstChapter": "P1-C17",
      "lastChapter": "P1-C19",
      "chapterCount": 3
    },
    {
      "id": "readiness",
      "title": "Stage E · Projects and analyst readiness",
      "firstChapter": "P1-C20",
      "lastChapter": "P1-C20",
      "chapterCount": 1
    }
  ],
  "chapters": [
    {
      "id": "P1-C00",
      "order": 1,
      "stage": "foundation",
      "title": "Getting started with Python",
      "prerequisites": [],
      "topics": [
        "Python installation and versions",
        "Editor, terminal and notebook workflow",
        "Running commands, scripts and cells",
        "Execution order and saving .py files"
      ],
      "outcomes": [
        "Run a Python instruction in the right place",
        "Save and rerun a script",
        "Explain the difference between code, output and an error"
      ],
      "references": [
        "cs50p",
        "python-tutorial"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C01",
      "order": 2,
      "stage": "foundation",
      "title": "First instructions and calculations",
      "prerequisites": [
        "P1-C00"
      ],
      "topics": [
        "print and comments",
        "Expressions and operators",
        "Variables and assignment",
        "Arithmetic, precedence and business calculations"
      ],
      "outcomes": [
        "Calculate revenue, cost, profit and tax",
        "Use clear variable names",
        "Predict the result of simple expressions"
      ],
      "references": [
        "cs50p",
        "python-tutorial"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C02",
      "order": 3,
      "stage": "foundation",
      "title": "Types, conversion and text",
      "prerequisites": [
        "P1-C01"
      ],
      "topics": [
        "Integers, floats, strings and Booleans",
        "None and type inspection",
        "Safe type conversion",
        "String methods and f-strings",
        "Number, currency and percentage formatting"
      ],
      "outcomes": [
        "Identify the type of a value",
        "Convert input before calculation",
        "Create readable business messages"
      ],
      "references": [
        "cs50p",
        "python-tutorial"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C03",
      "order": 4,
      "stage": "foundation",
      "title": "Decisions and business rules",
      "prerequisites": [
        "P1-C02"
      ],
      "topics": [
        "Comparison operators",
        "and, or and not",
        "if, elif and else",
        "Boundary conditions",
        "Combining business rules"
      ],
      "outcomes": [
        "Translate a written business rule into code",
        "Handle threshold boundaries correctly",
        "Test true and false cases"
      ],
      "references": [
        "cs50p",
        "python-tutorial"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C04",
      "order": 5,
      "stage": "foundation",
      "title": "Loops and repeated work",
      "prerequisites": [
        "P1-C03"
      ],
      "topics": [
        "for and while loops",
        "range, enumerate and zip",
        "break and continue",
        "Counters, accumulators and nested loops",
        "Looping through records"
      ],
      "outcomes": [
        "Process every record in a collection",
        "Calculate totals and counts",
        "Choose a loop that matches the task"
      ],
      "references": [
        "cs50p",
        "python-tutorial"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C05",
      "order": 6,
      "stage": "foundation",
      "title": "Python collections for business data",
      "prerequisites": [
        "P1-C04"
      ],
      "topics": [
        "Lists and list operations",
        "Tuples and unpacking",
        "Dictionaries and nested records",
        "Sets and uniqueness",
        "Indexing, slicing and copying",
        "Comprehensions and built-in functions"
      ],
      "outcomes": [
        "Represent orders and customers in Python",
        "Read and update nested records",
        "Remove duplicates and preserve order where required"
      ],
      "references": [
        "cs50p",
        "python-tutorial"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C06",
      "order": 7,
      "stage": "foundation",
      "title": "Functions and reusable analysis",
      "prerequisites": [
        "P1-C05"
      ],
      "topics": [
        "def, parameters and arguments",
        "Return values versus print",
        "Default and keyword arguments",
        "Local scope and global names",
        "Imports and standard-library modules",
        "Introductory objects and methods"
      ],
      "outcomes": [
        "Write reusable calculations",
        "Handle empty and invalid inputs deliberately",
        "Separate a calculation from its display"
      ],
      "references": [
        "cs50p",
        "python-tutorial"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C07",
      "order": 8,
      "stage": "foundation",
      "title": "Errors, debugging and tests",
      "prerequisites": [
        "P1-C06"
      ],
      "topics": [
        "Syntax, runtime and logic errors",
        "Tracebacks and reading error locations",
        "try, except, else and finally",
        "Assertions and test cases",
        "Debugging with small reproducible examples",
        "Readable code and basic test discipline"
      ],
      "outcomes": [
        "Explain why a program failed",
        "Catch only expected errors",
        "Verify ordinary, boundary and invalid cases"
      ],
      "references": [
        "cs50p",
        "python-tutorial"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C08",
      "order": 9,
      "stage": "foundation",
      "title": "Files, CSV, JSON and dates",
      "prerequisites": [
        "P1-C07"
      ],
      "topics": [
        "pathlib and file paths",
        "Text files and UTF-8",
        "CSV reader and writer",
        "JSON loading and saving",
        "Dates, parsing and formatting",
        "Working with folders and multiple files"
      ],
      "outcomes": [
        "Load and save business data",
        "Process CSV rows safely",
        "Parse date strings predictably"
      ],
      "references": [
        "python-tutorial",
        "python-library"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C09",
      "order": 10,
      "stage": "arrays",
      "title": "NumPy numerical foundations",
      "prerequisites": [
        "P1-C08"
      ],
      "topics": [
        "Arrays and array construction",
        "Shape, ndim and dtype",
        "Indexing, slicing and reshaping",
        "Vectorisation and broadcasting",
        "Boolean masks and np.where",
        "Aggregation and axis",
        "NaN and finite-value checks",
        "Views, copies and concatenation"
      ],
      "outcomes": [
        "Create and inspect numerical arrays",
        "Choose array operations over repetitive Python loops when suitable",
        "Explain shape and axis in plain language"
      ],
      "references": [
        "numpy-guide",
        "python-data-analysis"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C10",
      "order": 11,
      "stage": "arrays",
      "title": "pandas: tables from files",
      "prerequisites": [
        "P1-C09"
      ],
      "topics": [
        "Series and DataFrame",
        "Reading CSV and Excel",
        "Reading JSON and database results",
        "head, tail, sample, info and describe",
        "Columns, indexes and data types",
        "Exporting CSV and Excel"
      ],
      "outcomes": [
        "Load an unfamiliar dataset",
        "Inspect its size, columns, values and types before analysis",
        "Save a processed table"
      ],
      "references": [
        "pandas-user-guide",
        "python-data-analysis"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C11",
      "order": 12,
      "stage": "arrays",
      "title": "Selecting, filtering and transforming rows",
      "prerequisites": [
        "P1-C10"
      ],
      "topics": [
        "Column selection",
        "loc and iloc",
        "Boolean filtering and compound masks",
        "Sorting and ranking",
        "Creating and renaming columns",
        "String cleaning with .str",
        "Date parsing and date parts",
        "Safe assignment and index handling"
      ],
      "outcomes": [
        "Select exactly the records needed",
        "Create useful analytical columns",
        "Avoid common indexing and chained-assignment mistakes"
      ],
      "references": [
        "pandas-user-guide",
        "python-data-analysis"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C12",
      "order": 13,
      "stage": "arrays",
      "title": "Data cleaning and quality checks",
      "prerequisites": [
        "P1-C11"
      ],
      "topics": [
        "Missing-value detection and decisions",
        "Duplicates and business keys",
        "Inconsistent text and categories",
        "Numeric and date conversion",
        "Outlier investigation",
        "Validation rules and impossible values",
        "Cleaning audit trails and before/after checks"
      ],
      "outcomes": [
        "Measure data quality before changing data",
        "Choose whether to keep, correct, exclude or flag problematic records",
        "Explain cleaning decisions and their impact"
      ],
      "references": [
        "pandas-user-guide",
        "python-data-analysis"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C13",
      "order": 14,
      "stage": "arrays",
      "title": "Grouping and business summaries",
      "prerequisites": [
        "P1-C12"
      ],
      "topics": [
        "value_counts and frequency tables",
        "groupby and split-apply-combine",
        "agg and named aggregation",
        "transform and filter",
        "Counts, sums, averages and distinct counts",
        "Shares, percentages and rankings",
        "Pivot tables and crosstabs"
      ],
      "outcomes": [
        "Build correct summaries by category",
        "Choose between agg, transform and filter",
        "Reconcile summary totals with source data"
      ],
      "references": [
        "pandas-user-guide",
        "python-data-analysis"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C14",
      "order": 15,
      "stage": "arrays",
      "title": "Joining, reshaping and time-based analysis",
      "prerequisites": [
        "P1-C13"
      ],
      "topics": [
        "merge and join keys",
        "Inner, left, right and outer joins",
        "Cardinality and duplicate-key checks",
        "concat across files",
        "pivot and melt",
        "Dates, periods and resampling",
        "Rolling, shift and period-over-period metrics"
      ],
      "outcomes": [
        "Combine customer, product and order tables safely",
        "Detect row multiplication and unmatched keys",
        "Build monthly and rolling business summaries"
      ],
      "references": [
        "pandas-user-guide",
        "python-data-analysis"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C15",
      "order": 16,
      "stage": "analysis",
      "title": "Statistics for working analysts",
      "prerequisites": [
        "P1-C14"
      ],
      "topics": [
        "Categorical and numerical variables",
        "Counts, rates and distributions",
        "Mean, median and mode",
        "Range, variance and standard deviation",
        "Percentiles, quartiles, IQR and outliers",
        "Sampling and common bias",
        "Probability and common distributions",
        "Standard error and confidence intervals",
        "Hypothesis testing, p-values and effect size",
        "Independent and paired t-tests, Welch test, chi-square and ANOVA",
        "Correlation, confounding and A/B testing"
      ],
      "outcomes": [
        "Choose and calculate appropriate descriptive measures",
        "Interpret uncertainty and statistical test results",
        "Avoid common statistical claims that exceed the evidence"
      ],
      "references": [
        "scipy-stats",
        "python-data-analysis"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C16",
      "order": 17,
      "stage": "analysis",
      "title": "Visualisation and analytical communication",
      "prerequisites": [
        "P1-C15"
      ],
      "topics": [
        "Matplotlib figure and axes",
        "Seaborn distributions and comparisons",
        "Plotly interactive charts",
        "Choosing charts for questions",
        "Labels, scales, legends and accessibility",
        "Misleading visual encodings",
        "Chart annotation and uncertainty",
        "Question, method, result, limitation and action"
      ],
      "outcomes": [
        "Choose a chart based on the analytical question",
        "Create readable exploratory and presentation charts",
        "Explain findings without overstating causation"
      ],
      "references": [
        "matplotlib-tutorials",
        "seaborn-tutorial",
        "plotly-python"
      ],
      "status": "available",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C17",
      "order": 18,
      "stage": "workflows",
      "title": "APIs and external data collection",
      "prerequisites": [
        "P1-C16"
      ],
      "topics": [
        "HTTP request and response basics",
        "GET requests and query parameters",
        "JSON response parsing",
        "Status codes and validation",
        "Timeouts and retry strategy",
        "Pagination and rate limits",
        "Environment variables and secret handling",
        "Saving collected data reproducibly"
      ],
      "outcomes": [
        "Collect data from a documented API",
        "Handle incomplete or failed responses safely",
        "Respect pagination, rate limits and credentials"
      ],
      "references": [
        "requests-quickstart",
        "python-library"
      ],
      "status": "planned",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C18",
      "order": 19,
      "stage": "workflows",
      "title": "Python and database integration",
      "prerequisites": [
        "P1-C17"
      ],
      "topics": [
        "SQLite connections and cursors",
        "Parameterized SQL queries",
        "Transactions and connection cleanup",
        "Reading query results into pandas",
        "Writing data back safely",
        "SQL versus pandas: choosing the right tool"
      ],
      "outcomes": [
        "Retrieve a filtered dataset from a database",
        "Avoid unsafe string-built SQL",
        "Use SQL and pandas together appropriately"
      ],
      "references": [
        "sqlite3-docs",
        "sqlalchemy-tutorial",
        "pandas-user-guide"
      ],
      "status": "planned",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C19",
      "order": 20,
      "stage": "workflows",
      "title": "Excel automation and repeatable reporting",
      "prerequisites": [
        "P1-C18"
      ],
      "topics": [
        "Reading and writing workbooks",
        "Selecting sheets and ranges",
        "Formatting report sheets",
        "Formulas and number formats",
        "Combining monthly files in folders",
        "Reusable scripts and configuration",
        "Logging, validation and report checks",
        "Reproducible outputs and handoff"
      ],
      "outcomes": [
        "Generate a multi-sheet Excel report",
        "Process a batch of incoming files",
        "Validate totals and log failures before delivery"
      ],
      "references": [
        "openpyxl-docs",
        "python-library",
        "python-data-analysis"
      ],
      "status": "planned",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    },
    {
      "id": "P1-C20",
      "order": 21,
      "stage": "readiness",
      "title": "Analyst projects and interview readiness",
      "prerequisites": [
        "P1-C19"
      ],
      "topics": [
        "End-to-end case workflow",
        "Code review and debugging practice",
        "Project documentation and reproducibility",
        "Business questions and metric definitions",
        "Practical coding assessments",
        "Lowball, Core, Highball and Trap interview sets",
        "Take-home assignments and presentation",
        "Limits of evidence and responsible reporting"
      ],
      "outcomes": [
        "Complete an unfamiliar analysis independently",
        "Defend code, data cleaning and metric choices",
        "Present results and limitations clearly"
      ],
      "references": [
        "python-data-analysis",
        "pandas-user-guide",
        "cs50p"
      ],
      "status": "planned",
      "acceptanceCriteria": [
        "Learner can explain the idea in ordinary English.",
        "Learner can predict and explain the output of a small example.",
        "Learner can complete an independent practical check.",
        "Incorrect attempts receive specific feedback and a hint before a solution."
      ]
    }
  ],
  "projects": [
    {
      "id": "P1-PROJ-01",
      "title": "Sales Data Cleaning and Quality Audit",
      "chapters": [
        "P1-C08",
        "P1-C10",
        "P1-C11",
        "P1-C12"
      ],
      "skills": [
        "file loading",
        "profiling",
        "missing values",
        "duplicates",
        "type correction",
        "outlier investigation",
        "validation"
      ],
      "deliverables": [
        "raw source files",
        "cleaned dataset",
        "data-quality report",
        "cleaning decision log",
        "reconciliation checks"
      ]
    },
    {
      "id": "P1-PROJ-02",
      "title": "Retail Performance Analysis",
      "chapters": [
        "P1-C10",
        "P1-C11",
        "P1-C13",
        "P1-C14",
        "P1-C16"
      ],
      "skills": [
        "joins",
        "grouping",
        "revenue analysis",
        "product performance",
        "customer analysis",
        "time trends",
        "visualisation"
      ],
      "deliverables": [
        "analysis notebook",
        "reusable cleaning steps",
        "summary tables",
        "charts",
        "business recommendations"
      ]
    },
    {
      "id": "P1-PROJ-03",
      "title": "Customer Funnel and Cohort Analysis",
      "chapters": [
        "P1-C13",
        "P1-C14",
        "P1-C15",
        "P1-C16"
      ],
      "skills": [
        "event data",
        "funnel definitions",
        "conversion",
        "cohorts",
        "retention",
        "sampling limitations"
      ],
      "deliverables": [
        "funnel table",
        "cohort retention table",
        "visualisations",
        "metric definitions",
        "interpretation and limitations"
      ]
    },
    {
      "id": "P1-PROJ-04",
      "title": "Automated Reporting Pipeline",
      "chapters": [
        "P1-C08",
        "P1-C17",
        "P1-C18",
        "P1-C19"
      ],
      "skills": [
        "file ingestion",
        "API collection",
        "database queries",
        "validation",
        "pandas transformations",
        "Excel generation",
        "logging"
      ],
      "deliverables": [
        "reusable Python scripts",
        "database or source extracts",
        "automated workbook",
        "validation log",
        "run instructions"
      ]
    }
  ],
  "interviewPlan": [
    {
      "id": "Lowball",
      "targetQuestions": 20,
      "focus": [
        "Python basics",
        "collections",
        "functions",
        "file formats",
        "NumPy and pandas basics",
        "descriptive statistics"
      ]
    },
    {
      "id": "Core",
      "targetQuestions": 35,
      "focus": [
        "data cleaning",
        "pandas operations",
        "joins",
        "groupby",
        "visualisation",
        "analyst statistics",
        "SQL and Python",
        "workplace workflows"
      ]
    },
    {
      "id": "Highball",
      "targetQuestions": 25,
      "focus": [
        "join cardinality",
        "performance",
        "large datasets",
        "API pagination",
        "statistical interpretation",
        "time series",
        "automation design"
      ]
    },
    {
      "id": "Trap",
      "targetQuestions": 20,
      "focus": [
        "mutability",
        "NaN",
        "indexing",
        "chained assignment",
        "merge row multiplication",
        "count versus size",
        "p-value interpretation",
        "correlation versus causation"
      ]
    }
  ],
  "referenceShelf": [
    {
      "id": "cs50p",
      "title": "Harvard CS50P",
      "url": "https://cs50.harvard.edu/python/",
      "purpose": "Beginner programming sequence, problem solving, debugging and testing."
    },
    {
      "id": "python-tutorial",
      "title": "Official Python Tutorial",
      "url": "https://docs.python.org/3/tutorial/",
      "purpose": "Language fundamentals and idiomatic syntax."
    },
    {
      "id": "python-library",
      "title": "Python Standard Library",
      "url": "https://docs.python.org/3/library/",
      "purpose": "Files, CSV, JSON, dates, paths, statistics and SQLite."
    },
    {
      "id": "python-data-analysis",
      "title": "Python for Data Analysis · Wes McKinney",
      "url": "https://wesmckinney.com/book/",
      "purpose": "Main practical reference for NumPy, pandas and data wrangling."
    },
    {
      "id": "numpy-guide",
      "title": "NumPy User Guide",
      "url": "https://numpy.org/doc/stable/user/quickstart.html",
      "purpose": "Arrays, dimensions, vectorisation and broadcasting."
    },
    {
      "id": "pandas-user-guide",
      "title": "pandas User Guide",
      "url": "https://pandas.pydata.org/docs/user_guide/",
      "purpose": "Tabular workflows, cleaning, grouping, joins and time series."
    },
    {
      "id": "scipy-stats",
      "title": "SciPy Statistics",
      "url": "https://docs.scipy.org/doc/scipy/reference/stats.html",
      "purpose": "Practical statistical functions and tests."
    },
    {
      "id": "matplotlib-tutorials",
      "title": "Matplotlib Tutorials",
      "url": "https://matplotlib.org/stable/tutorials/",
      "purpose": "Chart fundamentals and presentation."
    },
    {
      "id": "seaborn-tutorial",
      "title": "Seaborn Tutorial",
      "url": "https://seaborn.pydata.org/tutorial.html",
      "purpose": "Statistical visualisation."
    },
    {
      "id": "plotly-python",
      "title": "Plotly Python",
      "url": "https://plotly.com/python/getting-started/",
      "purpose": "Interactive visualisation."
    },
    {
      "id": "requests-quickstart",
      "title": "Requests Quickstart",
      "url": "https://requests.readthedocs.io/en/latest/user/quickstart/",
      "purpose": "HTTP and API collection."
    },
    {
      "id": "sqlite3-docs",
      "title": "Python sqlite3",
      "url": "https://docs.python.org/3/library/sqlite3.html",
      "purpose": "Built-in relational database integration."
    },
    {
      "id": "sqlalchemy-tutorial",
      "title": "SQLAlchemy Unified Tutorial",
      "url": "https://docs.sqlalchemy.org/en/20/tutorial/",
      "purpose": "Optional broader database connectivity and SQL patterns."
    },
    {
      "id": "openpyxl-docs",
      "title": "OpenPyXL Documentation",
      "url": "https://openpyxl.readthedocs.io/en/stable/",
      "purpose": "Excel workbook creation and automation."
    }
  ],
  "release": {
    "availableChapters": [
      "P1-C00",
      "P1-C01",
      "P1-C02",
      "P1-C03",
      "P1-C04",
      "P1-C05",
      "P1-C06",
      "P1-C07",
      "P1-C08",
      "P1-C09",
      "P1-C10",
      "P1-C11",
      "P1-C12",
      "P1-C13",
      "P1-C14",
      "P1-C15",
      "P1-C16"
    ],
    "plannedChapterCount": 4,
    "notes": "Chapters P1-C00 through P1-C16 are implemented, integrated and verified. Chapters P1-C17 through P1-C20 remain planned for later releases."
  }
};
