# Architecture

## Purpose

This document explains the current architectural shape of the repository and the intended direction defined by the project blueprint.

Its goal is to describe the repository as it exists now without pretending that planned systems already exist.

For detailed product scope and long-term roadmap, see [`docs/open_rulebook_platform_blueprint.md`](./open_rulebook_platform_blueprint.md). For the bootstrap decision, see [`docs/adr/0001-bootstrap-strategy.md`](./adr/0001-bootstrap-strategy.md). For code-level organization conventions, see [`docs/code-organization.md`](./code-organization.md).

## Current architectural direction

The repository is currently structured around a **plain Astro** foundation with a cover-first entry, shared site frame, project Home, content engine, Table of Contents, and chapter reader implemented.

That choice is intentional. The current architecture prioritizes:

- clarity over feature richness
- maintainability over early convenience
- progressive complexity over premature abstraction
- open-source readiness over fast visual polish

At the moment, the project is a static Astro application with repository-quality tooling, locale-prefixed routes, Astro content collections, typed schemas, a complete bilingual placeholder corpus, a localized glossary index with inline reader interactions, a cover route, a project Home route, a content-backed Table of Contents route, and generated chapter reader pages that render MDX content.

## Core system layers

The long-term architecture is organized around the following layers.

### 1. Presentation layer

This is the user-facing application built with Astro pages, layouts, and components.

This layer currently provides:

- the cover page and project Home
- the shared shell
- language and audience controls
- the Table of Contents
- the chapter reader
- chapter-local navigation controls
- localized glossary indexes and inline glossary cards

Planned additions to this layer include:

- richer reader layouts

### 2. Content layer

This layer is responsible for storing and loading book content as structured files.

The intended direction is:

- localized chapter content under `src/content/chapters/...`
- localized glossary content under `src/content/glossary/...`
- content metadata that drives ordering, navigation, and rendering

This layer is central to the project. The architecture is explicitly **content-first**: navigation and much of the UI should be derived from structured content rather than hand-maintained route lists.

### 3. Domain and utility layer

This layer groups reusable logic that should stay outside page components when it becomes non-trivial.

Expected responsibilities include:

- audience handling
- content loading and ordering
- glossary lookup
- localization utilities
- reader-specific navigation logic

In the current repository, this layer includes implemented utilities for content loading, chapter ordering, adjacent chapter resolution, TOC grouping, chapter-reader link generation, glossary listing, glossary lookup, locale routing, localized chapter-route fallback handling, audience preference handling, and rich-content directive transformations.

### 4. Repository and governance layer

This project is not only an app. It is also an open-source repository intended to scale sustainably.

That means architecture includes repository systems such as:

- documentation
- ADRs
- issue and pull request templates
- formatting, linting, type checking, content integrity checks, browser/accessibility tests, and dependency audits
- licensing and asset provenance policy
- contribution and community guidance

## Current repository structure

The current repository is intentionally structured so later layers have a clear place to grow.

Important directories and files:

- `.github/`: issue templates and pull request template
- `public/`: public static assets, including the intended location for repository-tracked images
- `public/images/`: public-facing image asset location
- `src/pages/`: Astro route entry points
- `src/pages/[lang]/`: language-prefixed route space, including cover, project Home, and book routes
- `src/components/`: UI and reader component area, including the current `BookTableOfContents` and reader heading components
- `src/content/`: implemented content collections for chapters, glossary, and book config
- `src/layouts/`: future shared layout area
- `src/lib/`: reusable domain and utility logic, including content, TOC, reader, glossary, locale-routing, and audience helpers
- `src/styles/`: future shared style area
- `docs/`: source-of-truth and support documentation

Current implementation status:

- `src/pages/index.astro` and `src/pages/[lang]/index.astro` provide the root redirect and localized cover routes
- `src/pages/[lang]/home/index.astro` provides the project Home route
- `src/pages/[lang]/book/index.astro` provides the Table of Contents route
- `src/pages/[lang]/book/[...slug].astro` provides generated chapter reader routes
- `src/pages/[lang]/glossary/index.astro` provides localized glossary indexes
- Astro content collections are registered in `src/content.config.ts`
- typed schemas exist for `chapters`, `glossary`, and `book-config`
- complete placeholder content exists for ten English chapters, ten PT-BR chapters, six glossary entries per locale, and localized book-config entries with aligned group membership
- chapter metadata utilities support listing by language/book, stable ordering, and previous/next resolution
- TOC utilities support metadata-driven grouping, configured groups, and fallback ungrouped entries
- chapter route utilities generate reader links from content slugs; localization utilities resolve translated chapters by logical ID and expose an explicit missing-translation fallback
- reader utilities normalize headings, build sidebar data, define reader copy, and create adjacent-reader links
- glossary metadata utilities support listing by language and lookup by logical `id`; inline MDX term directives resolve against those IDs during the static build
- the Table of Contents renders from content metadata with empty states, orientation cues, and basic responsive behavior
- the chapter reader renders MDX content, chapter-level orientation, current-chapter sidebar navigation, previous/next links, stable heading anchors, section deep links, semantic figures with captions, styled responsive Markdown tables, directive-authored responsive columns, callouts, Player/GM audience blocks, and accessible glossary cards through a shared reader MDX component surface
- the repository runs unit/content validation with Vitest, Chromium browser/accessibility validation with Playwright and axe, and high-severity dependency audits in CI

## Current boundaries

The current implementation includes:

- Astro bootstrap and repository-quality tooling
- locale-prefixed cover, project Home, and Table of Contents routes
- audience preference persistence and shell controls
- typed Astro content collections for chapters, glossary, and book config
- complete PT-BR-first bilingual placeholder corpus with shared logical IDs and localized slugs
- metadata utilities for chapter listing, ordering, adjacent navigation, TOC grouping, reader link generation, glossary lookup, and glossary-reference validation
- a content-backed Table of Contents with empty states, orientation cues, and basic responsive behavior
- generated chapter reader pages with plain MDX rendering, current-chapter sidebar navigation, previous/next chapter navigation, stable heading anchors, working section links, responsive fallback behavior, sparse-heading safeguards, a shared reader MDX component surface, semantic figure rendering, styled responsive Markdown table rendering, responsive reader column rendering, semantic callout rendering, audience-conditional block rendering, and interactive glossary definitions
- localized glossary indexes and static validation of inline glossary IDs
- automated unit/content, browser/accessibility, and dependency-audit checks

The current implementation does **not** yet include:

- authentication, authorization, or backend infrastructure

This means the repository now reflects the complete content-driven reader layer and current rich-content feature set, including audience blocks, glossary interactions, and bilingual route resolution with strict parity validation.

## Planned evolution

The intended implementation order remains incremental:

1. repository foundation — completed
2. base site structure and route shell — completed
3. content engine and schemas — completed
4. book home and Table of Contents generation — completed
5. chapter reader — completed
6. rich content features — completed
7. interactive glossary — completed
8. real localization — completed
9. reader controls and layout refinement — next
10. contribution docs and hardening — planned

The architecture should continue to follow these principles as the project grows:

- keep content as the source of navigation truth
- keep authoring workflows close to Markdown and MDX
- isolate reusable logic from page rendering when complexity grows
- keep route files focused on orchestration and move stable UI/logic into named components and `src/lib/`
- avoid introducing framework layers or abstractions before they are justified
- keep repository documentation aligned with implementation reality
