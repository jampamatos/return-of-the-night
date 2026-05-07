# Architecture

## Purpose

This document explains the current architectural shape of the repository and the intended direction defined by the project blueprint.

Its goal is to describe the repository as it exists now without pretending that planned systems already exist.

For detailed product scope and long-term roadmap, see [`docs/open_rulebook_platform_blueprint.md`](./open_rulebook_platform_blueprint.md). For the bootstrap decision, see [`docs/adr/0001-bootstrap-strategy.md`](./adr/0001-bootstrap-strategy.md). For code-level organization conventions, see [`docs/code-organization.md`](./code-organization.md).

## Current architectural direction

The repository is currently structured around a **plain Astro** foundation with the shared shell, content engine, book home / Table of Contents, and chapter reader implemented.

That choice is intentional. The current architecture prioritizes:

- clarity over feature richness
- maintainability over early convenience
- progressive complexity over premature abstraction
- open-source readiness over fast visual polish

At the moment, the project is a static Astro application with repository-quality tooling, locale-prefixed shell routes, Astro content collections, typed schemas, initial content seeds, metadata utilities for chapters and glossary entries, a content-backed book home route that renders an automatically generated Table of Contents, and generated chapter reader pages that render MDX content.

## Core system layers

The long-term architecture is organized around the following layers.

### 1. Presentation layer

This is the user-facing application built with Astro pages, layouts, and components.

This layer currently provides:

- the landing page
- the shared shell
- language and audience controls
- the book home and Table of Contents
- the chapter reader
- chapter-local navigation controls

Planned additions to this layer include:

- glossary interactions
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

In the current repository, this layer includes implemented utilities for content loading, chapter ordering, adjacent chapter resolution, TOC grouping, chapter-reader link generation, glossary listing, glossary lookup, locale routing, and audience preference handling. Rich content, glossary interaction, and localization consolidation behavior still remains deferred.

### 4. Repository and governance layer

This project is not only an app. It is also an open-source repository intended to scale sustainably.

That means architecture includes repository systems such as:

- documentation
- ADRs
- issue and pull request templates
- formatting, linting, and type checking
- licensing and asset provenance policy
- contribution and community guidance

## Current repository structure

The current repository is intentionally structured so later layers have a clear place to grow.

Important directories and files:

- `.github/`: issue templates and pull request template
- `public/`: public static assets, including the intended location for repository-tracked images
- `public/images/`: public-facing image asset location
- `src/pages/`: Astro route entry points
- `src/pages/[lang]/`: language-prefixed route space, including landing, shell, and book home routes
- `src/components/`: UI and reader component area, including the current `BookTableOfContents` and reader heading components
- `src/content/`: implemented content collections for chapters, glossary, and book config
- `src/layouts/`: future shared layout area
- `src/lib/`: reusable domain and utility logic, including content, TOC, reader, glossary, locale-routing, and audience helpers
- `src/styles/`: future shared style area
- `docs/`: source-of-truth and support documentation

Current implementation status:

- `src/pages/index.astro`, `src/pages/[lang]/index.astro`, and `src/pages/[lang]/shell/index.astro` provide the current landing and shell entry routes
- `src/pages/[lang]/book/index.astro` provides the current book home route
- `src/pages/[lang]/book/[...slug].astro` provides generated chapter reader routes
- Astro content collections are registered in `src/content.config.ts`
- typed schemas exist for `chapters`, `glossary`, and `book-config`
- seed content exists for English chapters, English glossary entries, an English book config entry, and mirrored PT-BR examples for logical identity validation
- chapter metadata utilities support listing by language/book, stable ordering, and previous/next resolution
- TOC utilities support metadata-driven grouping, configured groups, and fallback ungrouped entries
- chapter route utilities generate reader links from content slugs
- reader utilities normalize headings, build sidebar data, define reader copy, and create adjacent-reader links
- glossary metadata utilities support listing by language and lookup by logical `id`
- the book home renders a content-backed Table of Contents with empty states, orientation cues, and basic responsive behavior
- the chapter reader renders MDX content, chapter-level orientation, current-chapter sidebar navigation, previous/next links, stable heading anchors, section deep links, and styled responsive Markdown tables through a shared reader MDX component surface

## Current boundaries

The current implementation includes:

- Astro bootstrap and repository-quality tooling
- locale-prefixed landing, shell, and book home routes
- audience preference persistence and shell controls
- typed Astro content collections for chapters, glossary, and book config
- initial content seeds in English plus mirrored PT-BR examples for shared logical IDs
- metadata utilities for chapter listing, ordering, adjacent navigation, TOC grouping, reader link generation, and glossary lookup
- a content-backed book home / Table of Contents with empty states, orientation cues, and basic responsive behavior
- generated chapter reader pages with plain MDX rendering, current-chapter sidebar navigation, previous/next chapter navigation, stable heading anchors, working section links, responsive fallback behavior, sparse-heading safeguards, a shared reader MDX component surface, and styled responsive Markdown table rendering

The current implementation does **not** yet include:

- rich content blocks such as figure/caption systems, columns, and callouts
- expanded audience-conditional block rendering
- glossary hover cards or reader-side glossary interactions
- full translation parity or complete localization behavior
- authentication, authorization, or backend infrastructure

This means the repository now reflects the first complete content-driven reader layer of the system plus the first reader rich-content primitive for Markdown tables, while richer content blocks, glossary interactions, and localization consolidation remain planned rather than implemented.

## Planned evolution

The intended implementation order remains incremental:

1. repository foundation — completed
2. base site structure and route shell — completed
3. content engine and schemas — completed
4. book home and Table of Contents generation — completed
5. chapter reader — completed
6. rich content features — next
7. interactive glossary — planned
8. real localization — planned
9. UX and layout refinement — planned
10. contribution docs and hardening — planned

The architecture should continue to follow these principles as the project grows:

- keep content as the source of navigation truth
- keep authoring workflows close to Markdown and MDX
- isolate reusable logic from page rendering when complexity grows
- keep route files focused on orchestration and move stable UI/logic into named components and `src/lib/`
- avoid introducing framework layers or abstractions before they are justified
- keep repository documentation aligned with implementation reality
