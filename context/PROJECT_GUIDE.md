---
context_role: core
owner: project_rules
read_when: always
stability: stable
update_mode: edit_in_place
---

# PROJECT_GUIDE.md

Stable project context for teammates and AI tools.

Keep this file short. Update or remove obsolete rules instead of adding competing ones.

## Project Snapshot

- Project: Makati Human Milk Bank Management System (MHMBMS)
- Roles: `admin` (Head Nurse/Admin) and `staff` (Nurses/Midwives) per context/DECISIONS.md
- Goal: Replace manual logbook operations with web-based donor milk tracking for Supsup Todo, Milky Way, and Mom's Act
- Workspace Root: `d:\Documents\milkbank`
- Non-goals: mobile-native app, offline-first operation, SMS notifications, multi-tenant SaaS

## Tech Stack
* Core stack details are documented in the root README.md.

## Coding Standards

### File and Folder Conventions
* Pages must be `page.tsx`. Server Actions must be `_actions.ts` (e.g., `donors/_actions.ts`).
* Domain-specific helpers must be pure functions colocated inside their route group (e.g., `donors/auth-helpers.ts`).
* Unit tests must live centrally in `src/tests/` (e.g., `src/tests/auth.test.ts`).
* Shared components must live in `src/components/` using PascalCase (e.g., `src/components/DataTable.tsx`).
* `src/lib/` is strictly for shared infrastructure (`supabase.ts`, `auth.ts`, `types.ts`, `database.types.ts`, `notifications.ts`, `email.ts`).
* Custom/domain types must be defined in `src/lib/types.ts` and extend `database.types.ts`.
* **Rule**: Do not import Server Actions across different member route groups.

### TypeScript and Type Safety
* Explicitly type all function parameters and return values.
* Derive database entity types from `database.types.ts` (manually maintained from `db_schema.dbml` — do not run `supabase gen types`).
* **Rule**: Do not use `any`. Use `unknown` and type guards for untyped values.

### Server Actions
* Every `_actions.ts` file must start with `"use server"`.
* Validate all inputs at the top of the action.
* Return `ActionResult<T>` format (`{ success: true, data }` or `{ success: false, error: string }`). Do not throw errors from Server Actions directly to the UI.

### Next.js 15 Components
* Default to Server Components. Only use `"use client"` if a component requires state (`useState`), event handlers, or browser APIs.
* Await dynamic route parameters (`params`) and query parameters (`searchParams`) before access.
* Await calls to `cookies()` and `headers()` asynchronously.
* Fetch independent datasets concurrently using `Promise.all`.
* **Prohibitions**: Do not fetch database data directly inside Client Components; do not read dynamic params/cookies synchronously; do not write sequential awaits for unrelated backend requests.

## Commit Format

- Style: Simple, lowercase, action-oriented commit messages (e.g., `scaffold app`, `update readme`, `add plans`). Strict conventional commits are not required.

## Source Order

When files conflict, trust the highest source and fix the stale lower one:

1. `context/PROJECT_GUIDE.md` - stable project context and collaboration rules
2. `context/DECISIONS.md` - durable decisions and rationale
3. `context/PROJECT_HANDOFF.md` - current state, risks, and next focus
4. `context/UI.md` - visual design system
5. `context/TEAM_INTERNAL.md` - private workflow and repository safety
6. `README.md` - public setup and usage
7. `systeminfo/Final_SRS.md` - functional and non-functional requirements
8. `systeminfo/System_Flow.md` - collection program process flows
9. Other project documentation

## Context Routing

Use frontmatter in `context/*.md` for progressive disclosure:

```sh
python3 scripts/context_map.py
```

Read file bodies only when `read_when` matches the task. Frontmatter routes attention; Markdown bodies remain the source of truth.

## Working Protocol

For substantial work, follow this sequence:
1. Read `context/PROJECT_GUIDE.md` for coding rules and standards.
2. Read your personal task list in `.status/member[N].md` to verify your active target tasks.
3. Read `context/DECISIONS.md` to check architectural and technical choices.
4. Read `.plan/delegation.md` (domain boundaries) and `.plan/interfaces_plan.md` (types and server actions contracts).
5. Inspect existing files before editing. Confirm with Lead before executing schema changes, changing RLS, or adding dependencies.

## Editing Rules

- Plan and context files must define contracts (rules, actions, and guardrails: what to do and what not to do) rather than explaining concepts.
- Keep all active plan and context files under 200 lines to ensure they are compact, focused, and easy to grasp.
- Keep each fact in one owner file; use relative pointers/links (e.g., `[filename.md](relative/path/to/filename.md)` or `[filename.md](filename.md)`) instead of duplicating explanations. Avoid absolute `file:///` links to keep code files clean and ensuring preview compatability.
- Designate a clear, singular owner for every document, namespace, and database entity.
- Resolve low-risk ambiguity by inspecting files; ask when remaining ambiguity is risky.
- Make the smallest useful change and prefer existing project patterns.
- Do not invent project facts, APIs, dependencies, deadlines, or team decisions.
- Do not overwrite teammate changes to make your own work easier.
- Update docs only when the change affects future work.


## Verification

Use the lightest check that proves the work enough for its risk.

- Trivial wording or pointer edits: readback or targeted `rg` is enough.
- Context/routing edits: run `python3 scripts/context_map.py --check`.
- SRS/process-flow edits: targeted readback and term search in the affected section.
- Code or Supabase behavior changes: run the narrow relevant test, lint, build, dry-run, or manual check.
- Broad or high-risk changes: use stronger verification and record gaps.

Do not run expensive checks just to satisfy a ritual. If a useful check is skipped to save time or tokens, say so briefly.

# Removed duplicate context ownership list. Authoritative mappings are defined in context/README.md.

## Session Close

### For All Team Members (Members 2–5)
Before ending work:
1. **Status Update**: Update only your personal file `.status/member[N].md` per the [Status Alignment instructions in TEAM_INTERNAL.md](TEAM_INTERNAL.md#4-status-alignment).
2. **Shared Files Restriction**: **DO NOT** edit, update, or append to `context/DECISIONS.md`, `context/PROJECT_GUIDE.md`, or `context/PROJECT_HANDOFF.md`.
3. **Change Requests**: If a decision, design token, or project rule needs updating, notify Member 1 to apply the changes.
4. **Local Verification**: Run local tests to verify your domain correctness per the [Local Verification Gate in TEAM_INTERNAL.md](TEAM_INTERNAL.md#3-local-verification-gate).

### For Member 1 (Lead) Only
At coordination checkpoints and session close:
1. **Consolidated Handoff**: Read all member status files to update `context/PROJECT_HANDOFF.md`.
2. **Durable Decisions**: Append decisions to `context/DECISIONS.md` and project rules to `context/PROJECT_GUIDE.md`.
3. **Context Verification**: Run `python scripts/context_map.py --check` after any context edits.


## Boundaries

Allowed:

- Edit documentation and context files
- Add or refactor app code within Next.js, Supabase, and TypeScript when implementation starts
- Update Supabase design only with explicit team agreement

Avoid:

- Adding new frontend frameworks or backend services without team agreement
- Storing secrets, env values, or credentials in committed files (refer to [Repository Safety in TEAM_INTERNAL.md](TEAM_INTERNAL.md#repository-safety--rules))
- Reopening decisions in `context/DECISIONS.md` without new evidence
- Turning `PROJECT_HANDOFF.md` into a permanent history log

Requires confirmation:

- Destructive commands, broad refactors, dependency changes, public/private exposure changes, scope expansion, Supabase schema changes affecting records, or RLS enable/disable changes
