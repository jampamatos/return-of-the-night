# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project aims to follow [Semantic Versioning](https://semver.org/) once versioned releases become relevant.

## [Unreleased]

### Changed

- Separated the book cover from the project Home: localized root routes now show the cover, `/{lang}/home/` is the project hub, and the Table of Contents remains at `/{lang}/book/`.
- Added a project-Home book CTA that resumes the last locally viewed chapter when available and otherwise opens the Table of Contents.
- Added explicit project-Home placeholders for public news, community discussion/comments, contribution, and future voluntary support.
- Reframed the Table of Contents and reader as an editorial book surface: compact chapter lists, quieter reading headers, chapter position, a narrower reading measure, and a minimal reading outline.
- Added a responsive notebook layout with a denser scrolling header and a centered, narrower Table of Contents measure.
- Added an accessible interactive glossary with inline MDX references, hover/focus cards, Escape-to-close behavior, localized glossary indexes, and unresolved-reference validation.
- Localized chapter switching now resolves the target chapter by shared logical ID, with a localized Table-of-Contents fallback state when no counterpart is available.
- Expanded bilingual content validation to cover glossary types and matching inline glossary references across translated chapters.

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
- Chapter-reader link generation from chapter slugs.
- Empty states and missing-data safeguards for sparse book content.
- Book orientation cues and compact TOC hierarchy.
- Basic responsive behavior for the Table of Contents layout.
- Generated chapter reader route at `/{lang}/book/{slug}/`.
- Static chapter reader paths generated from content metadata.
- Chapter MDX rendering inside the shared shell.
- Chapter-level orientation, return-to-TOC navigation, and reader metadata.
- Current-chapter sidebar navigation generated from chapter headings.
- Previous and next chapter links computed from content metadata.
- Stable heading anchors and working section deep links.
- Responsive fallback behavior for chapter-local navigation.
- Sparse-heading safeguards for chapters with minimal structure.
- Code organization guide for routes, components, domain logic, and styles.
- Semantic figure rendering with Markdown-authored captions.
- Styled, responsive Markdown table rendering.
- Directive-authored responsive columns, semantic callouts, and audience-filtered reader blocks.
- Complete PT-BR-first bilingual placeholder book structure with ten aligned chapters, localized book configuration, and aligned glossary entries.
- Content validation for the complete chapter map and localized book-config group membership.

### Changed

- Updated the project status to reflect the implemented chapter reader.
- Updated the next implementation focus to rich content features.
- Aligned repository documentation with the implemented reader scope and deferred rich content, glossary, and localization work.
- Refactored the chapter reader route into smaller reader components and typed reader utilities.
- Updated project status and roadmap documentation to reflect the completed Phase 6 rich-content feature set.
