# Return of the Night

Return of the Night is an open-source web platform for reading RPG rulebooks, setting books, campaign books, and compendiums through a content-first digital-book experience.

The repository has completed **Phase 3 — Content engine**. The current codebase is a plain Astro application with a shared site shell, locale-prefixed entry routes, typed content collections, initial chapter and glossary content, and metadata utilities for chapter ordering and glossary lookup. The next approved implementation step is **Phase 4 — Book home / Table of Contents**.

## Current status

- The project uses **plain Astro** rather than Starlight.
- The current application includes locale-prefixed entry routes for `en` and `pt-BR`.
- The route `/{lang}/` is now a styled landing page with localized copy, language selection, audience selection, and an entry CTA into the shell.
- The route `/{lang}/shell/` uses a shared base layout with header controls for language and player/GM audience switching.
- Locale switching preserves the current route suffix when possible instead of always returning to the site root.
- The audience preference persists in `localStorage` under the approved key `rotn:audience`.
- The root route `/` redirects to the current default locale, `en`.
- The project registers Astro content collections for `chapters`, `glossary`, and `book-config` in [`src/content.config.ts`](src/content.config.ts).
- Chapters, glossary entries, and book config are validated through typed Zod schemas under [`src/lib/content/schemas/`](src/lib/content/schemas/).
- The repository includes seeded English content plus localized PT-BR mirrors that demonstrate shared logical IDs across languages.
- Metadata utilities now support chapter listing by language and book, stable reading order, adjacent chapter resolution, glossary listing by language, and glossary lookup by logical ID.
- **Starlight is intentionally deferred** at this stage.
- The repository language is **English-first** for code and contributor-facing artifacts.

## Current routes

- `/` redirects to the current default locale route and currently resolves to `/en/`
- `/en/`
- `/pt-BR/`
- `/en/shell/`
- `/pt-BR/shell/`

## Content Engine Status

- `src/content/chapters/en/` contains seeded chapter content for the MVP book.
- `src/content/chapters/pt-BR/` contains a localized mirror that demonstrates the shared logical `id` rule.
- `src/content/glossary/en/` contains seeded glossary entries.
- `src/content/glossary/pt-BR/` contains a localized mirror that demonstrates the shared logical `id` rule.
- `src/content/config/` contains the first book-level config entry for the MVP book.
- `src/lib/content/chapters.ts` provides chapter listing, ordering, and adjacent-entry utilities.
- `src/lib/glossary/entries.ts` provides glossary listing and lookup utilities.

The app still does not render the real Table of Contents, chapter pages, sidebar navigation, or interactive glossary UI. Those remain part of later phases.

## Source of truth

The documents in [`docs/`](docs/) are the source of truth for this repository.

- [`docs/open_rulebook_platform_blueprint.md`](docs/open_rulebook_platform_blueprint.md): product vision, scope, architecture direction, and implementation roadmap for the open-source platform.
- [`docs/return-of-the-night-source-of-truth-v0.2.md`](docs/return-of-the-night-source-of-truth-v0.2.md): setting canon and project background for Return of the Night.
- [`docs/adr/0001-bootstrap-strategy.md`](docs/adr/0001-bootstrap-strategy.md): accepted Phase 1 decision to use plain Astro and defer Starlight.
- [`docs/architecture.md`](docs/architecture.md): repository architecture direction, system layers, and planned implementation order.
- [`docs/assets-policy.md`](docs/assets-policy.md): repository policy for asset provenance and licensing.
- [`docs/assets-register.md`](docs/assets-register.md): current register for asset source, author, license, and usage notes.
- [`docs/shell-reading-and-visual-guidelines.md`](docs/shell-reading-and-visual-guidelines.md): the current visual and reading-direction guide for the shell.
- [`docs/writing-guide.md`](docs/writing-guide.md): minimum writing standards for repository artifacts and documentation language policy.

If a local implementation detail conflicts with those documents, the documentation should be treated as authoritative until it is intentionally updated.

## Local development

### Requirements

- Node.js `>=22.13.0 <23`
- npm `>=11.7.0`

### Setup

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The development server starts the current Phase 2 shell. Useful routes to verify locally:

- `/`
- `/en/`
- `/pt-BR/`
- `/en/shell/`
- `/pt-BR/shell/`

## Available scripts

| Script                 | Purpose                                                                     |
| ---------------------- | --------------------------------------------------------------------------- |
| `npm run dev`          | Start the local Astro development server.                                   |
| `npm run build`        | Create a production build in `dist/`.                                       |
| `npm run preview`      | Preview the production build locally.                                       |
| `npm run typecheck`    | Run Astro and TypeScript project checks.                                    |
| `npm run lint`         | Run ESLint across the repository.                                           |
| `npm run format`       | Format repository files with Prettier.                                      |
| `npm run format:check` | Verify that files match the configured Prettier style.                      |
| `npm run check`        | Run the aggregate quality checks: format check, lint, typecheck, and build. |

## Current boundaries

The current implementation intentionally stops at the end of Phase 3. The repository does **not** yet include:

- the real book home / Table of Contents page
- generated chapter routes or reader page UI
- heading anchors or chapter-local sidebar navigation
- glossary hover cards or glossary-linked reader interactions
- full translation parity across localized content
- localization-aware book rendering beyond the current shared shell routes
- reader layouts beyond the current landing page and shell

## Project direction

The long-term direction is to build a maintainable RPG digital-book platform with:

- a navigable reading experience
- chapter-aware navigation
- glossary interactions
- audience-conditioned content for players and GMs
- localization support, starting with English and PT-BR
- a writing workflow that stays close to Markdown and MDX

The repository has finished its foundation, base shell, and content engine phases. The next implementation milestone is to turn the Phase 3 metadata layer into the real book home and Table of Contents experience.

## Licensing

Unless otherwise noted, the software code in this repository is licensed under the [MIT License](LICENSE).

Unless otherwise noted, the original textual and documentation content in this repository is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Repository-tracked assets are not covered by a single default asset license. Each asset must have explicit provenance and licensing information recorded in:

- [`docs/assets-policy.md`](docs/assets-policy.md)
- [`docs/assets-register.md`](docs/assets-register.md)

If a specific file, directory, or asset declares different licensing terms, those terms take precedence for that material.

## Community

- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md): expected behavior and enforcement standards for project spaces
- [SECURITY.md](SECURITY.md): how to report security issues responsibly
- [SUPPORT.md](SUPPORT.md): where to ask for help and when to open a public issue
- [ROADMAP.md](ROADMAP.md): summary of the approved project phases
- [CHANGELOG.md](CHANGELOG.md): notable repository changes over time
