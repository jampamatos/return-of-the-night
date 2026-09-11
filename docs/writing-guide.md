# Writing Guide

## Purpose

This document defines the minimum writing standards for the repository.

Its goal is to keep project artifacts understandable, consistent, and maintainable as the project grows through the roadmap.

For product direction and long-term editorial goals, see [`docs/open_rulebook_platform_blueprint.md`](./open_rulebook_platform_blueprint.md). For current implementation status, see [`ROADMAP.md`](../ROADMAP.md) and [`docs/architecture.md`](./architecture.md).

## Repository language policy

The repository is **English-first** for contributor-facing artifacts.

That means the default language for the following materials should be English:

- documentation in the repository root and `docs/`
- issue and pull request content
- architecture notes and ADRs
- code comments
- commit messages
- labels, templates, and contributor workflows

Localized product content is still part of the project direction. The platform is expected to support at least English and PT-BR content, but repository governance and maintenance artifacts should stay in English unless there is a clear reason not to.

If a document needs to mention locale-specific examples, prefer keeping the surrounding explanation in English and treating localized text as content data or reference material.

## Book content workflow

Book prose follows a PT-BR-first, English-immediate workflow.

- Write each chapter and glossary entry in PT-BR first.
- Add the English translation in the same change.
- Keep the stable logical `id`, book, order, status, audience, and document role identical across the two locales.
- Localize prose, visible labels, summaries, terms, and slugs instead of copying the PT-BR text into the English entry.
- Do not treat a missing English version as an acceptable future translation backlog.

Player/GM mode supports spoiler etiquette only. Audience-marked content can be present in the public static output, so authors must not rely on it to protect genuinely private material.

## Localization contract

Every supported locale is a maintained edition of the same book, not a partial view of it. A chapter or glossary entry is considered complete only when its PT-BR source and English translation are both present.

- Reuse the same stable `id` for equivalent chapter and glossary entries; localize `slug`, title, summary, prose, labels, aliases, and visible terminology.
- Keep chapter `book`, `chapterNumber`, `order`, `audience`, and `status` identical across locales.
- Keep each localized book configuration aligned by group `id`, group order, and chapter membership.
- When a chapter uses `:term[Localized label]{id="stable-term-id"}`, use the same referenced glossary IDs in its translated counterpart, while translating the visible label.
- Run `npm run test` before opening a change. Content tests reject unmatched logical IDs and incompatible structural metadata.

The reader resolves locale changes by logical ID. If a translation has not yet been published, it intentionally returns to the destination language's Table of Contents with a visible localized notice; it must never generate a copied slug that leads to a 404 page. This fallback protects readers, but it does not make a missing translation acceptable for merged book content.

For licensing, open-source publication, spoiler behavior, and Cities Without Number compatibility, follow [Open-Source, Spoiler, and Language Policy](./open-source-and-spoiler-policy.md) and [Third-Party Notices](../THIRD_PARTY_NOTICES.md).

For the concrete chapter and glossary workflow, including reusable MDX templates and the ready-for-review checklist, follow the [Editorial Guide](./editorial-guide.md).

## Writing principles

All repository writing should follow these principles:

- **Prefer clarity over cleverness.** Write for contributors who are new to the project.
- **Describe the current reality honestly.** Do not document future systems as if they already exist.
- **Keep scope explicit.** State what a document covers and what it does not cover.
- **Favor maintainability.** Shorter, direct guidance is better than aspirational but vague prose.
- **Stay aligned with the source of truth.** If the blueprint, ADRs, or roadmap docs define a decision, repository writing should reflect that decision accurately.

When possible, explain decisions in a way that helps future contributors answer three questions quickly:

1. what exists now
2. why it exists
3. what is intentionally deferred

## Markdown and MDX expectations

Markdown should be the default authoring format for repository documentation.

Use plain Markdown when:

- the document is mostly explanatory
- no interactive behavior is needed
- the content should stay easy to edit in any text editor

MDX should only be introduced when it provides a clear benefit that plain Markdown cannot cover cleanly. Chapter content can use MDX, but repository documentation should stay plain Markdown unless there is a deliberate reason otherwise.

General expectations:

- use clear section headings
- keep paragraphs reasonably short
- prefer flat lists over deeply nested lists
- use links instead of repeating the same context across multiple docs
- avoid decorative formatting that does not improve comprehension

For future book and content authoring, the project direction remains close to Markdown and MDX rather than a highly custom authoring system.

## Documentation expectations

Repository documentation should stay synchronized with implementation and decisions.

When a change affects contributor workflow, project structure, or governance, update the relevant docs in the same pull request when practical.

In particular:

- update `README.md` when onboarding steps or the current project state changes
- update `CONTRIBUTING.md` when contribution workflow expectations change
- add or update an ADR when a repository-level technical decision is being made
- update support docs when reporting, conduct, or security guidance changes
- keep `ROADMAP.md` and `CHANGELOG.md` aligned with meaningful project changes

The documents in `docs/` are the source of truth for repository direction. If implementation temporarily diverges, either the implementation should be corrected or the documentation should be intentionally updated to reflect the new decision.

## Future editorial expansion

This guide is intentionally minimal.

Future documentation may extend it with more detailed rules for:

- content collection structure
- chapter metadata and ordering
- glossary entry authoring
- terminology consistency
- voice and tone for player-facing and GM-facing material

Until that broader editorial system exists, this document establishes the baseline: write in English for repository artifacts, prefer clear Markdown-first documentation, and keep every document grounded in the actual state of the project.
