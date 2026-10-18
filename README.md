# DataTrail — Learn by doing

A browser-based study studio for moving from a commerce background into data analytics. Start from zero and learn through short explanations, worked business examples, quizzes and hands-on practice.

## Open DataTrail

The site is deployed as a static web app. Once the connected Vercel deployment is ready, its production URL will be added here.

## Learning paths

- Excel: spreadsheet foundations, formulas, references, conditional logic, SUMIFS, lookups and PivotTables.
- SQL: databases, SELECT, WHERE, sorting, aggregation, joins, CASE, CTEs and window functions.
- Python: variables, data types, collections, conditions, loops, functions, exceptions and comprehensions.
- NumPy: arrays, shapes, indexing, vectorisation, broadcasting and aggregation.
- pandas: DataFrames, inspection, filtering, missing values, groupby, merge and pivot tables.
- Statistics: descriptive statistics, sampling, bias, probability, confidence intervals and hypothesis testing.
- Power BI: data preparation, relationships, star schema, measures, DAX and dashboard design.
- Career toolkit: projects, practice arena, and interview preparation.

## Labs

- SQL uses SQLite compiled to WebAssembly through sql.js. First use requires internet access to load the runtime.
- Python uses Pyodide in the browser. First use and optional NumPy/pandas package loading require internet access.
- Excel is a guided formula trainer, not Microsoft Excel.
- Power BI is a guided model/DAX/report simulator, not Power BI Desktop.
- Statistics provides small descriptive calculators and interpretation practice.

## Progress and privacy

Progress is stored in this browser using localStorage. It is not synced to a server. Use **My progress → Export progress JSON** to create a backup before switching browsers or devices.

No sign-in, paid API key or backend is required.

## Run locally

Open `index.html`, or serve this directory with:

```bash
python3 -m http.server 8765
```

Then visit http://localhost:8765.

## Sample data

The SQL lab contains a small synthetic customers and orders dataset. Use its Download CSV button to export the orders table. All names and amounts are fictional.
