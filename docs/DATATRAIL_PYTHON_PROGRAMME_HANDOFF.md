# DataTrail Python Programme — Engineering Handoff

**Last verified checkpoint:** 2026-10-19  
**Repository:** https://github.com/Software-vikings/datatrail-study  
**Active continuation branch:** `programme-1/phase-6-analyst-workflows-readiness`  
**Branch base:** `programme-1/phase-5-statistics-visualisation`  
**Phase 5 base commit:** `2f84fc5ecc6bf60f2c06653dab2473cfc18c96bc`  
**Current release truth:** 17 of 21 Programme 1 chapters are implemented and verified. Phase 6 has not started implementation.

This document is the source of truth for continuing DataTrail Programme 1 work in a fresh ChatGPT conversation. Read it before modifying the repository. The companion file `docs/CHATGPT_NEW_CHAT_PROMPT.md` contains a ready-to-paste prompt.

---

## 1. Immediate continuation objective

Continue the existing work in the repository. Do not redesign the plan or create a reduced MVP.

**Next development batch: Phase 6 — real analyst workflows**

Implement these three chapters as complete, interactive lessons:

| Curriculum ID | Chapter | Core outcomes |
|---|---|---|
| P1-C17 | APIs and external data collection | Collect documented API data, parse and validate JSON, handle HTTP errors/timeouts, pagination, rate limits and credentials safely, and save data reproducibly. |
| P1-C18 | Python and database integration | Use SQLite connections, parameterised SQL, transactions, safe cleanup, and transfer query results between SQLite and pandas. |
| P1-C19 | Excel automation and repeatable reporting | Read and write workbooks, create multiple sheets, style and format reports, use formulas, process folders of monthly files, validate outputs and log problems. |

Phase 6 must produce full teaching content, worked examples, expected outputs, prediction questions, knowledge checks, editable starter code, hints, complete solutions, named tests, package integration, UI runtime support, CI coverage and documentation. A chapter is not released merely because it exists in the manifest.

After Phase 6 passes all checks, **Phase 7 is P1-C20 — Analyst projects and interview readiness**. That final chapter must complete the four-project and 100-question Programme 1 goals and assess independent end-to-end analyst readiness.

---

## 2. Programme 1 curriculum

The canonical curriculum is in `assets/python-data-analytics.js`, with the actual lesson packages in `assets/python-data-analytics-lessons.js`.

Programme 1 is a 21-chapter path across five sequential stages:

| Stage | Chapter range | Count | Current state |
|---|---:|---:|---|
| Core Python foundations | P1-C00–P1-C08 | 9 | All released |
| NumPy and pandas | P1-C09–P1-C14 | 6 | All released |
| Statistics and visualisation | P1-C15–P1-C16 | 2 | All released |
| Real analyst workflows | P1-C17–P1-C19 | 3 | Planned |
| Analyst projects and readiness | P1-C20 | 1 | Planned |
| **Total** | **P1-C00–P1-C20** | **21** | **17 released; 4 planned** |

### Released chapters

- **P1-C00:** Getting started with Python
- **P1-C01:** First instructions and calculations
- **P1-C02:** Types, conversion and text
- **P1-C03:** Decisions and business rules
- **P1-C04:** Loops and repeated work
- **P1-C05:** Python collections for business data
- **P1-C06:** Functions and reusable analysis
- **P1-C07:** Errors, debugging and tests
- **P1-C08:** Files, CSV, JSON and dates
- **P1-C09:** NumPy numerical foundations
- **P1-C10:** pandas: tables from files
- **P1-C11:** Selecting, filtering and transforming rows
- **P1-C12:** Data cleaning and quality checks
- **P1-C13:** Grouping and business summaries
- **P1-C14:** Joining, reshaping and time-based analysis
- **P1-C15:** Statistics for working analysts
- **P1-C16:** Visualisation and analytical communication

### Planned chapters

- **P1-C17:** APIs and external data collection
- **P1-C18:** Python and database integration
- **P1-C19:** Excel automation and repeatable reporting
- **P1-C20:** Analyst projects and interview readiness

The manifest currently uses version 1.4.0, records P1-C00–P1-C16 as available and the final four chapters as planned. Phase 6 should advance the manifest version deliberately (expected next minor version: 1.5.0), mark only P1-C17–P1-C19 available, and leave P1-C20 planned. Update `release.availableChapters`, `release.plannedChapterCount`, notes and any versioned metadata consistently.

---

## 3. Learning and teaching requirements

The design goal is beginner-first teaching that builds real analyst competence—not a collection of brief code snippets.

Every lesson must:

1. Begin with a familiar practical problem and explain why the learner needs the skill.
2. Introduce the idea in ordinary English before formal terminology.
3. Use a helpful everyday analogy without sacrificing technical accuracy.
4. Provide a precise professional definition and explain important vocabulary.
5. Break the skill into small, runnable examples the learner can predict.
6. Show exact expected output separately from the live browser-Python output.
7. Include a prediction prompt and explain the correct reasoning.
8. Include a knowledge-check question, answer choices, correct index and explanation.
9. Include a practical exercise with genuinely incomplete starter code, a useful hint, complete model solution and independent named tests.
10. Distinguish “the code ran” from “the task requirements passed”.
11. Give actionable failure feedback: which requirement failed, expected versus actual where possible, why it matters, and a hint for the next attempt.
12. Preserve retry, draft-saving and prerequisite locking behaviour.

Use business/analyst examples: orders, customers, revenue, invoices, inventory, marketing performance and monthly reporting. Avoid dumping unexplained jargon or introducing too many new ideas in one exercise.

The lesson-authoring contract is documented in `docs/PROGRAMME_1_LESSON_AUTHORING.md`. Read it and follow it.

---

## 4. Existing technical architecture

### Curriculum and lesson data

- `assets/python-data-analytics.js` is a JSON-compatible JavaScript assignment to `window.DataTrailPythonAnalytics`. It is the canonical 21-chapter curriculum.
- `assets/python-data-analytics-lessons.js` is a JSON-compatible JavaScript assignment to `window.DataTrailPythonAnalyticsLessons`. It contains released lesson objects in curriculum order.
- Every lesson links through `curriculumId` and must match the manifest title, order, prerequisites and availability state.
- The lesson structure includes plain-language explanation, formal definition, analogy, example, expected output, prediction, quiz, practical task, hint, solution, exercise starter/setup/solution and named tests.

### Browser Python runtime

- `index.html` contains the application UI and JavaScript runtime integration.
- Python executes in the browser with Pyodide. The runtime is loaded lazily; first use needs an internet connection.
- The coding tutor has distinct worked-example and exercise execution paths.
- Lesson-level `packages` declares packages loaded through Pyodide's package loader.
- Lesson-level `pypiPackages` declares packages installed using `micropip`.
- `prepareProgrammePackages(py, lesson)` is the shared package-loader helper. Use it rather than creating a second, competing dependency loader.
- The visualisation integration already captures Matplotlib output as image data and Plotly output into a sandboxed iframe. Reuse and preserve it.
- Do not allow an exercise to depend on a real API credential, personal data or unreliable live network response. For external services, separate the HTTP client from deterministic exercise logic and use stable, simulated responses for automated tests. Explain any browser CORS constraints honestly.

### Progress and legacy-course isolation

Programme 1 is a separate learning track. Its progress/drafts use `analyticsTaskComplete` and `analyticsDrafts`. Do not rename, clear or reuse the legacy Python keys.

The existing separate Python course must remain intact:
- 84 lessons and 84 reference solutions.
- 205 named test cases.
- Basic (22), Intermediate (40) and Advanced (22) boundaries.
- Existing exercise mapping, model solutions, interview gym and learner progress must not be broken.
- Existing Python interview gym contains 51 questions; this is separate from the Programme 1 target of 100.

Standalone NumPy, pandas, Statistics, SQL, Excel and Power BI tracks/labs also remain. Do not silently replace or merge them into Programme 1.

---

## 5. Verification and release gates

Run the full validation set from the repository root. Install the current Phase 5 dependencies first; Phase 6 must extend this installation list only when the new lessons need extra packages.

Current dependency install:

~~~bash
python3 -m pip install numpy pandas scipy matplotlib seaborn plotly
~~~

Current full checks:

~~~bash
node --check assets/python-data-analytics.js
node --check assets/python-data-analytics-lessons.js
python3 -m py_compile scripts/validate_programme1.py scripts/verify_programme1_lessons.py scripts/verify_python_exercises.py
python3 scripts/validate_programme1.py
python3 scripts/verify_programme1_lessons.py
python3 scripts/verify_python_exercises.py
~~~

### What each check protects

- `scripts/validate_programme1.py`: validates the 21-chapter sequence, prerequisites, stages, reference shelf, four portfolio projects, interview allocation, exact released chapter set, lesson mapping, lesson topic coverage, package declarations and legacy-course semantic anchors. It currently expects exactly 17 released chapters and four planned. Update it for 20 released chapters and one planned chapter in Phase 6.
- `scripts/verify_programme1_lessons.py`: executes each released lesson's reference solution and every named test using real installed packages. It uses isolated temporary working directories so file tasks do not pollute the repository. It already supports `packages` and `pypiPackages`; extend only when a concrete requirement exists.
- `scripts/verify_python_exercises.py`: executes all 84 legacy Python reference solutions and their 205 named tests. Keep this suite passing.
- `.github/workflows/validate-programme1.yml`: feature branch and PR validation workflow. Add the Phase 6 dependencies here; ensure it executes all three test/validation scripts.
- `.github/workflows/deploy.yml`: has an independent production release gate. Extend its exact chapter requirements to P1-C00–P1-C19 only when Phase 6 is complete. Do not include P1-C20 until Phase 7 completes it.

Phase 6 acceptance at minimum:
- 20 released Programme 1 lesson packages, exactly matching P1-C00–P1-C19.
- 1 planned lesson, P1-C20.
- Existing curriculum prerequisite chain remains valid.
- Every Phase 6 solution and all its named tests pass.
- API tests are deterministic and do not make CI/browser success depend on third-party uptime or secrets.
- Database tests use safe parameter binding and isolated in-memory or temporary databases; no persistent user data.
- Workbook/file tests use isolated temporary directories and validate workbook contents, sheet names, totals, formulas/styles where appropriate, and error handling.
- The full legacy 84/205 suite remains passing.
- JavaScript/Python syntax and both curriculum/deploy validators pass.
- A fresh successful GitHub Actions run is recorded in the docs and Phase 6 PR body.

A successful local run is useful but does not replace a successful GitHub Actions run. Do not claim a release is verified before CI completes.

---

## 6. Important Phase 6 design points

These are implementation guardrails, not an instruction to skip proper research and testing.

### P1-C17 — APIs and external data collection

Cover HTTP request/response concepts, GET and query parameters, JSON parsing, status validation, timeouts, bounded retries/backoff, pagination, rate limits, authentication and secret handling via environment variables, and reproducible storage.

- Teach the learner never to hardcode API tokens into source code or commit them.
- Demonstrate checking status and response shape rather than blindly trusting JSON.
- Explain 4xx versus 5xx at a practical level, request timeouts and retrying only when appropriate.
- Include pagination stop conditions and a maximum-page safeguard.
- Avoid retry loops that can run indefinitely.
- Separate transport/network concerns from parsing and business transformations.
- Do not make graded exercises call a real external API. Use controlled fixtures/fake responses or a deterministic local transport and test error cases.
- Choose a package approach only after validating Pyodide browser support, micropip installation, CI support and clear learner experience. Requests is already listed as a reference in the curriculum, not yet a runtime dependency.

### P1-C18 — Python and database integration

Cover SQLite using the Python standard library first:
- Connections, cursors and result rows.
- Parameterised SQL; never build a learner-facing SQL query by interpolating untrusted user input.
- Commit/rollback and transaction boundaries.
- Context managers and safe close/cleanup.
- Reading query results into pandas and writing transformed results back safely.
- SQL for filtering/joins/aggregation versus pandas for in-memory transformation and analysis.

Use `:memory:` or a temporary database in tests. Include duplicate keys, missing joins, empty results and invalid input where useful. Do not require an external database service.

### P1-C19 — Excel automation and repeatable reporting

Teach the learner to automate the workbook deliverable, not merely write a single cell:
- Load existing workbooks and create new ones.
- Work with sheets, ranges, headers and data rows.
- Generate a summary and detail sheet.
- Apply readable styles, widths, number formats, freeze panes and filters.
- Write formulas where appropriate and explain that openpyxl writes formulas but does not calculate them; verify formulas/cached values responsibly.
- Process batches of monthly files using pathlib/glob and combine validated rows.
- Add configuration, reusable functions, logging, exception handling and reconciliation checks.
- Save to a chosen output location and produce a clear handoff/report log.

Use synthetic workbook/CSV fixtures and isolated temporary folders in tests. If using openpyxl in the browser, declare it under `pypiPackages`, confirm micropip and Pyodide compatibility, and install the same package in CI. If browser compatibility proves poor, do not silently downgrade the chapter; implement a transparent, tested architecture or split the runtime demonstration from the full local automation workflow with explicit limitations.

---

## 7. Four portfolio projects and interview target

The curriculum contains four substantial projects:

1. **Sales Data Cleaning and Quality Audit** — raw files, cleaned dataset, data-quality report, decision log and reconciliation.
2. **Retail Performance Analysis** — reusable analysis, summaries, charts and business recommendations.
3. **Customer Funnel and Cohort Analysis** — defined metrics, funnel/cohort tables, visualisations, interpretation and limitations.
4. **Automated Reporting Pipeline** — source/API ingestion, database extracts, validated transformations, generated Excel workbook, logs and repeatable run instructions.

Project 4 is linked to P1-C08 and P1-C17–P1-C19. Ensure its implementation instructions remain consistent with those chapter contents.

The curriculum target is **100 Programme 1 interview questions**, allocated:
- Lowball: 20
- Core: 35
- Highball: 25
- Trap: 20

The manifest already defines this allocation. P1-C20 should convert it into a real, organised, high-quality practice bank and readiness assessment, not simply repeat the separate legacy 51-question Python gym.

---

## 8. Git branches and pull requests

The development has deliberately used a stacked PR sequence. Do not retarget PRs to `main` or merge them unless explicitly authorised.

| Phase | Pull request | Head branch | Base branch | State at handoff |
|---|---|---|---|---|
| Curriculum foundation | [PR #1](https://github.com/Software-vikings/datatrail-study/pull/1) | `programme-1/phase-1-curriculum-foundation` | `main` | Open, unmerged |
| First lessons C00–C01 | [PR #2](https://github.com/Software-vikings/datatrail-study/pull/2) | `programme-1/phase-2-core-learning` | Phase 1 | Open, unmerged |
| Core Python C02–C08 | [PR #3](https://github.com/Software-vikings/datatrail-study/pull/3) | `programme-1/phase-3-core-python` | Phase 2 | Open, unmerged |
| NumPy/pandas C09–C14 | [PR #4](https://github.com/Software-vikings/datatrail-study/pull/4) | `programme-1/phase-4-numpy-pandas` | Phase 3 | Open, unmerged |
| Statistics/visualisation C15–C16 | [PR #5](https://github.com/Software-vikings/datatrail-study/pull/5) | `programme-1/phase-5-statistics-visualisation` | Phase 4 | Open, unmerged |
| Analyst workflows C17–C19 | Not created yet | `programme-1/phase-6-analyst-workflows-readiness` | Phase 5 | Branch created; no Phase 6 implementation yet |

Important repository facts at this checkpoint:
- The Phase 5 head is `2f84fc5ecc6bf60f2c06653dab2473cfc18c96bc`.
- Comparing Phase 5 against `main` showed 69 commits ahead and 0 behind; the feature stack has not been merged into `main`.
- Phase 6 branch was created directly from the Phase 5 branch. Check its current head and working tree before editing in a new chat.
- The intended Phase 6 PR is **PR #6**, with the Phase 6 branch as head and `programme-1/phase-5-statistics-visualisation` as base.
- Phase 7 should stack on Phase 6 after its verified completion.
- The PRs are a dependency chain. The order remains Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6 → Phase 7.
- Do not merge, deploy, reset progress, rewrite branches or force-push to solve a validation failure. Diagnose and repair forward.

Always query GitHub for current branch and PR status at the start of a new conversation; this document is a dated checkpoint and repository state may have changed.

---

## 9. Phase history and verified counts

| Phase | Scope | Programme 1 total released | Programme 1 named checks | Legacy Python |
|---|---|---:|---:|---:|
| Phase 1 | Canonical 21-chapter blueprint and guardrails | 0 lessons | Not applicable | 84 solutions / 205 checks |
| Phase 2 | P1-C00–C01 | 2 | 6 | 84 / 205 |
| Phase 3 | P1-C02–C08 | 9 | 45 | 84 / 205 |
| Phase 4 | P1-C09–C14 | 15 | 89 | 84 / 205 |
| Phase 5 | P1-C15–C16 | 17 | 106 | 84 / 205 |
| Phase 6 | P1-C17–C19 | Pending | Pending | Must remain 84 / 205 |
| Phase 7 | P1-C20 | Pending | Pending | Must remain 84 / 205 |

### Most recent verified CI result

**Phase 5 GitHub Actions run #83 succeeded:**  
https://github.com/Software-vikings/datatrail-study/actions/runs/39196482320

Reported results:
- 17 released Programme 1 lessons and 106 named checks passed.
- 84 legacy Python reference solutions and 205 named checks passed.
- Package installation, JavaScript/Python syntax, manifest validation, lesson verification and chart-preview integration passed.

Earlier Phase 5 run #81 also passed; run #83 is the latest successful run and should be cited in the handoff/release history.

---

## 10. Required documentation updates in every development batch

Every implementation phase must update documentation in the same branch/PR:

1. `README.md`: current released lesson range/count, checks, runtime dependencies and links to the relevant docs.
2. `docs/PROGRAMME_1_DEVELOPMENT_LOG.md`: phase scope, delivered chapter coverage, implementation details, test commands, exact successful CI run and remaining work.
3. `docs/PROGRAMME_1_LESSON_AUTHORING.md`: new authoring conventions, package/runtime constraints or test practices discovered in the phase.
4. `assets/python-data-analytics.js`: curriculum and release metadata.
5. `scripts/validate_programme1.py`: exact release count/set and semantic regression guards.
6. `scripts/verify_programme1_lessons.py` only when its package/runtime or test execution capabilities must change.
7. `.github/workflows/validate-programme1.yml`: install any new test dependencies.
8. `.github/workflows/deploy.yml`: exact release guard must match the fully verified lessons and nothing more.
9. The Phase 6 PR body: scope, files/architecture, test evidence, exact run URL and stacked-base explanation.

Never record a test as passing unless it was actually run. When a change is documentation-only, do not present that as a curriculum release.

---

## 11. Working protocol for the next ChatGPT session

1. Read this handoff and the lesson-authoring standard before editing.
2. Inspect the repository, current branch, open PRs, last successful CI run and exact Phase 6 branch head. Verify whether the branch is still clean and based on the Phase 5 head; do not assume.
3. Continue using the existing GitHub-connected repository tools/CLI access. Do not recreate the project locally from memory or produce a disconnected code sample.
4. Review the manifest, existing lessons C08/C10/C14/C16, package loader, lesson verifier, curriculum validator, deployment gate, workflow and README before making Phase 6 edits.
5. Implement the complete Phase 6 scope, not an MVP or a report.
6. Run the full validation locally or through the available repository runtime. Fix failures and rerun; do not stop after a first failing workflow.
7. Update all documentation and exact release guards.
8. Create/update PR #6 against Phase 5 only after all implementation files are ready. Wait for successful GitHub Actions; inspect the run and logs when necessary.
9. Record the actual successful CI run in the development log, README and PR body. Run validation again if changing files after the recorded run.
10. Leave PRs open and the production site unchanged. Do not merge or deploy without explicit user authorisation.
11. Then proceed to P1-C20 in a separate, fully tested Phase 7 batch.

The user prefers implementation to be carried through to completion rather than receiving a plan or periodic report in place of code. Provide brief progress updates during long operations, but keep working until the deliverable is genuinely complete. Be precise about what is and is not verified.


## 2026-10-19 — Phase 6 implementation update

The Phase 6 feature branch now includes P1-C17 through P1-C19. The prior handoff paragraph saying that Phase 6 had no implementation is superseded by commit `14bfab108372ff6d638a5b04599415eb7e12604b`.

- P1-C17 uses an injected offline HTTP transport; it demonstrates GET query parameters, JSON decoding and shape validation, status handling, timeouts, bounded retry/backoff, rate-limit handling, pagination safety, environment-based credentials and deterministic JSON storage.
- P1-C18 uses isolated in-memory SQLite; it demonstrates parameter binding, relational constraints, transactions, rollback, pandas SQL integration, empty results and connection cleanup.
- P1-C19 uses openpyxl to process monthly CSVs and generate a real styled Summary/Details workbook, including formula handling, logging, validation, filters, frozen headers and reconciliation.
- The three lessons add 37 named checks. Programme 1's target is now 20 released lessons and 143 named checks. The separate legacy Python track remains 84 reference solutions and 205 checks.
- Manifest version is 1.5.0. P1-C20 is the only planned chapter. CI installs openpyxl; the lesson validator and deployment gate require the exact C00–C19 set.
- Phase 6 is not verified until the latest GitHub Actions run on this branch succeeds. Do not use the historical Phase 5 run #83 as evidence for this branch.

After Phase 6 CI succeeds, continue to Phase 7 as a separate stacked PR based on this Phase 6 branch. Keep PRs open, unmerged and do not deploy without the user's explicit permission.
