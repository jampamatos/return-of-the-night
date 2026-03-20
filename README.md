# Return of the Night

Return of the Night is an open-source web platform for reading RPG rulebooks, setting books, campaign books, and compendiums through a content-first digital-book experience.

The repository is currently in **Phase 1: repository foundation**. The current codebase is a minimal Astro bootstrap that establishes the base project, quality checks, and contributor-facing conventions before later phases add the real reader, content architecture, and UI systems.

## Current status

- The project is being bootstrapped with **plain Astro** for Phase 1.
- **Starlight is intentionally deferred** at this stage.
- The current application is a minimal placeholder shell used to validate the repository setup.
- The repository language is **English-first** for code and contributor-facing artifacts.

## Source of truth

The documents in [`docs/`](docs/) are the source of truth for this repository.

- [`docs/open_rulebook_platform_blueprint.md`](docs/open_rulebook_platform_blueprint.md): product vision, scope, architecture direction, and implementation roadmap for the open-source platform.
- [`docs/return-of-the-night-source-of-truth-v0.2.md`](docs/return-of-the-night-source-of-truth-v0.2.md): setting canon and project background for Return of the Night.
- [`docs/adr/0001-bootstrap-strategy.md`](docs/adr/0001-bootstrap-strategy.md): accepted Phase 1 decision to use plain Astro and defer Starlight.
- [`docs/assets-policy.md`](docs/assets-policy.md): repository policy for asset provenance and licensing.
- [`docs/assets-register.md`](docs/assets-register.md): current register for asset source, author, license, and usage notes.
- [`docs/phase-1.md`](docs/phase-1.md): the current repository-foundation milestone and its completion criteria.

If a local implementation detail conflicts with those documents, the documentation should be treated as authoritative until it is intentionally updated.

## Local development

### Requirements

- A recent Node.js version supported by Astro
- `npm`

### Setup

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The development server starts the current placeholder application so the repository bootstrap can be verified locally.

## Available scripts

| Script                 | Purpose                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `npm run dev`          | Start the local Astro development server.                                           |
| `npm run build`        | Create a production build in `dist/`.                                               |
| `npm run preview`      | Preview the production build locally.                                               |
| `npm run typecheck`    | Run Astro and TypeScript project checks.                                            |
| `npm run lint`         | Run ESLint across the repository.                                                   |
| `npm run format`       | Format repository files with Prettier.                                              |
| `npm run format:check` | Verify that files match the configured Prettier style.                              |
| `npm run check`        | Run the current aggregate quality checks: format check, lint, typecheck, and build. |

## Phase 1 scope

Phase 1 is focused on making the repository ready for sustainable open-source work. That includes:

- a stable Astro bootstrap
- strict TypeScript and type checking
- linting and formatting
- predictable local scripts
- documentation and governance foundations
- repository structure and baseline automation

The Phase 1 goal is not to deliver the full reader experience yet. Reader UX, content collections, glossary behavior, localization workflows, and richer book features come in later phases after the repository base is in good shape.

## Project direction

The long-term direction is to build a maintainable RPG digital-book platform with:

- a navigable reading experience
- chapter-aware navigation
- glossary interactions
- audience-conditioned content for players and GMs
- localization support, starting with English and PT-BR
- a writing workflow that stays close to Markdown and MDX

Phase 1 deliberately prioritizes foundation over feature breadth.

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
