# Architecture

## Purpose

This document explains the current architectural shape of the repository and the intended direction defined by the project blueprint.

Its goal is to make Phase 1 understandable without pretending that later-phase systems already exist.

For detailed product scope and long-term roadmap, see [`docs/open_rulebook_platform_blueprint.md`](./open_rulebook_platform_blueprint.md). For the Phase 1 bootstrap decision, see [`docs/adr/0001-bootstrap-strategy.md`](./adr/0001-bootstrap-strategy.md).

## Current architectural direction

The repository is currently structured around a **plain Astro** foundation.

That choice is intentional for Phase 1. The current architecture prioritizes:

- clarity over feature richness
- maintainability over early convenience
- progressive complexity over premature abstraction
- open-source readiness over fast visual polish

At the moment, the project is a minimal static Astro application with repository-quality tooling and an initial directory scaffold for the systems that will be implemented later.

## Core system layers

The long-term architecture is organized around the following layers.

### 1. Presentation layer

This is the user-facing application built with Astro pages, layouts, and components.

In later phases, this layer is expected to provide:

- the landing page
- the book home and Table of Contents
- the chapter reader
- navigation controls
- glossary interactions
- language and audience switching

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

In the current Phase 1 repository, these areas exist mostly as directory placeholders rather than implemented modules.

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

The current repository is intentionally scaffolded ahead of implementation so the later architecture has a place to grow into.

Important directories and files:

- `.github/`: issue templates and pull request template
- `public/`: public static assets, including the intended location for repository-tracked images
- `public/images/`: public-facing image asset location
- `src/pages/`: Astro route entry points
- `src/pages/[lang]/`: future language-prefixed route space
- `src/components/`: future UI and reader component area
- `src/content/`: future content collections and content config area
- `src/layouts/`: future shared layout area
- `src/lib/`: future reusable domain and utility logic
- `src/styles/`: future shared style area
- `docs/`: source-of-truth and support documentation

Current implementation status:

- `src/pages/index.astro` is the only real application page today
- most future architecture directories currently contain placeholder files only
- there is no implemented content collection, glossary system, audience system, or localized route system yet

## Phase 1 boundaries

Phase 1 establishes the foundation. It does **not** attempt to implement the full product architecture.

Phase 1 includes:

- Astro bootstrap
- TypeScript, linting, formatting, and checks
- repository structure
- documentation and governance baseline

Phase 1 does **not** include:

- the real landing page experience
- the content engine
- chapter rendering from content collections
- glossary parsing or interactions
- localization behavior beyond initial repository preparation
- audience switching behavior
- authentication or authorization
- backend infrastructure

This means the repository already reflects the intended shape of the system, but most architectural subsystems are still planned rather than implemented.

## Planned evolution

The intended implementation order is incremental:

1. finish repository foundation work
2. build the base site structure and route shell
3. implement the content engine and schemas
4. generate the book home and Table of Contents from content
5. implement the chapter reader
6. add rich content features, glossary behavior, and localization refinement

The architecture should continue to follow these principles as the project grows:

- keep content as the source of navigation truth
- keep authoring workflows close to Markdown and MDX
- isolate reusable logic from page rendering when complexity grows
- avoid introducing framework layers or abstractions before they are justified
- keep repository documentation aligned with implementation reality
