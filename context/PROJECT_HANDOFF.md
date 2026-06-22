---
context_role: core
owner: handoff
read_when: session start, resume, meaningful work, or before ending work
stability: current
update_mode: replace_each_session
---

# PROJECT_HANDOFF.md

Current session continuity log. Document only the active state for the next teammate or AI session. 

* *Ownership Details*: [context/README.md](README.md) governs where facts belong.

## Current State

* **Working**:
  * Scaffolding: Next.js 15 app, Supabase auth, middleware session protection, and Vitest testing config.
  * Automation: GitHub Actions CI workflow runs compiler, linter, and tests on push/PR.
  * Boundaries: Route groups owned by individual developers under `src/app/`.
  * Context System: Clean, declarative context structure ([GLOSSARY.md](GLOSSARY.md), [TEAM_INTERNAL.md](TEAM_INTERNAL.md), [DECISIONS.md](DECISIONS.md)).

* **In Progress**:
  * UI Foundation: Design token entries are blank in [UI.md](UI.md).

* **Blocked**:
  * None.

## Last Meaningful Changes (This Session)

* **Refactored Onboarding & Workflow**: [TEAM_INTERNAL.md](TEAM_INTERNAL.md) updated to use `npm ci` for exact package matching, added first-time repository setup checklists, and defined agent conflict escalation policies.
* **Formatted Glossary**: [GLOSSARY.md](GLOSSARY.md) refactored into markdown tables per [SKILL.md](/skills/project-planning/SKILL.md) and updated with key clinical terms (*PDHM*, *Raw Milk*, *Holder Pasteurization*, *LGU*).
* **De-duplicated Project Rules**: Removed duplicate local validation commands from [PROJECT_GUIDE.md](PROJECT_GUIDE.md) and replaced them with relative links to [TEAM_INTERNAL.md](TEAM_INTERNAL.md).
* **Logged New Decisions**: Appended decisions to [DECISIONS.md](DECISIONS.md) covering the CI validation pipeline and centralized testing directory (`src/tests/`).
* **GitHub Rulesets & CODEOWNERS**: Configured [.github/CODEOWNERS](../.github/CODEOWNERS) and [.github/github_ruleset_main.json](../.github/github_ruleset_main.json) to restrict PR approvals to the repository owner and require passing CI tests.

## Risks or Stale Facts

* **Empty UI Tokens**: [UI.md](UI.md) values are blank. Member 1 (Lead) must populate them on Day 3 of the timeline.

## Verification Gaps

* None. (Context routing validated successfully via `context_map.py`).

## Next Focus

* Start implementing page views inside individual member route groups under `src/app/`.

## Closeout Checklist

- [ ] Log durable architectural choices in [DECISIONS.md](DECISIONS.md).
- [ ] Add stable coding guidelines or directories to [PROJECT_GUIDE.md](PROJECT_GUIDE.md).
- [ ] Record setup/installation adjustments in [TEAM_INTERNAL.md](TEAM_INTERNAL.md) (onboarding) or root [README.md](/README.md) (public).
- [ ] Ensure all referenced code filenames, routes, and paths are clickable links.
- [ ] Remove completed session details from **Last Meaningful Changes** to keep this log short.
- [ ] Run `python scripts/context_map.py --check` if editing context files.
