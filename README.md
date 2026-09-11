# Return of the Night

Return of the Night is an open-source web platform for reading RPG rulebooks, setting books, campaign books, and compendiums through a content-first digital-book experience.

The current codebase is a plain Astro application with a cover-first entry, a localized project home, typed content collections, a complete bilingual placeholder chapter and glossary corpus, metadata utilities for chapter ordering and glossary lookup, a content-backed Table of Contents, and generated chapter reader pages with MDX rendering, current-chapter navigation, previous/next links, heading anchors, section deep links, and a shared rich-content surface for figures, tables, columns, callouts, and audience-filtered blocks.

## Current status

- The project uses **plain Astro** rather than Starlight.
- The current application includes locale-prefixed entry routes for `en` and `pt-BR`.
- The route `/{lang}/` is the visual cover: localized language and audience choices lead into the project.
- The route `/{lang}/home/` is the project Home. It has placeholders for the public project explanation, news, discussion/comments, contribution, and future support; its book CTA resumes the last local chapter when possible, otherwise it opens the Table of Contents.
- Chapter locale switching resolves the equivalent localized chapter by its shared logical ID, so each locale can use its own natural slug. When a counterpart is missing, it opens a localized Table-of-Contents fallback state rather than a broken route.
- The audience preference persists in `localStorage` under the approved key `rotn:audience`.
- Dark and light reading themes persist locally across the site. The Paper theme also persists, but is available only on the Table of Contents, chapter reader, and glossary.
- The root route `/` redirects to the current default locale, `en`.
- The project registers Astro content collections for `chapters`, `glossary`, and `book-config` in [`src/content.config.ts`](src/content.config.ts).
- Chapters, glossary entries, and book config are validated through typed Zod schemas under [`src/lib/content/schemas/`](src/lib/content/schemas/).
- The repository includes a complete bilingual placeholder book map: every planned core chapter and glossary entry has aligned PT-BR and English content, stable logical IDs, localized slugs, and generated reader routes.
- Metadata utilities now support chapter listing by language and book, stable reading order, adjacent chapter resolution, glossary listing by language, and glossary lookup by logical ID.
- The route `/{lang}/book/` renders the current book home and Table of Contents from real content metadata.
- The Table of Contents supports metadata-driven ordering, book-config grouping, fallback grouping for sparse localized content, chapter-reader links, empty states, orientation cues, and basic responsive behavior.
- The route `/{lang}/book/{slug}/` renders generated chapter reader pages from content entries.
- Chapter reader pages support plain MDX content, current-chapter sidebar navigation, previous/next chapter navigation, stable heading anchors, working section links, sparse-heading safeguards, responsive fallback behavior, persistent themes, keyboard-dismissible mobile navigation, back-to-top behavior, semantic figures with captions, styled responsive Markdown tables, directive-authored columns and callouts, and audience-filtered blocks.
- **Starlight is intentionally deferred** at this stage.
- The repository is **English-first** for code and contributor-facing artifacts; book prose is authored in PT-BR and translated to English in the same change.

## Current routes

- `/` redirects to the current default locale route and currently resolves to `/en/`
- `/en/` (cover)
- `/en/home/` (project Home)
- `/pt-BR/`
- `/en/book/`
- `/pt-BR/book/`
- `/en/glossary/`
- `/pt-BR/glossary/`
- `/en/book/getting-started/reading-the-book/`
- `/pt-BR/book/comecando/como-ler-o-livro/`

## Content and Reader Status

- `src/content/chapters/en/` and `src/content/chapters/pt-BR/` contain aligned placeholder chapters for the MVP book.
- `src/content/glossary/en/` and `src/content/glossary/pt-BR/` contain aligned placeholder glossary entries.
- `src/content/config/` contains aligned English and PT-BR book-level configuration for the MVP book.
- `src/lib/content/chapters.ts` provides chapter listing, ordering, and adjacent-entry utilities.
- `src/lib/content/toc.ts` provides metadata-driven grouping for the Table of Contents.
- `src/lib/content/chapter-routes.ts` provides chapter-reader href generation from chapter slugs.
- `src/lib/glossary/entries.ts` provides glossary listing and lookup utilities.
- `src/components/reader/BookTableOfContents.astro` renders the current book home and Table of Contents experience.
- `src/components/reader/ReaderMdxContent.astro` centralizes the reader MDX component mapping used by chapter pages.
- `src/components/reader/ReaderHeading2.astro` and `src/components/reader/ReaderHeading3.astro` render linkable reader headings for MDX content.
- `src/components/reader/rich-content/ReaderFigure.astro` renders Markdown image-plus-caption pairs as semantic reader figures.
- `src/components/reader/rich-content/ReaderTable.astro` renders Markdown tables with reader-specific styling and overflow-safe behavior.
- `src/pages/[lang]/book/[...slug].astro` renders generated chapter reader pages.

The app now renders the real Table of Contents, chapter reader, localized glossary index, and every approved rich-content block: semantic figures with captions, styled Markdown tables, responsive columns, callouts, audience-filtered blocks, and accessible inline glossary terms. Use `:term[Localized label]{id="stable-term-id"}` in chapter MDX; the static build rejects unknown IDs. Content tests require aligned chapter IDs and structural metadata, glossary IDs and types, book-config group membership, and inline glossary references across EN and PT-BR.

## Source of truth

The documents in [`docs/`](docs/) are the source of truth for this repository.

- [`docs/open_rulebook_platform_blueprint.md`](docs/open_rulebook_platform_blueprint.md): product vision, scope, architecture direction, and implementation roadmap for the open-source platform.
- [`docs/return-of-the-night-source-of-truth-v0.2.md`](docs/return-of-the-night-source-of-truth-v0.2.md): setting canon and project background for Return of the Night.
- [`docs/adr/0001-bootstrap-strategy.md`](docs/adr/0001-bootstrap-strategy.md): accepted bootstrap decision to use plain Astro and defer Starlight.
- [`docs/adr/0002-rich-content-authoring-and-rendering-strategy.md`](docs/adr/0002-rich-content-authoring-and-rendering-strategy.md): accepted rich-content authoring and rendering strategy for reader pages.
- [`docs/architecture.md`](docs/architecture.md): repository architecture direction, system layers, and planned implementation order.
- [`docs/code-organization.md`](docs/code-organization.md): code organization conventions for routes, components, domain logic, and styles.
- [`docs/assets-policy.md`](docs/assets-policy.md): repository policy for asset provenance and licensing.
- [`docs/assets-register.md`](docs/assets-register.md): current register for asset source, author, license, and usage notes.
- [`docs/shell-reading-and-visual-guidelines.md`](docs/shell-reading-and-visual-guidelines.md): the current visual and reading-direction guide for the shell.
- [`docs/writing-guide.md`](docs/writing-guide.md): minimum writing standards for repository artifacts and documentation language policy.
- [`docs/open-source-and-spoiler-policy.md`](docs/open-source-and-spoiler-policy.md): open-source scope, spoiler-mode limitations, and the PT-BR-to-English authoring workflow.
- [`docs/placeholder-book-structure.md`](docs/placeholder-book-structure.md): the temporary bilingual chapter map and its validation rules.
- [`docs/interactive-glossary.md`](docs/interactive-glossary.md): inline term syntax, reader behavior, and glossary validation rules.
- [`docs/editorial-guide.md`](docs/editorial-guide.md): practical PT-BR-first chapter and glossary workflow, review checklist, and reusable templates.
- [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md): compatibility and third-party intellectual-property notices, including Cities Without Number.

If a local implementation detail conflicts with those documents, the documentation should be treated as authoritative until it is intentionally updated.

## Local development

### Requirements

- Node.js `>=22.19.0 <23`
- npm `>=11.7.0`

### Setup

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The development server starts the cover, project Home, content-backed Table of Contents, and generated reader pages. Useful routes to verify locally:

- `/`
- `/en/` (cover)
- `/en/home/` (project Home)
- `/pt-BR/`
- `/en/book/`
- `/pt-BR/book/`
- `/en/book/getting-started/reading-the-book/`
- `/en/book/getting-started/reading-the-book/#reader-feature-fixture`
- `/en/book/gm-toolkit/running-return-of-the-night/`
- `/pt-BR/book/comecando/como-ler-o-livro/`

## Available scripts

| Script                 | Purpose                                                                      |
| ---------------------- | ---------------------------------------------------------------------------- |
| `npm run dev`          | Start the local Astro development server.                                    |
| `npm run build`        | Create a production build in `dist/`.                                        |
| `npm run preview`      | Preview the production build locally.                                        |
| `npm run typecheck`    | Run Astro and TypeScript project checks.                                     |
| `npm run lint`         | Run ESLint across the repository.                                            |
| `npm run format`       | Format repository files with Prettier.                                       |
| `npm run format:check` | Verify that files match the configured Prettier style.                       |
| `npm run test`         | Run the unit and content-integrity tests.                                    |
| `npm run test:content` | Run only the chapter-source integrity tests.                                 |
| `npm run test:e2e`     | Build the site, then run Chromium browser and accessibility tests.           |
| `npm run test:all`     | Run the unit/content and browser/accessibility suites.                       |
| `npm run audit:deps`   | Audit production and development dependencies for high-severity issues.      |
| `npm run check`        | Run format check, lint, typecheck, production build, and unit/content tests. |

## Current boundaries

The current implementation intentionally stops before the final visual redesign. The repository does **not** yet include:

- a unified visual redesign of the shell, Table of Contents, and chapter layouts

## Project direction

The long-term direction is to build a maintainable RPG digital-book platform with:

- a navigable reading experience
- chapter-aware navigation
- audience-conditioned content for players and GMs
- localization support, starting with English and PT-BR
- a writing workflow that stays close to Markdown and MDX

The repository has a working foundation, base shell, content engine, complete bilingual placeholder book structure, Table of Contents, chapter reader, localized glossary index, semantic figure support, styled Markdown table support, directive-authored columns with responsive reader rendering, semantic reader callouts, audience-filtered reader blocks, and accessible contextual glossary definitions.

## Licensing

Unless otherwise noted, the software code in this repository is licensed under the [MIT License](LICENSE).

Unless otherwise noted, the original textual and documentation content in this repository is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Player/GM mode is a client-side spoiler-avoidance preference, not access control. See [`docs/open-source-and-spoiler-policy.md`](docs/open-source-and-spoiler-policy.md) before adding audience-marked content.

Cities Without Number compatibility and third-party-content limits are documented in [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).

Repository-tracked assets are not covered by a single default asset license. Each asset must have explicit provenance and licensing information recorded in:

- [`docs/assets-policy.md`](docs/assets-policy.md)
- [`docs/assets-register.md`](docs/assets-register.md)

If a specific file, directory, or asset declares different licensing terms, those terms take precedence for that material.

## Community

- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md): expected behavior and enforcement standards for project spaces
- [SECURITY.md](SECURITY.md): how to report security issues responsibly
- [SUPPORT.md](SUPPORT.md): where to ask for help and when to open a public issue
- [ROADMAP.md](ROADMAP.md): summary of the approved implementation roadmap
- [CHANGELOG.md](CHANGELOG.md): notable repository changes over time
