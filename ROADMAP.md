# Roadmap

This roadmap summarizes the currently approved project phases for **Return of the Night**.

The source of truth for detailed scope, architecture direction, and implementation order remains [`docs/open_rulebook_platform_blueprint.md`](docs/open_rulebook_platform_blueprint.md).

## Current phase

The repository has completed **Phase 5 — Chapter reader**.

The next implementation milestone is **Phase 6 — Rich content features**.

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

### Phase 6 — Rich content features ← Next

Add expressive content blocks and reader features:

- images with captions
- styled tables
- side-by-side layout
- callouts
- audience-conditional blocks

### Phase 7 — Interactive glossary

Introduce glossary references with contextual interactions:

- inline term syntax
- glossary lookups
- hover and focus cards
- semantic glossary styling

### Phase 8 — Real localization

Consolidate multilingual behavior across the product:

- equivalent routes by language
- mirrored content by shared IDs
- translated global labels
- fallback rules for missing content

### Phase 9 — UX and layout refinement

Refine the product experience into a more polished reader:

- improved landing page
- improved TOC
- improved chapter layout
- responsive refinement
- navigation refinement

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
