# Architecture

## Purpose

This document explains the current architectural shape of the repository and the intended direction defined by the project blueprint.

Its goal is to describe the repository as it exists now without pretending that later-phase systems already exist.

For detailed product scope and long-term roadmap, see [`docs/open_rulebook_platform_blueprint.md`](./open_rulebook_platform_blueprint.md). For the Phase 1 bootstrap decision, see [`docs/adr/0001-bootstrap-strategy.md`](./adr/0001-bootstrap-strategy.md).

## Current architectural direction

The repository is currently structured around a **plain Astro** foundation with the Phase 2 shell, Phase 3 content engine, and Phase 4 book home / Table of Contents implemented.

That choice is intentional for Phase 1. The current architecture prioritizes:

- clarity over feature richness
- maintainability over early convenience
- progressive complexity over premature abstraction
- open-source readiness over fast visual polish

At the moment, the project is a static Astro application with repository-quality tooling, locale-prefixed shell routes, Astro content collections, typed schemas, initial content seeds, metadata utilities for chapters and glossary entries, and a content-backed book home route that renders an automatically generated Table of Contents.

## Core system layers

The long-term architecture is organized around the following layers.

### 1. Presentation layer

This is the user-facing application built with Astro pages, layouts, and components.

This layer currently provides:

- the landing page
- the shared shell
- language and audience controls
- the book home and Table of Contents

In later phases, this layer is expected to provide:

- the chapter reader
- chapter-local navigation controls
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

In the current repository, this layer includes implemented utilities for content loading, chapter ordering, TOC grouping, future chapter-reader link generation, glossary listing, glossary lookup, locale routing, and audience preference handling. Later-phase reader-specific behavior still remains deferred.

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
- `src/components/`: UI and reader component area, including the current `BookTableOfContents` component
- `src/content/`: implemented content collections for chapters, glossary, and book config
- `src/layouts/`: future shared layout area
- `src/lib/`: reusable domain and utility logic, including content, TOC, glossary, locale-routing, and audience helpers
- `src/styles/`: future shared style area
- `docs/`: source-of-truth and support documentation

Current implementation status:

- `src/pages/index.astro`, `src/pages/[lang]/index.astro`, and `src/pages/[lang]/shell/index.astro` provide the current landing and shell entry routes
- `src/pages/[lang]/book/index.astro` provides the current book home route
- Astro content collections are registered in `src/content.config.ts`
- typed schemas exist for `chapters`, `glossary`, and `book-config`
- seed content exists for English chapters, English glossary entries, an English book config entry, and mirrored PT-BR examples for logical identity validation
- chapter metadata utilities support listing by language/book, stable ordering, and previous/next resolution
- TOC utilities support metadata-driven grouping, configured groups, and fallback ungrouped entries
- chapter route utilities generate future reader links from content slugs
- glossary metadata utilities support listing by language and lookup by logical `id`
- the book home renders a content-backed Table of Contents with empty states, orientation cues, and basic responsive behavior
- there is still no implemented reader route, MDX reader rendering, chapter sidebar, heading anchors, glossary interaction UI, or full localization layer

## Current boundaries

The current implementation includes:

- Astro bootstrap and repository-quality tooling
- locale-prefixed landing, shell, and book home routes
- audience preference persistence and shell controls
- typed Astro content collections for chapters, glossary, and book config
- initial content seeds in English plus mirrored PT-BR examples for shared logical IDs
- metadata utilities for chapter listing, ordering, adjacent navigation, TOC grouping, future reader link generation, and glossary lookup
- a content-backed book home / Table of Contents with empty states, orientation cues, and basic responsive behavior

The current implementation does **not** yet include:

- generated chapter reader routes
- MDX reader page rendering
- chapter-local sidebar UI or heading anchors
- previous/next chapter navigation in the reader
- glossary hover cards or reader-side glossary interactions
- full translation parity or complete localization behavior
- authentication, authorization, or backend infrastructure

This means the repository now reflects the first real content-driven presentation layer of the system, while the chapter reader and richer interaction features remain planned rather than implemented.

## Planned evolution

The intended implementation order remains incremental:

1. repository foundation — completed
2. base site structure and route shell — completed
3. content engine and schemas — completed
4. book home and Table of Contents generation — completed
5. chapter reader — next
6. rich content features, glossary behavior, and localization refinement — planned

The architecture should continue to follow these principles as the project grows:

- keep content as the source of navigation truth
- keep authoring workflows close to Markdown and MDX
- isolate reusable logic from page rendering when complexity grows
- avoid introducing framework layers or abstractions before they are justified
- keep repository documentation aligned with implementation reality
