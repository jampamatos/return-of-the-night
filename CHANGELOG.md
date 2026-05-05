# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project aims to follow [Semantic Versioning](https://semver.org/) once versioned releases become relevant.

## [Unreleased]

### Added

- Repository bootstrap with Astro.
- Strict TypeScript setup and project type checks.
- Prettier and ESLint configuration.
- Standard local development and quality scripts.
- Initial repository structure scaffold.
- README, licensing, contribution guide, and community baseline docs.
- Issue templates and pull request template.
- Asset provenance policy and asset register.
- Locale-prefixed routes for English and PT-BR.
- Root redirect to the default locale.
- Shared base layout and localized shell routes.
- Language and reading-mode header controls.
- Audience preference persistence through `localStorage`.
- Typed Astro content collections for chapters, glossary entries, and book configuration.
- Zod schemas for chapter, glossary, and book-config metadata.
- Seeded English content and localized PT-BR mirror examples.
- Content utilities for chapter listing, ordering, adjacent chapter lookup, and glossary lookup.
- Book home route at `/{lang}/book/`.
- Content-backed Table of Contents rendering.
- Metadata-driven TOC ordering and grouping.
- Future chapter-reader link generation from chapter slugs.
- Empty states and missing-data safeguards for sparse book content.
- Book-home orientation cues and TOC overview metadata.
- Basic responsive behavior for the Table of Contents layout.

### Changed

- Updated the project status to reflect completion of Phase 4 — Book home / Table of Contents.
- Updated the next implementation milestone to Phase 5 — Chapter reader.
