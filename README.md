# Return of the Night

Return of the Night is an open-source web platform for reading RPG rulebooks, setting books, campaign books, and compendiums through a content-first digital-book experience.

The repository has completed **Phase 2 — Base site structure**. The current codebase is a plain Astro application with a shared site shell, locale-prefixed entry routes, language and audience controls, and client-side audience persistence. The next approved implementation step is **Phase 3 — Content engine**.

## Current status

- The project uses **plain Astro** rather than Starlight.
- The current application includes locale-prefixed entry routes for `en` and `pt-BR`.
- The route `/{lang}/` is now a styled landing page with localized copy, language selection, audience selection, and an entry CTA into the shell.
- The route `/{lang}/shell/` uses a shared base layout with header controls for language and player/GM audience switching.
- Locale switching preserves the current route suffix when possible instead of always returning to the site root.
- The audience preference persists in `localStorage` under the approved key `rotn:audience`.
- The root route `/` redirects to the current default locale, `en`.
- The repository already includes the initial Phase 3 directory scaffold under `src/content/` plus placeholder utility areas under `src/lib/`, but the content engine itself is not implemented yet.
- **Starlight is intentionally deferred** at this stage.
- The repository language is **English-first** for code and contributor-facing artifacts.

## Current routes

- `/` redirects to the current default locale route and currently resolves to `/en/`
- `/en/`
- `/pt-BR/`
- `/en/shell/`
- `/pt-BR/shell/`

## Phase 3 scaffold already present

- `src/content/chapters/en/`
- `src/content/chapters/pt-BR/`
- `src/content/glossary/en/`
- `src/content/glossary/pt-BR/`
- `src/content/config/`
- placeholder utility areas in `src/lib/content/`, `src/lib/glossary/`, `src/lib/i18n/`, and `src/lib/reader/`

These directories are only the approved scaffold for the next milestone. The app does not yet register Astro content collections, validate schemas, or load chapters and glossary entries from content files.

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

The current implementation intentionally stops at the Phase 2 landing page and shared shell. The repository does **not** yet include:

- `content.config.ts` or registered Astro content collections
- typed content schemas or real chapter / glossary / book-config entries
- content loading, ordering, or previous/next metadata utilities
- book home / Table of Contents generation
- chapter routes or MDX rendering
- glossary parsing or interactive glossary behavior
- mirrored multilingual content by shared IDs
- reader layouts beyond the current landing page and shell

## Project direction

The long-term direction is to build a maintainable RPG digital-book platform with:

- a navigable reading experience
- chapter-aware navigation
- glossary interactions
- audience-conditioned content for players and GMs
- localization support, starting with English and PT-BR
- a writing workflow that stays close to Markdown and MDX

The repository has finished its foundation and base shell phases. The next implementation milestone is to turn the existing Phase 3 scaffold into real content collections, schemas, and metadata utilities.

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
