# Contributing

## Purpose

This document explains how to contribute to the repository in its current Phase 1 state.

The project is still building its open-source foundation, so the contribution process is intentionally simple and explicit.

## Before you contribute

- Read the [README](README.md) first for project context, setup, scripts, and repository direction.
- Treat the documents in [`docs/`](docs/) as the source of truth when making repository decisions.
- Follow the repository's English-first policy for contributor-facing artifacts, code comments, commit messages, issues, pull requests, and new documentation unless a document explicitly requires something else.
- Review [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before participating in issues, pull requests, or review discussions.

## Local setup

Requirements:

- a Node.js version supported by the current Astro release used in this repository
- `npm`

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

## Branch and pull request workflow

Use a focused branch for each piece of work.

Recommended flow:

1. update your local `main` from the remote repository
2. create a new branch for a single issue or focused change
3. make the smallest coherent change that solves the problem
4. run the relevant project checks locally
5. open a pull request with a clear summary and testing notes

General expectations:

- keep pull requests focused and easy to review
- link the relevant issue when one exists
- update documentation when behavior, workflow, or contributor expectations change
- avoid mixing unrelated refactors into the same pull request

Use the repository pull request template when opening a PR.

## Quality checks before opening a PR

Run the relevant checks before opening a pull request.

Available commands:

- `npm run format`
- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run check`

In most cases, `npm run check` should be enough before submitting a PR because it runs the current aggregate validation flow.

If you cannot run one of the expected checks, say so clearly in the pull request.

## Commit message convention

This repository uses **Conventional Commits**.

Preferred format:

```text
<type>(<scope>): <short summary>
```

or

```text
<type>: <short summary>
```

Examples:

- `docs(readme): clarify local setup`
- `fix(router): handle missing locale`
- `chore: add support policy`

Common commit types:

- `feat`
- `fix`
- `docs`
- `style`
- `refactor`
- `test`
- `chore`
- `ci`
- `build`
- `perf`

Commit message expectations:

- use the imperative mood
- keep the summary concise
- avoid ending the summary with a period
- reference issues in the footer when applicable, for example `Closes #123`

A repository commit message template is available in [`.gitmessage.txt`](.gitmessage.txt).

## Scope and contribution style

At the current stage of the project:

- prefer clear, maintainable changes over clever ones
- prefer incremental progress over premature architecture work
- keep documentation aligned with implementation
- avoid introducing extra complexity before it is justified by the roadmap

If you are unsure whether a change fits the current phase, open an issue or draft pull request first so the scope can be discussed before deeper implementation work.
