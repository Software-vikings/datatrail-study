# Programme 1 lesson authoring standard

Every released Programme 1 chapter must be a complete, teachable unit. A chapter must not be marked available merely because its title or outline exists.

## Required lesson structure

Each lesson in `assets/python-data-analytics-lessons.js` maps to one chapter in `assets/python-data-analytics.js` through `curriculumId`. It must include:

- A stable lesson ID matching `curriculumId`, a title, level, duration and prerequisite IDs.
- An optional `packages` list for non-standard Python dependencies. The browser runner must load those packages before running the worked example and graded exercise; the reference verifier and CI must import the same dependencies. An optional `pypiPackages` list is used only for packages installed from PyPI through `micropip`; the browser loader, reference verifier and CI must all install/import those packages.
- A plain-English explanation, a familiar analogy and a technically accurate definition.
- A small, self-contained Python example and its exact expected output.
- A prediction prompt and explanation where useful.
- A knowledge-check question, answer options, correct option index and explanation.
- A practical task, a specific hint and a complete reference solution.
- An exercise with starter code, optional setup code, hint, reference solution and at least four independent, uniquely named tests for core foundation chapters.

## Teaching requirements

1. Start with the real-world problem, then use an everyday analogy, introduce the Python idea and finish with the formal definition.
2. Teach one main new idea at a time. Do not require a concept that belongs in a later chapter.
3. Keep examples small enough for a beginner to predict before running.
4. Show expected output separately from actual output. A successful run does not count as a correct answer.
5. Keep the learner's code editable. Save drafts locally and distinguish execution errors from failed requirements.
6. Failed tests should name the requirement and, where meaningful, show expected and actual values. Add a useful failure explanation and allow another attempt.
7. Use meaningful business examples without hiding the Python concept behind excessive domain complexity.
8. The reference solution must pass every test in `scripts/verify_programme1_lessons.py`.
9. File-based exercises must run inside a clean temporary working directory in automated verification. Tests must not create artifacts in the repository.
10. The learner must pass the coding exercise and knowledge check before the chapter can be marked complete.
11. Do not use elapsed time, XP or typing speed as a substitute for demonstrated understanding.
12. A chapter may be marked `available` only after its content, lesson flow, progress behaviour and automated checks are complete. All other chapters remain `planned`.

## Data model and tests

The lesson file is a JSON-compatible JavaScript assignment. Lessons that use a runtime package declare it explicitly, for example `"packages": ["numpy", "pandas"]` or `"pypiPackages": ["seaborn", "plotly"]`; the learner does not need to open a separate lab before running the lesson:

```js
window.DataTrailPythonAnalyticsLessons = [
  {
    "id": "p1-c00",
    "curriculumId": "P1-C00",
    "prerequisites": [],
    "title": "Example chapter",
    "example": "print(\"Hello\")",
    "expectedOutput": "Hello",
    "exercise": {
      "setup": "",
      "starter": "print(\"Replace me\")",
      "hint": "A useful nudge.",
      "solution": "print(\"Hello\")",
      "tests": [
        {
          "name": "Displays the requested result",
          "code": "assert __output__.strip() == 'Hello'",
          "expected": "Hello",
          "actual": "__output__.strip()",
          "failureMessage": "Explain the requirement in ordinary language."
        },
        {
          "name": "Uses one output line",
          "code": "assert len(__output__.strip().splitlines()) == 1"
        }
      ]
    }
  }
];
```

Tests execute with the learner's namespace. The harness also provides `__output__` (captured standard output) and `__source__` (the submitted code). When a test provides `expected`, `actual` and `failureMessage`, the interface displays concrete comparison feedback after a failure.

## Release checklist

- [ ] Manifest chapter exists, has correct prerequisites and is marked available only after completion.
- [ ] Lesson object exists and links to the correct manifest chapter.
- [ ] All required lesson fields are present, including exact runtime packages where needed.
- [ ] Every example runs and its displayed expected output is correct.
- [ ] Starter code is genuinely incomplete but runnable or intentionally explainable.
- [ ] Required Pyodide and PyPI packages load in the browser runner and are importable in the CI verifier.
- [ ] Generated Matplotlib/Plotly charts appear in the lesson preview; interactive HTML is sandboxed.
- [ ] Reference solution passes every named test.
- [ ] Incorrect attempts produce understandable feedback.
- [ ] Chapter locking, lesson completion and saved drafts behave as documented.
- [ ] File exercises leave no test artifacts in the repository.
- [ ] README and development log are updated in the same development batch.
- [ ] CI checks both Programme 1 and the existing Python course.
- [ ] Production deployment remains gated until the validated pull request is merged to `main`.


## Phase 6 workflow authoring rules

### API collection (P1-C17)
- Separate URL/query construction, transport, response parsing, schema validation, transformation and persistence.
- Every real request needs a finite timeout. Retry only transient failures such as timeouts, HTTP 429 and selected 5xx responses, with a finite attempt cap and bounded backoff.
- Validate HTTP status and JSON shape before using a response. Treat most 4xx responses as request or authentication corrections, not automatic retry candidates.
- Pagination requires an explicit terminal condition and a maximum-page safety limit.
- Read tokens from environment configuration. Never hardcode, print or commit credentials. Explain browser CORS and public/private credential boundaries.
- Automated lessons inject deterministic fake transports; do not depend on public endpoints, secrets or external uptime.

### Database integration (P1-C18)
- Prefer standard-library sqlite3 before introducing an external database service.
- Use in-memory or temporary databases for lessons and CI. Bind data values with SQL placeholders.
- Demonstrate primary/foreign keys, constraints, transaction commit/rollback and cleanup with try/finally.
- Explain that a connection context manager handles transaction boundaries but does not itself guarantee connection closure.
- Verify pandas read_sql_query/to_sql round trips, empty results and total reconciliation.

### Excel automation (P1-C19)
- Declare openpyxl under pypiPackages and install it in CI so browser and reference verification use the same library.
- Validate input files, headers and data rows; process files deterministically; log invalid rows and reconcile accepted source records.
- Test actual saved/reloaded workbooks, including sheet names, values, formulas, styles, formats, filters, frozen panes and output paths.
- State clearly that openpyxl writes formula strings but does not calculate formula results. Request recalculation when appropriate.
- Run every file exercise in an isolated temporary working directory.


## Phase 7 capstone and portfolio authoring rules

- P1-C20 must have the full lesson schema and a real coding exercise; it is not just a link to projects or questions.
- The four portfolio projects must be runnable from documented commands and must use synthetic data or deterministic fixtures. The verifier writes outputs only to temporary folders.
- Every project must state its grain, business question, metric definitions, cleaning/validation rules, reconciliation, limitations and reproducible handoff.
- The interview bank must have exactly 100 unique questions in the Lowball/Core/Highball/Trap allocation 20/35/25/20. Every question needs a technical topic, model answer, interviewer rationale and follow-up prompt.
- Project progress uses its own localStorage key and must not reset or overwrite lesson completion or the legacy project list.
- Keep the existing 51-question Python interview gym separate.


## Phase 7 release verification rules

- The exact Pages release assertions live in `scripts/validate_pages_release.js`; the Pages deployment workflow and feature CI must call the same script rather than duplicate release logic.
- The release gate is executed on feature branches without deploying. It verifies 21 released chapters, 4 project definitions, 100 interview questions and the legacy 84-exercise bank.
- Feature CI and the production deployment workflow must both run the Programme 1 lesson verifier, four-project verifier and legacy Python regression suite. Production publication remains restricted to the workflow's main-branch/manual-dispatch trigger.
- Record the full head SHA and both push/PR Actions run URLs in the development log and handoff before marking the phase verified.
