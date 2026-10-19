# Programme 1 — Manual Release QA Checklist

**Purpose:** Human browser/device acceptance testing for the completed 21-chapter Programme 1 release.  
**Status at creation:** Checklist prepared; no human browser/device pass is claimed.  
**Release branch:** `programme-1/phase-7-analyst-projects-interview-readiness`  
**Implementation checkpoint:** `91c06bb0ffda7f9b680f4a6369b36f0893fc117a` (query GitHub for the current branch head before testing).

This checklist complements GitHub Actions. Automated tests already execute all 21 Programme 1 lesson reference solutions (155 named checks), all four projects, the shared Pages release gate and the separate legacy 84-solution/205-check regression suite. They do not prove that a person can comfortably navigate the full user interface on supported browsers and screen sizes.

Do not mark an item passed unless it was actually tested. Record screenshots or short screen recordings for failures and note the commit SHA under test.

---

## 1. Test record

Fill this section in when the manual test is performed.

| Field | Value |
|---|---|
| Tester | Not yet recorded |
| Date/time | Not yet recorded |
| Tested branch and commit SHA | Not yet recorded |
| Browser and version | Not yet recorded |
| Operating system/device | Not yet recorded |
| Viewport / display scale | Not yet recorded |
| Network conditions | Not yet recorded |
| Result | Not yet tested |

Use a local server from the repository root:

```bash
python3 -m http.server 8765
```

Open `http://localhost:8765`. The first Pyodide session needs internet access to download its browser runtime and declared packages. Do not use private API keys or real personal/customer data during testing.

Result labels: **PASS**, **FAIL**, **BLOCKED** or **NOT TESTED**. A blocked test is not a pass.

---

## 2. Application startup and navigation

- [ ] **Startup:** the page loads without a blank screen, broken layout or uncaught console exception.
- [ ] **Track order:** Python for Data Analytics appears as the new Programme 1 path, while the separate Python course remains available.
- [ ] **Track navigation:** opening and leaving Programme 1 does not redirect into or overwrite the legacy Python course.
- [ ] **Chapter list:** all 21 IDs P1-C00 through P1-C20 appear in the intended order.
- [ ] **Chapter labels:** titles, stage labels and prerequisite/availability states match the curriculum manifest.
- [ ] **Navigation persistence:** refresh and return to the programme; the app should restore the learner's state without duplicate lesson cards or broken navigation.
- [ ] **Console/network:** note any missing assets, package-loader errors, unhandled promise rejections or CORS failures.

Evidence / notes:

```text
Result:
Browser console:
Screenshots or recording:
```

---

## 3. Lesson progression and tutor behaviour

Test one foundation lesson, one NumPy/pandas lesson, one statistics/visualisation lesson, and each workflow lesson C17–C19. Also open C20.

- [ ] **Prerequisite locking:** a learner cannot mark a later chapter complete before its prerequisites and required checks are satisfied.
- [ ] **Unlocking:** completing the lesson and passing its knowledge/coding checks unlocks the next eligible chapter.
- [ ] **Worked example:** run a worked example and confirm the displayed expected output is distinct from the actual runtime output.
- [ ] **Run versus check:** running code does not incorrectly mark an exercise as passed; the named tests determine correctness.
- [ ] **Incorrect submission:** submit a deliberately incorrect starter and confirm the failed test names the requirement and gives useful feedback.
- [ ] **Correct submission:** submit the reference-equivalent solution and confirm the expected checks pass.
- [ ] **Hint and solution:** hint/reveal controls work and do not corrupt the learner's editable draft.
- [ ] **Draft persistence:** enter partial code, refresh, reopen the same lesson and confirm the saved draft returns.
- [ ] **Retry:** after a failure, edit and rerun without having to reload the entire application.
- [ ] **Error handling:** a Python syntax/runtime error is distinguished from a failed business requirement.
- [ ] **C17 API lesson:** examples run without live credentials or depending on an external API endpoint.
- [ ] **C18 database lesson:** SQLite operations complete in the browser runtime and teach bound SQL values.
- [ ] **C19 Excel lesson:** openpyxl installs/loads as documented; workbook generation/reload behavior is usable and errors are presented clearly.
- [ ] **C20 capstone:** its task, named checks and links to the project/interview workspaces open correctly.

Record the lesson IDs and outcomes tested:

| Lesson | Worked example | Exercise grading | Draft/retry | Notes |
|---|---|---|---|---|
| P1-C00 or P1-C01 | Not tested | Not tested | Not tested | |
| P1-C09 or P1-C10 | Not tested | Not tested | Not tested | |
| P1-C15 or P1-C16 | Not tested | Not tested | Not tested | |
| P1-C17 | Not tested | Not tested | Not tested | |
| P1-C18 | Not tested | Not tested | Not tested | |
| P1-C19 | Not tested | Not tested | Not tested | |
| P1-C20 | Not tested | Not tested | Not tested | |

---

## 4. Package and visualisation experience

- [ ] **NumPy/pandas:** open representative lessons and verify package loading, first-run feedback and a successful rerun.
- [ ] **Statistics:** run an exercise using its declared statistical dependencies and confirm numeric output is readable.
- [ ] **Matplotlib:** generate a chart and verify that it appears in the lesson preview rather than only printing a Python object.
- [ ] **Seaborn:** run the distribution/box-plot example and verify the preview appears.
- [ ] **Plotly:** run the interactive chart and confirm it is displayed in the sandboxed preview, not inserted as unsafe page markup.
- [ ] **Offline deterministic API:** confirm the API exercise works from injected fixtures/fake transport rather than needing a public API.
- [ ] **Package failure:** where practical, simulate a package/runtime load failure and confirm the interface reports a recoverable message instead of freezing.

Evidence / notes:

```text
Result:
Package(s) tested:
Console/network details:
```

---

## 5. Project studio

Open the Programme 1 project studio and inspect all four projects.

- [ ] **Project count and titles:** exactly four project cards appear with the expected names.
- [ ] **Sales quality audit:** project overview explains rejected rows, decision logging and reconciliation.
- [ ] **Retail analysis:** overview explains grain, revenue calculation, segment summaries and business insight deliverables.
- [ ] **Funnel/cohort:** overview defines funnel stages, distinct-customer denominator and cohort retention.
- [ ] **Automated reporting:** overview explains deterministic source fixtures, SQLite, pandas and Excel output.
- [ ] **Instructions:** each project gives usable run steps, expected outputs, metric definitions and limitations.
- [ ] **Progress interaction:** marking project milestones updates the displayed completion state correctly.
- [ ] **Progress persistence:** refresh and confirm project milestone state is retained.
- [ ] **Storage isolation:** project progress uses `datatrail-p1-project-progress`; it must not reset or overwrite Programme 1 lesson completion, legacy project prompts or legacy Python progress.
- [ ] **Progress export:** after completing at least one Programme 1 project milestone, export the DataTrail progress JSON and confirm it includes `programme1ProjectProgress` with the selected project/milestone state.
- [ ] **Progress import:** import that backup into a disposable browser profile and confirm the Programme 1 project milestone state is restored alongside lesson and legacy progress.
- [ ] **Backward-compatible import:** import an older backup without `programme1ProjectProgress` and confirm the app does not crash or silently wipe already-saved Programme 1 project progress.
- [ ] **Reset behavior:** use the clearly labelled, confirmation-protected Reset progress action in a disposable profile and confirm both the regular DataTrail store and `datatrail-p1-project-progress` are cleared.
- [ ] **Navigation:** project shortcuts from P1-C20 open the corresponding project content.
- [ ] **Sales quality edge cases:** use a disposable input with blank customer_id and blank product values; confirm both are rejected with row-level reasons and included in the quality summary.
- [ ] **Retail grain:** inspect the sample containing multiple order lines for one order; confirm order_line_id is unique while repeated order_id values are accepted.
- [ ] **Retail validation:** test a blank customer/region/product and an infinite numeric value; confirm the workflow stops with a useful validation message rather than silently dropping a summary group.
- [ ] **Ordered funnel:** confirm a customer only advances when visit → signup → trial_start → purchase occurs in order; an out-of-order event is not counted, but a later qualifying repeat can be.
- [ ] **Funnel identity:** try an event with a blank customer_id or event_id; confirm the input is rejected instead of silently excluding the record.
- [ ] **Reporting pipeline schema:** test an impossible month (for example, 2026-13), an unsupported status and a non-finite amount; confirm each is rejected.
- [ ] **Reporting repeatability:** run Project 4 twice into the same output folder; confirm the second run succeeds, replaces the managed SQLite orders table transactionally and produces the same reconciled totals.
- [ ] **Empty paid set:** supply a valid batch with no paid orders; confirm the workbook has a zero-valued grand total and no circular or reversed SUM range.

---

## 6. Programme 1 interview practice

- [ ] **Question inventory:** the interface loads exactly 100 Programme 1 questions.
- [ ] **Difficulty allocation:** Lowball 20, Core 35, Highball 25 and Trap 20.
- [ ] **Filter behavior:** each difficulty filter returns only that tier and the combined filter returns the full bank.
- [ ] **Search behavior:** search matches useful question/topic text, including no-result and clear-search states.
- [ ] **Question content:** question, model answer, interviewer rationale and follow-up are displayed in the expected order.
- [ ] **Navigation:** filtering/searching does not duplicate entries, lose the selected question or break layout.
- [ ] **Legacy distinction:** the separate 51-question Python interview gym remains available and is not replaced by the Programme 1 bank.

---

## 7. Regression and learner-data isolation

- [ ] **Legacy Python course:** open representative Basic, Intermediate and Advanced lessons; confirm all three stages remain accessible.
- [ ] **Legacy exercise gym:** confirm an existing lesson still maps to its own coding exercise.
- [ ] **Legacy interview gym:** confirm the original 51 questions remain present and separate.
- [ ] **Other learning tools:** check SQL, Excel, NumPy, pandas, Statistics and Power BI entry points remain available.
- [ ] **No progress migration:** do not clear localStorage during this test. Confirm existing legacy completion/draft values remain intact.
- [ ] **Export:** test the existing progress export control and verify it does not claim server synchronisation.
- [ ] **Privacy:** confirm the UI still explains that progress is stored locally and no sign-in/backend is required.

Use a disposable browser profile for destructive storage tests. Never clear the user's real saved progress as part of QA.

---

## 8. Responsive, accessibility and usability

Test at a typical desktop viewport and a narrow mobile viewport (for example, approximately 390 CSS pixels wide).

- [ ] **Desktop:** no horizontal page overflow, clipped controls or overlapping panels.
- [ ] **Mobile:** navigation, chapter list, code editor, result feedback, project cards and question bank remain usable without horizontal scrolling of the whole page.
- [ ] **Editor:** code text remains readable; horizontal scrolling is confined to the code area when needed.
- [ ] **Keyboard:** all navigation, run/check, hints, solution controls, filters and progress controls are reachable by keyboard.
- [ ] **Focus:** visible focus indication remains clear.
- [ ] **Labels:** inputs and controls have understandable accessible names.
- [ ] **Contrast/zoom:** text and controls remain legible at 200% zoom.
- [ ] **Charts:** charts have contextual titles/labels and do not overflow the lesson container.
- [ ] **Feedback:** validation messages are understandable and remain visible long enough to read.
- [ ] **No destructive surprise:** reset/clear actions are clearly labelled and do not trigger on ordinary navigation.

---

## 9. Production release safety

- [ ] Confirm PRs #1–#7 are still in the expected dependency chain before any merge.
- [ ] Confirm each PR's current head has a successful validation run.
- [ ] Confirm independent review feedback has been addressed.
- [ ] Confirm manual browser/device QA has a recorded PASS result.
- [ ] Do not merge any PR or dispatch the Pages workflow without explicit repository-owner approval.
- [ ] After authorised merges, rerun/check the release workflow against the merged `main` branch.
- [ ] Confirm the Pages deployment run succeeds before describing the new curriculum as live.

---

## 10. Sign-off

| Gate | Status | Evidence / owner |
|---|---|---|
| GitHub Actions on final PR head | Verify latest run | |
| Independent code review | Not yet recorded | |
| Manual browser/device QA | Not yet tested | |
| PR chain reviewed in dependency order | Not yet recorded | |
| Owner merge approval | Pending | |
| Owner deployment approval | Pending | |
| GitHub Pages deployment | Not performed | |

**Release sign-off:** do not mark the release ready while a required gate is blank, failed or blocked. Automated CI success, independent review, manual QA and deployment are separate claims and must be reported separately.
