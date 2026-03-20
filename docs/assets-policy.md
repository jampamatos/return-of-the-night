# Asset Policy

This document defines the minimum asset provenance and licensing policy for the repository during Phase 1.

## Purpose

No image, icon, illustration, screenshot, diagram, audio file, video file, font, or other media asset should enter the repository without a clear origin and a clear redistribution status.

This policy exists to protect the project from:

- unknown or incompatible licensing
- missing attribution requirements
- accidental reuse of copyrighted material
- loss of provenance over time

## Scope

This policy applies to repository-tracked assets, especially files stored under `public/images/` and any future asset directories added to the project.

## Allowed asset sources

Assets may be added only when at least one of the following is true:

- the asset was created by a project maintainer or contributor
- the asset is in the public domain or released under a clearly compatible open license
- the asset comes from a third party whose license explicitly allows redistribution in a public repository
- the asset comes from a paid source whose license explicitly allows public redistribution and the project can document that right clearly

## Disallowed assets

Do not add assets when:

- the original source is unknown
- the license is missing, unclear, or unverifiable
- the asset was copied from a website, game, book, or marketplace without explicit redistribution rights
- attribution is required but the project cannot satisfy it clearly
- the asset can be used privately but cannot be redistributed through a public repository

## Required provenance data

Every repository-tracked asset must have an entry in [`docs/assets-register.md`](./assets-register.md) with at least:

- repository path
- short description
- original source URL or origin reference
- author or creator
- license
- whether the asset was modified
- notes about attribution or usage restrictions

## Repository rules

- Store public-facing image assets under `public/images/` unless there is a documented reason to use a different path.
- Add the provenance entry in the same change that introduces the asset.
- If an asset is modified, the register entry must state that clearly.
- If there is any doubt about redistribution rights, do not add the asset until the issue is resolved.

## Current register location

The authoritative provenance register for Phase 1 is [`docs/assets-register.md`](./assets-register.md).
