---
context_role: index
owner: context_map
read_when: mapping context files or choosing what to read next
stability: stable
update_mode: pointers_only
---

# Context Directory

This directory uses lightweight context engineering for human and AI collaboration.

Frontmatter in `context/*.md` routes attention. Run the context map, then read the body of a file only when its `read_when` field matches the task.

```sh
python3 scripts/context_map.py
```

## Context Ownership

Keep each fact in one owning file and use pointers from other files.

- Stable project rules and source order belong in `PROJECT_GUIDE.md`.
- Durable decisions and rationale belong in `DECISIONS.md`.
- Current state, blockers, verification gaps, and next focus belong in `PROJECT_HANDOFF.md`.
- Private workflow and repository safety belong in `TEAM_INTERNAL.md`.
- Public setup and usage belong in the root `README.md`.
- Acronyms and core term definitions belong in `GLOSSARY.md`.
- Visual design system tokens belong in `UI.md`.
- Individual developer task tracking logs belong in `.status/member[N].md`.
- Architectural design blueprints and sprint plans belong in `.plan/`.

Before editing context files, decide which file owns each fact. After editing, scan for copied details that should be replaced by pointers.
