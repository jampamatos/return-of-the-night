# Roadmap

This roadmap summarizes the currently approved project phases for **Return of the Night**.

The source of truth for detailed scope, architecture direction, and implementation order remains [`docs/open_rulebook_platform_blueprint.md`](docs/open_rulebook_platform_blueprint.md).

## Current phase

The repository has completed **Phase 9 — Reader controls and layout refinement**.

The current implementation checkpoint is **Active editorial writing**.

The next project milestone is **growing the PT-BR-first book with immediate English translations**.

## Planned phases

### Phase 1 — Repository foundation ✅

Establish the technical and organizational base of the project:

- Astro bootstrap
- TypeScript, linting, and formatting
- repository structure
- onboarding and governance docs
- issue and pull request templates
- minimum CI

### Phase 2 — Base site structure ✅

Build the initial navigable shell of the product:

- landing page
- shared layout
- language-prefixed routing
- language switcher
- audience switcher
- local persistence

### Phase 3 — Content engine ✅

Create the content model and typed collection layer:

- content collections
- typed schemas
- chapter and glossary collections
- book configuration
- content metadata utilities

### Phase 4 — Book home / Table of Contents ✅

Generate the book home page from real content:

- automatic Table of Contents
- chapter grouping
- correct future reader link generation
- empty states and missing-data safeguards
- book-home orientation cues
- basic responsive behavior for the TOC layout

### Phase 5 — Chapter reader ✅

Turn chapters into a real reading experience:

- chapter route
- MDX rendering
- current-chapter sidebar
- previous and next navigation
- deep links and heading anchors

### Maintenance checkpoint — Code organization and contributor readiness ✅

Prepare the codebase to scale safely before the next feature layer:

- split large reader route code into smaller components
- move reader-specific data shaping into `src/lib/reader`
- document code organization expectations for contributors
- preserve existing behavior while improving readability and reviewability

### Phase 6 — Rich content features ✅

Add expressive content blocks and reader features:

- images with captions
- styled tables
- side-by-side layout
- callouts
- audience-conditional blocks

### Content readiness checkpoint — Bilingual content contract ✅

Validate the content model and reader surface before active writing:

- PT-BR-first authoring with immediate English counterparts
- localized book configuration and content-backed Table of Contents groups
- aligned provisional glossary entries
- dynamic parity checks for localized chapter IDs, metadata, and group membership

### Phase 7 — Interactive glossary ✅

Introduce glossary references with contextual interactions:

- inline term syntax
- glossary lookups
- hover and focus cards
- semantic glossary styling

### Phase 8 — Real localization ✅

Consolidate multilingual behavior across the product:

- equivalent routes by language
- mirrored content by shared IDs
- translated global labels
- fallback rules for missing content

### Phase 9 — Reader controls and layout foundation ✅

Complete the remaining functional reader controls before the deliberate visual redesign:

- theme control
- compact mobile navigation
- back-to-top behavior
- responsive and accessibility checks
- a later unified redesign of the shell, TOC, and chapter layout

### Editorial authoring readiness ✅

Prepare the validated book structure for final prose:

- PT-BR-first and immediate-English authoring workflow
- reusable chapter and glossary templates for both locales
- practical editorial guidance and a ready-for-review checklist

### Active editorial writing ← Next

Write the book without a predetermined chapter count:

- grow the chapter map from the material as it is authored
- maintain PT-BR and English entries together
- replace provisional glossary text with canonical setting definitions when the terms stabilize

### Phase 10 — Contribution docs and hardening

Prepare the project to scale safely with outside contributors:

- architecture and writing guides
- refined templates
- validations
- backlog shaping for future cycles

## Notes

- The roadmap is intentionally incremental.
- The approved implementation order is Phase 1 through Phase 10.
- If the roadmap changes materially, the supporting documents in `docs/` should be updated as well.
- Completed phases are marked with ✅, and the next implementation milestone is marked with ← Next.
