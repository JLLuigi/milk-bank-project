---
context_role: conditional
owner: internal_workflow
read_when: onboarding setup, git branching, PR checklist
stability: stable
update_mode: edit_in_place
---

> Note: You can press Ctrl + Shift + V to view this file in a proper format for easy readability

# TEAM_INTERNAL.md

Private team workflow, delegation, and onboarding constraints.

## First-Time Repository Setup

Follow the standard setup instructions in the root [README.md](../README.md#getting-started).

* **Onboarding Security Boundary**:
  * Obtain the populated `.env.local` file directly from the Repo Lead.
  * Place the `.env.local` file into the root of your local workspace.
  * **Boundary**: Confirm `.env.local` is ignored and never commit environment keys or credentials.
* **Context Setup**: Read [context/README.md](README.md) to identify active file boundaries and roles before writing code.

## Team Delegation & Ownership

* **Domain Separation**: Folder ownership boundaries and task assignments are defined in [.plan/delegation.md](../.plan/delegation.md).

## Git Workflow (Developer Contract)

Adhere to the following workflow for all contributions:

### 1. Synchronization
* Switch to main: `git switch main`
* Pull latest changes: `git pull origin main`

### 2. Branch Constraints
* Create feature branch: `git switch -c member[N]/<feature-name>` (e.g., `git switch -c member2/donors-list`)
* **Boundary**: Bare member branches (e.g., `member2`) are prohibited. Specify the feature name.
* **Isolation**: Limit edits strictly to folders assigned to your member ID in [.plan/delegation.md](../.plan/delegation.md). Coordinate edits to shared code (e.g., `src/lib/*`) with the lead.

### 3. Local Verification Gate
* Execute all checks and ensure they pass before pushing:
  * TypeScript compiler check: `npx tsc --noEmit`
  * Linter check: `npm run lint`
  * Unit test suite: `npm run test`
* **Boundary**: Pushing commits with failing checks is prohibited.

### 4. Status Alignment
* Update task file `.status/member[N].md`. Mark completed tasks `[x]`, set active status block, and update the date.
* Commit status file along with code changes.

### 5. Remote Integration
* Commit using lowercase, action-oriented messages (per `PROJECT_GUIDE.md`).
* Push branch: `git push -u origin member[N]/<feature-name>`
* Submit Pull Request (PR) to `main` branch.
* Verify GitHub Actions CI status is green.
* Request Repo Lead review. Merge is blocked without Lead approval.
* Post-merge: Delete remote branch, switch to `main`, pull latest, and delete local branch.

### Conflict Resolution Protocol
If remote branch conflicts:
1. Synchronize main locally: `git switch main && git pull origin main`
2. Switch to feature branch: `git switch member[N]/<feature-name>`
3. Merge main: `git merge main`
4. Resolve conflicts, run the **Local Verification Gate**, and push.
5. **AI Rule**: If resolution fails or requires manual design decisions, halt and request user intervention.

## Repository Safety & Rules

* **Allowed**:
  * Push to feature branches matching `member[N]/<feature-name>` pattern.
  * Update assigned status and plan documentation.
* **Prohibited**:
  * Committing credentials, passwords, or patient/donor identification records.
  * Direct pushes to `main` (blocked via GitHub Branch Protection).
