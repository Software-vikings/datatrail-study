# DataTrail Python Programme — Engineering Handoff

**Last verified checkpoint:** 2026-10-19  
**Repository:** https://github.com/Software-vikings/datatrail-study  
**Completed feature branch:** `programme-1/phase-7-analyst-projects-interview-readiness`  
**Last fully verified Phase 7 implementation checkpoint (before the current handoff refresh):** `91c06bb0ffda7f9b680f4a6369b36f0893fc117a`  
**Phase 6 base branch/head:** `programme-1/phase-6-analyst-workflows-readiness` / `34aa0303f0292b288bd748ac18a79a1b41aeb102`  
**Current release truth:** Programme 1 implementation is complete: 21/21 interactive chapters, 155 named coding checks, four runnable portfolio projects and 100 interview questions. The feature stack is not merged into `main`; GitHub Pages has not been deployed.

This is the source of truth for a fresh ChatGPT session. Read it first, then read `docs/PROGRAMME_1_LESSON_AUTHORING.md` and `docs/PROGRAMME_1_DEVELOPMENT_LOG.md`. The companion `docs/CHATGPT_NEW_CHAT_PROMPT.md` contains the updated continuation prompt.

---

## 1. Immediate state and next action

**There is no remaining Programme 1 curriculum chapter to implement.** Phase 6 (P1-C17–P1-C19) and Phase 7 (P1-C20) are implemented and have successful GitHub Actions validation on their final documented heads.

The remaining work is release readiness, not another curriculum phase:

1. Re-query GitHub because branch and PR state can change.
2. Review the seven stacked PRs in dependency order and inspect any new feedback.
3. Complete a real browser/device smoke test of the learner flows; automated CI does not replace visual and interaction QA.
4. Obtain a completed independent code review. The GitHub Codex review attempt visible on the PRs was blocked because the connected code-review usage quota was exhausted. There are no submitted GitHub review records or inline review threads on PRs #1–#7 from that attempt. This is a review-capacity limitation, not proof of a code defect.
5. Merge or deploy only after the repository owner explicitly authorises those actions.

Do not restart Phase 6 or Phase 7, rebuild an MVP, or mark the programme incomplete merely because the PR stack remains unmerged.

---

## 2. Programme 1 — verified delivered scope

The canonical curriculum is `assets/python-data-analytics.js`; lesson packages are in `assets/python-data-analytics-lessons.js`. The release manifest is v1.6.0.

| Area | Verified delivery |
|---|---|
| Curriculum | 21 interactive chapters, P1-C00 through P1-C20 |
| Programme 1 coding checks | 155 named checks |
| Phase 6 | API collection, SQLite/pandas integration, repeatable Excel reporting |
| Phase 7 capstone | Four runnable analyst projects and 100-question interview bank |
| Legacy Python course | 84 reference solutions and 205 named checks, preserved separately |
| Legacy interview gym | 51 questions, kept distinct from the Programme 1 interview bank |

### Chapter coverage

- **P1-C00–P1-C08 — Core Python:** getting started; calculations; types and conversion; decisions; loops; collections; functions; errors/debugging/tests; files, CSV, JSON and dates.
- **P1-C09–P1-C14 — NumPy and pandas:** numerical foundations; tables from files; selecting/filtering/transforming; data cleaning and quality; grouping/business summaries; joins, reshaping and time-based analysis.
- **P1-C15–P1-C16 — Statistics and visualisation:** statistical methods for working analysts; visualisation and analytical communication.
- **P1-C17–P1-C19 — Analyst workflows:** deterministic API data collection; SQLite and pandas integration; automated Excel workbooks and repeatable reporting.
- **P1-C20 — Analyst projects and interview readiness:** capstone evaluation, practical project/readiness checks and links into the project/interview studio.

A chapter counts as released only when its lesson object, learner flow, reference solution and automated checks are present. The current validator and Pages release gate enforce the exact chapter set.

---

## 3. Four executable portfolio projects

All four projects live under `projects/programme-1/`. Each includes a standalone README, synthetic data or deterministic fixtures, a Python workflow, documented run instructions, metric/business context and stated limitations.

1. **Sales Data Cleaning and Quality Audit** — validates a raw sales extract, separates accepted and rejected rows, records decisions and reconciles source totals.
2. **Retail Performance Analysis** — produces monthly, regional, category and customer analysis, charts and written business insights.
3. **Customer Funnel and Cohort Analysis** — calculates distinct-customer funnel measures, cohort activity and retention outputs, with metric definitions and a visualisation.
4. **Automated Reporting Pipeline** — consumes a deterministic API fixture and monthly CSV inputs, writes parameterised records to SQLite, queries with pandas and generates a formatted multi-sheet Excel workbook with a run log.

The runner `scripts/verify_programme1_projects.py` executes the projects in isolated temporary directories and validates outputs, reconciliations and workbook structure. It must remain part of feature CI and the production deployment gate.

---

## 4. Programme 1 interview bank

The bank is `assets/programme1-readiness.js`. It contains exactly 100 unique questions:

| Tier | Count |
|---|---:|
| Lowball | 20 |
| Core | 35 |
| Highball | 25 |
| Trap | 20 |
| **Total** | **100** |

Each question has a topic, question text, model answer, interviewer rationale and follow-up. The separate 51-question legacy Python interview gym must not be replaced or merged into this bank.

---

## 5. Architecture and isolation requirements

- `index.html` contains the application UI and Pyodide runtime integration. Python runs in the browser; first use requires an internet connection to load the runtime.
- Programme 1 chapter packages are in `assets/python-data-analytics-lessons.js`; its canonical 21-chapter blueprint is in `assets/python-data-analytics.js`.
- Programme 1 readiness questions are in `assets/programme1-readiness.js`.
- `prepareProgrammePackages(py, lesson)` is the shared dependency loader. Keep package declarations and CI imports aligned.
- Programme 1 chapter completion and drafts retain their own existing state keys. Do not rename, clear or reuse legacy Python progress keys.
- The Programme 1 project studio uses its separate `datatrail-p1-project-progress` key. Do not overwrite lesson progress or the original project list.
- Preserve the original 84-lesson Python track, its 84 reference solutions, 205 named tests, Basic/Intermediate/Advanced boundaries and 51-question interview gym.
- Preserve the standalone SQL, Excel, NumPy, pandas, Statistics and Power BI learning tools. Programme 1 must not silently replace them.
- API lessons and project fixtures must remain deterministic. Do not add live API credentials or network uptime as grading/CI requirements.
- Database and workbook checks must use temporary or in-memory storage. Project verification must not leave generated output in the repository.

---

## 6. Verification commands

Run from the repository root. Install the packages used by the reference verifiers first:

```bash
python3 -m pip install numpy pandas scipy matplotlib seaborn plotly openpyxl

node --check assets/python-data-analytics.js
node --check assets/python-data-analytics-lessons.js
node --check assets/programme1-readiness.js
node --check scripts/validate_pages_release.js

python3 -m py_compile \
  scripts/validate_programme1.py \
  scripts/verify_programme1_lessons.py \
  scripts/verify_programme1_projects.py \
  scripts/verify_python_exercises.py

node scripts/validate_pages_release.js
python3 scripts/validate_programme1.py
python3 scripts/verify_programme1_lessons.py
python3 scripts/verify_programme1_projects.py
python3 scripts/verify_python_exercises.py
```

What these checks protect:

- `scripts/validate_pages_release.js` — shared exact production-release gate, also executed by feature CI.
- `scripts/validate_programme1.py` — curriculum sequence, prerequisites, release state, lesson mapping, topic semantics, project folders and interview question allocation.
- `scripts/verify_programme1_lessons.py` — all released Programme 1 examples, reference solutions and named checks.
- `scripts/verify_programme1_projects.py` — all four portfolio project workflows and their expected outputs.
- `scripts/verify_python_exercises.py` — all 84 legacy Python reference solutions and 205 named checks.

GitHub Actions remains the authoritative CI evidence. A local run does not replace a successful run on the final PR head.

---

## 7. Verified GitHub Actions evidence

The following PR-triggered validation runs were retrieved from GitHub for the corresponding phase heads. Each returned `completed` with conclusion `success`.

| Phase | PR validation run | URL |
|---|---:|---|
| Phase 1 — curriculum foundation | #10 | https://github.com/Software-vikings/datatrail-study/actions/runs/39188762278 |
| Phase 2 — C00–C01 | #28 | https://github.com/Software-vikings/datatrail-study/actions/runs/39190707681 |
| Phase 3 — C02–C08 | #52 | https://github.com/Software-vikings/datatrail-study/actions/runs/39192684693 |
| Phase 4 — C09–C14 | #65 | https://github.com/Software-vikings/datatrail-study/actions/runs/39195506394 |
| Phase 5 — C15–C16 | #83 | https://github.com/Software-vikings/datatrail-study/actions/runs/39196482320 |
| Phase 6 — C17–C19 | #105 | https://github.com/Software-vikings/datatrail-study/actions/runs/39199962854 |
| Phase 7 — C20 and portfolio | #133 | https://github.com/Software-vikings/datatrail-study/actions/runs/39202963594 |

For the final Phase 7 documentation-updated head `91c06bb0ffda7f9b680f4a6369b36f0893fc117a`:

- [Push validation #132](https://github.com/Software-vikings/datatrail-study/actions/runs/39202959904) — success.
- [Pull-request validation #133](https://github.com/Software-vikings/datatrail-study/actions/runs/39202963594) — success.

The final Phase 7 runs execute the shared Pages release gate, curriculum validation, all 21 lesson packages and 155 checks, all four projects, and the legacy 84/205 regression suite. The feature branch was validated; it was not published.

---

## 8. Pull-request dependency chain and release state

The PRs are intentionally stacked. GitHub state was checked on 2026-10-19: PRs #1–#7 were open, unmerged and marked ready for review (not drafts). No merge was performed.

| Order | Scope | PR | Head branch | Base |
|---:|---|---|---|---|
| 1 | Curriculum foundation | [#1](https://github.com/Software-vikings/datatrail-study/pull/1) | `programme-1/phase-1-curriculum-foundation` | `main` |
| 2 | C00–C01 | [#2](https://github.com/Software-vikings/datatrail-study/pull/2) | `programme-1/phase-2-core-learning` | Phase 1 |
| 3 | C02–C08 | [#3](https://github.com/Software-vikings/datatrail-study/pull/3) | `programme-1/phase-3-core-python` | Phase 2 |
| 4 | C09–C14 | [#4](https://github.com/Software-vikings/datatrail-study/pull/4) | `programme-1/phase-4-numpy-pandas` | Phase 3 |
| 5 | C15–C16 | [#5](https://github.com/Software-vikings/datatrail-study/pull/5) | `programme-1/phase-5-statistics-visualisation` | Phase 4 |
| 6 | C17–C19 | [#6](https://github.com/Software-vikings/datatrail-study/pull/6) | `programme-1/phase-6-analyst-workflows-readiness` | Phase 5 |
| 7 | C20, projects and interview readiness | [#7](https://github.com/Software-vikings/datatrail-study/pull/7) | `programme-1/phase-7-analyst-projects-interview-readiness` | Phase 6 |

**Merge order, when explicitly authorised:** #1 → #2 → #3 → #4 → #5 → #6 → #7. Do not retarget the stacked PRs to `main` merely to make them appear independently mergeable. Resolve conflicts and rerun validation forward if GitHub reports a new conflict after an earlier phase merges.

**Deployment state:** No GitHub Pages deployment has been performed for this feature stack. The Pages workflow is the production path; it must be run only after the complete PR stack is merged and the repository owner authorises publication.

---

## 9. Known remaining release checks

These are the remaining tasks. They do not indicate missing Programme 1 chapters:

- **Independent review:** the PR comment summaries show Codex code-review attempts could not continue because the connected review usage quota was exhausted. GitHub returned no submitted review records and no inline review threads for PRs #1–#7 at the checkpoint. Arrange an actual human or available automated review before merging.
- **Manual learner-flow QA:** CI executes lesson solutions and project workflows, but the documentation does not claim a completed human browser/device pass. Smoke-test lesson locking, drafts, project progress, interview filters, mobile layout, Pyodide loading, chart previews and workbook lesson UX.
- **Release authorisation:** the owner must explicitly approve merging the stack and publishing the website. Do not infer permission from “continue the work”.

Once those checks are satisfied and approval is given, merge PRs in dependency order, verify the cumulative main-branch CI after each meaningful merge, and only then run the Pages deployment workflow.

---

## 10. Documentation map

- `README.md` — product overview, learner tracks, local run instructions and release/publish guidance.
- `docs/PROGRAMME_1_DEVELOPMENT_LOG.md` — chronological implementation record and CI evidence.
- `docs/PROGRAMME_1_LESSON_AUTHORING.md` — lesson schema, instructional standard and Phase 6/7 authoring/test rules.
- `docs/DATATRAIL_PYTHON_PROGRAMME_HANDOFF.md` — this current engineering/release handoff.
- `docs/CHATGPT_NEW_CHAT_PROMPT.md` — prompt to continue from the actual completed state.

Always query GitHub again at the beginning of a future session. This checkpoint is dated and must not override live repository state.
