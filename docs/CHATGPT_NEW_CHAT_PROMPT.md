# New-chat continuation prompt — DataTrail Python Programme

We are continuing an existing software project, not starting a new one.

Repository: https://github.com/Software-vikings/datatrail-study  
Read this first: `docs/DATATRAIL_PYTHON_PROGRAMME_HANDOFF.md`  
Also read: `docs/PROGRAMME_1_LESSON_AUTHORING.md` and `docs/PROGRAMME_1_DEVELOPMENT_LOG.md`.

## Your job

Continue implementation directly in the GitHub repository. Do not give me a plan instead of doing the work, do not stop at an MVP, and do not send a report when code and documentation still need to be implemented.

The current verified state is Programme 1 with 17/21 chapters released (P1-C00–P1-C16), 106 named exercise checks passing. The separate legacy Python course has 84 lessons/solutions and 205 named checks; preserve it and its learner progress.

## Start by verifying repository state

Inspect the current GitHub branch, recent commits, working tree if available, open PRs, Phase 5 head and latest CI. The intended branch already created for this work is:

`programme-1/phase-6-analyst-workflows-readiness`

It was created from:

`programme-1/phase-5-statistics-visualisation`

Phase 5 head at handoff:

`2f84fc5ecc6bf60f2c06653dab2473cfc18c96bc`

Do not assume that the branch or PR state is unchanged; query GitHub first. Preserve the stacked PR chain. Do not merge or deploy.

## Complete Phase 6 — P1-C17 through P1-C19

Implement all three full interactive lessons:

- **P1-C17 — APIs and external data collection:** HTTP, GET/query params, JSON parsing, status/error handling, timeouts, bounded retry/backoff, pagination, rate limits, environment-variable secrets and reproducible storage.
- **P1-C18 — Python and database integration:** SQLite connections/cursors, parameterised SQL, transactions, cleanup, pandas read/write integration and SQL-vs-pandas trade-offs.
- **P1-C19 — Excel automation and repeatable reporting:** read/write workbooks, multiple sheets, styles/number formats, formulas, batch monthly-file processing, logging, validation/reconciliation and reusable reporting scripts.

Build beginner-first teaching with plain-English explanations, analogies, precise definitions, runnable worked examples and expected output, prediction, knowledge check, practical editable coding exercise, starter code, useful hints, complete solution and independent named tests. Use realistic synthetic analyst data. Test real functionality, not superficial presence of variable names.

API exercises must be deterministic; do not depend on live third-party uptime, CORS, a real credential or secrets. Database and workbook/file tests must use in-memory or temporary isolated storage. Confirm Pyodide/micropip browser compatibility of additional packages before integrating them. Reuse the current package loader and test architecture rather than creating parallel systems.

## Keep every layer consistent

Update the curriculum manifest and release metadata, lesson bank, curriculum validator, lesson verifier if needed, CI dependency list, production deploy gate, README, development log, lesson-authoring documentation and PR body.

After Phase 6, exactly P1-C00–P1-C19 should be available (20 lessons) and P1-C20 should remain planned. Preserve the five-stage 21-chapter blueprint, prerequisites, four projects and 100-question target.

Run all checks, fix issues, rerun CI until it succeeds. The full legacy suite must continue passing at 84 solutions / 205 named checks. Record the real successful CI run URL and check logs before claiming completion. If you edit files after a successful run, run validation again.

Create/update **PR #6** with the Phase 6 branch as head and Phase 5 branch as base. Leave it open and unmerged.

## Then complete the remaining work

Once Phase 6 is complete and verified, proceed to **Phase 7 — P1-C20: Analyst projects and interview readiness**. This should deliver four substantial portfolio projects and the full 100 Programme 1 interview questions (Lowball 20, Core 35, Highball 25, Trap 20), with genuine coding/analysis assessments, documentation, rubric, repeatability and readiness criteria. Do not simply reuse the legacy 51-question gym.

Create Phase 7 as a separate stacked, validated batch/PR based on Phase 6. Update the deploy gate to C00–C20 only after the final chapter is fully implemented and verified.

## Non-negotiable safeguards

- Do not modify or reset the existing 84-lesson Python track or its saved progress keys.
- Do not replace separate SQL, Excel, NumPy, pandas, Statistics or Power BI tracks.
- Do not change the established learning architecture without a concrete reason.
- Do not mark a chapter available until the code, lesson flow and tests are complete.
- Do not hardcode API keys or require real secrets in examples.
- Do not let CI rely on external API availability.
- Do not merge to main, deploy, force-push, reset branches or discard work without asking me.
- Do not stop after creating files; validate the entire application and both Python exercise suites.
- Work through failures until they are fixed. Give short progress updates, but prioritise completing the implementation over explaining what you intend to do.

Start by inspecting the actual branch and current repository state, then implement Phase 6.
