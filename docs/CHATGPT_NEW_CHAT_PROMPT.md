# New-chat continuation prompt — DataTrail Python Programme

We are continuing an existing repository project, not starting from scratch.

Repository: https://github.com/Software-vikings/datatrail-study  
Read first: `docs/DATATRAIL_PYTHON_PROGRAMME_HANDOFF.md`  
Also read: `docs/PROGRAMME_1_LESSON_AUTHORING.md`, `docs/PROGRAMME_1_DEVELOPMENT_LOG.md` and `docs/PROGRAMME_1_RELEASE_QA_CHECKLIST.md`.

## Actual completed state

Programme 1 is fully implemented on the feature branch `programme-1/phase-7-analyst-projects-interview-readiness`, with last fully verified implementation checkpoint before the release-readiness documentation refresh:

`91c06bb0ffda7f9b680f4a6369b36f0893fc117a`

Delivered and verified:
- 21/21 interactive chapters, P1-C00 through P1-C20.
- 155 named Programme 1 coding checks.
- Four runnable analyst portfolio projects with synthetic data/deterministic fixtures.
- 100 interview questions: Lowball 20, Core 35, Highball 25, Trap 20.
- Separate legacy Python course preserved: 84 reference solutions and 205 named checks.
- Legacy 51-question Python interview gym remains separate.
- Project studio progress has its own storage key.
- Progress JSON now includes Programme 1 project milestones, sanitises the imported milestone state, remains backward-compatible with older backups, and clears the separate store on Reset progress. This fix passed PR validation run [#171](https://github.com/Software-vikings/datatrail-study/actions/runs/39205041871).
- Shared Pages release validator is exercised in feature CI and the deployment workflow.

Do not describe the programme as 17/21 chapters, do not restart Phase 6 or Phase 7, and do not build a reduced MVP. All seven implementation phases have successful PR validation runs; the final Phase 7 head passed push run #132 and PR run #133.

## Start by checking live GitHub state

Query the repository, branches, PRs #1–#7, latest Actions runs, review comments and review threads. The last verified structure is a stacked PR chain:

1. PR #1 — curriculum foundation, based on `main`.
2. PR #2 — C00–C01, based on Phase 1.
3. PR #3 — C02–C08, based on Phase 2.
4. PR #4 — C09–C14, based on Phase 3.
5. PR #5 — C15–C16, based on Phase 4.
6. PR #6 — C17–C19, based on Phase 5.
7. PR #7 — C20/projects/interview readiness, based on Phase 6.

At the last checkpoint, all seven PRs were open, unmerged and ready for review. The head of PR #7 was `91c06bb0ffda7f9b680f4a6369b36f0893fc117a`. Do not assume these facts remain current; query GitHub.

## Your next job

The curriculum implementation is complete. Focus on **release readiness and genuine defects**, not another chapter implementation phase:

1. Verify every PR's current head/base, mergeability, CI status and dependency order.
2. Inspect new review feedback. A previous GitHub Codex review attempt was blocked by exhausted connected review quota; no actual review records or inline threads existed at the last check. Do not describe this as a completed code review.
3. A source audit identified and fixed a Programme 1 project-progress backup/import/reset defect. Inspect the fix and continue the independent source audit for any other reproducible defects on the correct feature branch, preserving the stacked PR structure.
4. Arrange or prepare a meaningful manual browser/device smoke-test checklist. Do not claim that human visual QA has happened unless it actually has.
5. Keep the README, engineering handoff, new-chat prompt, development log and PR descriptions consistent with the real repository state.
6. Run syntax checks, the shared Pages release gate, the curriculum validator, all 21 lesson solutions/155 named checks, all four project verifications, and all legacy 84/205 checks. Rerun GitHub Actions after every code or documentation update and record the exact final head/run links.

## Safeguards

- **Do not merge PRs or deploy GitHub Pages without my explicit approval.**
- Do not retarget the stacked PRs to `main` simply to bypass dependency order.
- Do not force-push, reset branches or discard commits.
- Preserve the 84-lesson legacy Python course, its progress keys and its 51-question interview gym.
- Preserve separate SQL, Excel, NumPy, pandas, Statistics and Power BI tools.
- Do not require live API uptime, API secrets or personal data for lessons/tests.
- Keep database, workbook and project test artifacts isolated in temporary directories.
- Never report a CI run as passed unless the exact run finished successfully on the relevant head.
- Distinguish automated tests from manual learner-flow QA and independent code review.

If no actual defect or newly authorised task remains, report that Programme 1 implementation is complete and identify the exact review/merge/deployment decisions still pending. Do not invent another implementation phase merely to keep working.
