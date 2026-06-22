---
context_role: support
owner: glossary
read_when: definition check or acronym lookup
stability: stable
update_mode: edit_in_place
---

> Note: You can press Ctrl + Shift + V to view it in properly formatted tables

# GLOSSARY.md

Glossary of key system, framework, and domain-specific clinical terms.

## Next.js & Web Framework Concepts

| Term | Explanation |
| :--- | :--- |
| **Next.js** | A React-based fullstack web framework that manages page layouts, server rendering, routing, and APIs. |
| **Route Group** | A folder wrapper in parentheses, like `(donors)/`. It groups routes together for developer ownership and shared layouts without changing the public URL path. |
| **`page.tsx`** | The React file defining the user interface (UI) rendered at a specific URL path. |
| **`layout.tsx`** | A shared template wrapper (e.g., containing navigation or menus) that wraps all pages inside a route group. |
| **`_actions.ts`** | A file containing Server Actions — secure, server-side functions invoked by forms in the browser to update database records. |
| **Server Component** | A React component that executes only on the server, fetching data directly from Postgres before sending finished HTML to the browser. |
| **Client Component** | A React component marked with `"use client"` that executes in the browser, enabling interactivity like buttons, input state, and event handlers. |
| **Middleware (`middleware.ts`)** | A gateway filter at the project root that runs code on every request to check credentials, redirecting logged-out users or blocking non-admins. |
| **Turbopack** | Next.js's underlying compilation tool that speeds up the local development server. |

## Workflow & Software Testing Concepts

| Term | Explanation |
| :--- | :--- |
| **Stub** | A temporary placeholder function with a valid signature but no logic (usually throws an error), allowing code compilation before feature implementation. |
| **Helper (`*-helpers.ts`)** | A file containing pure logic utility functions colocated near its feature route. It does not call the database and is easily tested. |
| **Pure Function** | A function that always returns the exact same output for the same input and causes no side-effects (no network, database, or global state calls). |
| **Unit Test** | An automated script that verifies a helper function behaves correctly under normal, edge-case, and error inputs. |
| **`it.todo`** | A marker inside testing suites that registers a planned test that hasn't been written yet, preventing it from failing the build. |
| **`database.types.ts`** | TypeScript definitions mapping the database schema, catching database query typos at compile-time. This file is manually maintained to match `db_schema.dbml`. |
| **`types.ts` (`src/lib/types.ts`)** | The project-wide types file that aggregates database entities, metadata definitions, and custom interface shapes. |
| **`ActionResult<T>`** | The standardized return format for Server Actions: either `{ success: true, data: T }` or `{ success: false, error: string }`. |

## Technical & Security Acronyms

| Acronym / Term | Full Name | Explanation |
| :--- | :--- | :--- |
| **RLS** | Row-Level Security | A Postgres database feature that ensures users can only read or write specific records based on their authenticated role. |
| **CI** | Continuous Integration | Automation pipeline (via GitHub Actions) that runs linter, compiler, and tests on every commit to block broken code from merging. |
| **PR** | Pull Request | A request submitted on GitHub to review and merge new feature branches into the primary branch (`main`). |
| **SMTP** | Simple Mail Transfer Protocol | Email transmission protocol used to dispatch notification emails via Google Mail servers. |
| **TDD** | Test-Driven Development | A development methodology where automated tests are written first, and implementation code is written to make those tests pass. |
| **E2E** | End-to-End | Testing the entire application flow from the browser UI down to the database records. |
| **3NF** | Third Normal Form | Database design standard used in this project to prevent table duplication and maintain relational integrity. |
| **SRS** | Software Requirements Specification | The client-approved document outlining the complete system features and constraints. |

## Domain & Clinical Concepts

| Term / Acronym | Full Name | Explanation |
| :--- | :--- | :--- |
| **MHMBMS** | Makati Human Milk Bank Management System | The software system being built for the Makati Human Milk Bank. |
| **LGU** | Local Government Unit | Philippine local government entities. Makati Human Milk Bank is the first LGU-managed milk bank in the country. |
| **PDHM** | Pasteurized Donor Human Milk | Screened and pasteurized breast milk that has been certified safe for clinical distribution. |
| **Raw Milk** | Raw Donor Breast Milk | Unpasteurized breast milk collected from donors, kept frozen prior to laboratory testing and pasteurization. |
| **Holder Pasteurization** | Holder Pasteurization | Clinical method used by the facility, heating pooled milk to 62.5°C (144.5°F) for 30 minutes to destroy pathogens while preserving nutrition. |
| **Supsup Todo** | - | Mobile barangay-level milk collection drive program. |
| **Milky Way** | - | Hospital-based milk collection program from pre-screened donors. |
| **Mom's Act** | - | Home milk collection program via courier/staff pickup. |
| **DTN** | Donor Tracking Number | A unique, sequential registration code assigned to a mother-donor (e.g., `DONOR-0001`). |
| **CTN** | Collection Tracking Number | A unique tracking identifier generated for each milk collection session (e.g., `COLL-0002`). |
| **NICU** | Neonatal Intensive Care Unit | Specialized hospital ward for premature or critical infants who receive priority access to pasteurized donor milk. |
| **FIFO** | First-In-First-Out | Inventory management method where the oldest unexpired milk batch in stock is dispensed first to minimize spoilage. |
