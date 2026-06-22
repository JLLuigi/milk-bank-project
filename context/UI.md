---
context_role: support
owner: ui_design
read_when: frontend, visual design, UI styling, design tokens, or user-facing layout
stability: current
update_mode: edit_in_place
---

# UI.md

Current-state visual design system. Update values in place — no history, no log.
If a visual decision is architecturally significant, record it in `context/DECISIONS.md`.

## Aesthetic

Direction: 
Reference: 

## Tokens

```css
:root {
  --bg:       ;   /* page background */
  --surface:  ;   /* card / panel background */
  --primary:  ;   /* main brand color */
  --accent:   ;   /* highlights, links, decorative */
  --text:     ;   /* primary text */
  --muted:    ;   /* secondary / caption text */
  --border:   ;   /* border / divider */
}
```

## Type

- Font:
- Scale: (e.g. 12 / 14 / 16 / 20 / 28 / 40px)
- Weight: (e.g. 400 body · 600 headings · 500 labels)

## Radius

(Use 3 values only — e.g. 8px inputs · 16px cards · 9999px pills)

- Small:
- Medium:
- Full:

## Spacing

- Base unit: (e.g. 8px)
- Scale: (e.g. 8 / 16 / 24 / 32 / 48 / 64px)

## Rules

1. Use shared components (`SidebarLayout`, `MetricCard`, `DataTable`, `FilterToolbar`, `Button`, `FormField`, `StatusBadge`) under `src/components/`.
2. Do not write custom page styling. Use the primitives.
3. All form submissions must use the shared `Button` primitive to prevent double submissions.

## Reusable UI Components Checklist

- **Layout & Shell**
  - `SidebarLayout.tsx`: Collapsible navigation layout, role-based page filtering (`/admin/*` and `/reports`).
  - `MetricCard.tsx`: Metric widget (props: title, value, trend, helper text).
- **Lists & Tables**
  - `DataTable.tsx`: Reusable table component (props: columns, data, actions, pagination).
  - `FilterToolbar.tsx`: Search/filter bar syncing with URL query params (`searchParams`).
- **Form Elements & Indicators**
  - `Button.tsx`: Primitive disabling itself & displaying loading state via `useFormStatus` during Server Actions.
  - `FormField.tsx`: Wraps label, inputs, and validation errors.
  - `StatusBadge.tsx`: Color-coded entity states badge.

## Domain-Specific Component Rules

- **Status Badge Color Coding**
  - `available` / `passed` -> Green
  - `pending_*` / `waiting` -> Amber
  - `discarded` / `failed` -> Red
- **Compliance Checklist**
  - `<ComplianceChecklist />`: Wraps clinical abstract, prescription, cooler/ice verification, disabling submit button until all are checked.
- **Dynamic Collection Metadata**
  - `<CollectionMetadataForm program={program} />`: Renders fields dynamically based on program selection:
    - `supsup_todo`: Lactation checklist.
    - `milky_way`: Patient ID verification.
    - `moms_act`: Cooler temperature & address inputs.

## Guardrails (What Not to Do)

1. **No custom styling on pages:** Do not write custom styles or spacing classes on page components; use the shared UI primitives.
2. **No inline client actions:** Do not place Server Action logic inside Client Components; mutations must go through colocated `_actions.ts` files.
3. **No client-side fetch for tables:** Fetch table data in Server Components and pass to `DataTable.tsx` as props.
4. **No unsecured admin routes:** Pages and root layouts must run server-side auth checks using helpers from `src/lib/auth.ts`.
5. **No un-monitored buttons:** Use the shared `Button` primitive for form submissions to prevent double submissions.

