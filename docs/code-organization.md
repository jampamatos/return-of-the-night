# Code Organization

## Purpose

This document defines the repository conventions for keeping the codebase readable, reviewable, and approachable for future contributors.

The project should remain content-first and contributor-friendly as it grows. That means new behavior should not accumulate inside large route files or global stylesheets when it has a clearer home.

## Core Principles

- Keep route files focused on routing, parameter handling, data loading, and high-level composition.
- Keep reusable transformations in `src/lib/` as typed, framework-light functions.
- Keep UI markup in components under `src/components/`.
- Keep component-specific styles close to the component that owns them.
- Keep global CSS limited to tokens, reset/base styles, shared shell primitives, and truly global behavior.
- Prefer small, named modules over broad utility files with mixed responsibilities.
- Avoid mixing behavior-preserving refactors with unrelated product changes.

## Route Files

Astro page files in `src/pages/` should act as orchestration boundaries.

They may:

- read route parameters
- load content or config entries
- select localized copy
- assemble page-level props
- compose layouts and components

They should avoid:

- large inline UI sections
- component-specific CSS
- non-trivial data transformation logic
- repeated localized copy objects when the copy belongs to a reusable product area

If a route file grows past roughly 200 lines, review whether it is still mostly orchestration. If it grows past roughly 300 lines, it should usually be split before more behavior is added.

## Components

Components should own user-facing markup and local presentation.

Use components when:

- a piece of UI has a clear name in the product
- markup repeats or is likely to evolve independently
- a route file is becoming hard to scan
- local CSS belongs to a specific UI surface

Prefer component names that describe product intent, such as `ReaderSidebar`, `ReaderHeader`, or `ReaderChapterNavigation`, instead of names that only describe layout mechanics.

## Domain Logic

Reusable non-rendering logic belongs in `src/lib/`.

The current domain areas are:

- `src/lib/content/`: content collections, chapter ordering, TOC grouping, and content-derived navigation
- `src/lib/reader/`: reader-specific copy, heading normalization, sidebar data, adjacent-reader links, and reader types
- `src/lib/glossary/`: glossary listing and lookup
- `src/lib/audience/`: reading-mode persistence and client-side behavior

Functions in `src/lib/` should be typed, deterministic where practical, and easy to test or inspect without reading Astro markup.

## Styles

Use `src/styles/global.css` for shared tokens, page-level primitives, and behavior that truly applies across the app.

Use component `<style>` blocks for component-owned layout and interaction states. This keeps contributor changes local and reduces the chance that a small UI change silently affects unrelated pages.

Large feature-specific stylesheets are acceptable when they belong to a page-level experience, but they should still be reviewed for possible component extraction as the UI stabilizes.

## Refactoring Policy

Behavior-preserving refactors should:

- keep route URLs and generated content stable
- keep public behavior unchanged unless the change is explicitly documented
- move one responsibility at a time
- include documentation updates when they introduce or clarify a convention
- run `npm run check`

When a feature requires a file to become substantially larger, first check whether a small organization pass would make the feature easier to review.
