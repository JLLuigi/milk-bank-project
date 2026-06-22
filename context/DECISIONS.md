---
context_role: core
owner: decisions
read_when: durable choice, architecture, public/private posture, repeated workflow, or conflict between docs
stability: stable
update_mode: append_entries
---

# DECISIONS.md

Record public-safe decisions that affect future work.

The reason behind a decision is as important as the decision itself. Use this file to help teammates and AI tools avoid reopening settled debates without context.

Do not log brainstorming, temporary ideas, routine edits, credentials, private personal details, internal strategy, or observations that do not change future work.

Do not edit accepted entries. If a decision changes, write a new entry and mark the old one as superseded.

## Entry Template

```md
### YYYY-MM-DD - Short Decision Title

Decision:

Why:

Alternatives considered:

Consequences:
- Positive:
- Negative:
- Risks:

Supersedes: <!-- YYYY-MM-DD [title] or N/A -->

Status: <!-- active | superseded by YYYY-MM-DD [title] | deprecated -->

References:
```

Use `References` to point to owner files instead of duplicating their content.

## Decisions

### 2026-05-26 - Tech Stack: React + Vite + Supabase + Vercel

Decision: Use React with TypeScript (Vite) for the frontend, Supabase for backend/database/auth, Vercel for hosting, and Google SMTP via Supabase Edge Functions for email notifications.

Why: Supabase provides PostgreSQL, authentication, and Edge Functions in a single managed platform — reducing infrastructure overhead for a small academic team. React + Vite is the fastest path to a working UI with TypeScript safety. Vercel is the standard deployment target for Vite apps.

Alternatives considered: Express + raw PostgreSQL (higher learning overhead, no built-in auth); Firebase (NoSQL — poor fit for relational milk tracking data); Next.js (overkill for a staff-only internal tool).

Consequences:
- Positive: Reduced backend setup time; Supabase handles auth, RLS, and real-time; free tier sufficient for project scale.
- Negative: Tied to Supabase's opinionated API; Edge Functions have cold-start latency; harder to self-host.
- Risks: Supabase free tier limitations (project pauses after inactivity); vendor lock-in for auth and RLS logic.

Supersedes: N/A

Status: superseded by 2026-06-13 [Architecture Migration: Fullstack Next.js 15]

References: 

---

### 2026-05-26 - Notification System: Email (FIFO), Not SMS

Decision: Use automated email notifications on a First-In-First-Out (FIFO) basis for beneficiary waitlisting. SMS is out of scope.

Why: The SRS (FR-11) specifies email notifications via Supabase Edge Functions + Google SMTP. An earlier design document mentioned SMS, but the finalized SRS supersedes it.

Alternatives considered: SMS (mentioned in earlier architecture doc — rejected in SRS finalization); manual phone calls (current client workflow, which the system replaces).

Consequences:
- Positive: Simpler integration; no SMS gateway cost; Google SMTP is free for low volume.
- Negative: Beneficiaries must have email access; less immediate than SMS.
- Risks: Email delivery delays may affect FIFO fairness perception.

Supersedes: N/A (SMS was never formally adopted — the SRS is the authoritative source)

Status: active

References: 

---

### 2026-06-19 - Auth: Email + Password Only

Decision: Staff login is restricted to email and password. OAuth, magic links, SMS/OTP, and phone verification are out of scope.

Why: Internal staff portal for known hospital users only. No public-facing signup. Complexity of OAuth and magic links is not justified for this user base.

Alternatives considered: OAuth via Google (rejected, adds external dependency), magic link (rejected, no email infrastructure reliability guarantee in hospital network context).

Consequences:
- Positive: Simpler auth flow; no third-party OAuth provider dependency.
- Negative: Password reset requires SMTP email to function (single dependency point).
- Risks: If SMTP fails, locked-out staff cannot self-recover.

Supersedes: N/A
Status: active
References: 

---