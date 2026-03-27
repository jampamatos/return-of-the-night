# Milestone: `Phase 3 — Content engine`

## Goal

Create the structure that turns content files into a navigable book.

## Deliverables

- content collections
- typed schemas
- first `chapters` collection
- first `glossary` collection
- book config
- metadata reading utilities
- book-order generation

## Definition of Done

- chapters are loaded from content
- glossary entries are loaded from content
- the app understands ordering, language, and logical identity of entries

## Phase boundary

This milestone includes the **typed content system and metadata utilities only**. It does **not** include the real Table of Contents page, book-home rendering, chapter reader pages, heading anchors, chapter sidebar UI, glossary hover cards, or full localization behavior. Those belong to later phases.

---

## Issues

### 32) `P3-32 [XS] Define Phase 3 content-engine conventions`

**Objective:** lock the implementation conventions that every Phase 3 issue depends on.
**Scope:** active locales, single-book assumption, collection names, directory expectations, shared identity rules, and intentionally deferred behavior.
**Depends on:** Phase 2 being complete.
**Done when:** there is a small implementation note or constants module defining:

- supported locales: `en`, `pt-BR`
- collection names: `chapters`, `glossary`, `book-config`
- single-book baseline for MVP
- shared logical `id` rule across languages
- explicit non-goals for Phase 3.

### 33) `P3-33 [S] Create the base content directory scaffold`

**Objective:** establish the filesystem shape expected by the content engine.
**Scope:** `src/content/chapters/en`, `src/content/chapters/pt-BR`, `src/content/glossary/en`, `src/content/glossary/pt-BR`, and `src/content/config`.
**Depends on:** P3-32.
**Done when:** the repo contains the approved content directories and they are ready to receive typed entries.

### 34) `P3-34 [S] Create and register collections in content.config.ts`

**Objective:** establish the central Astro Content Collections registration point.
**Scope:** `content.config.ts`, collection registration, schema exports/import structure.
**Depends on:** P3-32, P3-33.
**Done when:** the project has a working `content.config.ts` that registers the Phase 3 collections cleanly.

### 35) `P3-35 [S] Define the chapters collection schema`

**Objective:** make chapter content typed and validated.
**Scope:** chapter schema fields and validation rules for the first content model.
**Depends on:** P3-34.
**Done when:** the `chapters` collection validates the agreed metadata fields, including logical `id`, `lang`, `book`, `chapterNumber`, `chapterTitle`, `pageTitle`, `slug`, `order`, `summary`, `audience`, and `status`.

### 36) `P3-36 [S] Define the glossary collection schema`

**Objective:** make glossary entries typed and validated.
**Scope:** glossary schema fields and validation rules for the first glossary model.
**Depends on:** P3-34.
**Done when:** the `glossary` collection validates the agreed metadata fields, including logical `id`, `lang`, `term`, `type`, `aliases`, and `summary`.

### 37) `P3-37 [S] Define the book-config collection schema`

**Objective:** create the typed configuration layer for book-level structure.
**Scope:** book labels, navigation labels, chapter-group metadata, and other book-level config fields needed later by TOC and reader features.
**Depends on:** P3-34.
**Done when:** the `book-config` collection exists as a typed collection with a minimal but future-ready schema for one-book MVP use.

### 38) `P3-38 [XS] Seed the first English chapter entries`

**Objective:** prove that chapter content can be loaded from real content files.
**Scope:** a few English chapter files with valid metadata and minimal body content.
**Depends on:** P3-35.
**Done when:** the repo contains a small set of valid English `chapters` entries that pass schema validation.

### 39) `P3-39 [XS] Seed the first English glossary entries`

**Objective:** prove that glossary content can be loaded from real content files.
**Scope:** a few English glossary files with valid metadata and minimal summary content.
**Depends on:** P3-36.
**Done when:** the repo contains a small set of valid English `glossary` entries that pass schema validation.

### 40) `P3-40 [XS] Seed the first book-config entry`

**Objective:** prove that book-level configuration is content-driven too.
**Scope:** one initial book config entry for the MVP book.
**Depends on:** P3-37.
**Done when:** the repo contains one valid `book-config` entry that the content layer can read successfully.

### 41) `P3-41 [S] Add chapter listing utilities by language and book`

**Objective:** create the first reusable content metadata utilities.
**Scope:** utilities to load chapter entries, filter by locale, and scope by book.
**Depends on:** P3-35, P3-38, P3-40.
**Done when:** the app can programmatically list chapter entries for a given language and book, returning typed results from content.

### 42) `P3-42 [S] Add ordered chapter utilities`

**Objective:** teach the app the canonical reading order of chapter entries.
**Scope:** sort/order logic derived from metadata, with stable behavior for the MVP book.
**Depends on:** P3-41.
**Done when:** there is a utility that returns chapter entries in the correct content-driven order for a given language and book.

### 43) `P3-43 [S] Add previous/next chapter resolution utilities`

**Objective:** prepare the metadata backbone for later reader navigation.
**Scope:** previous/next lookup from the ordered chapter sequence.
**Depends on:** P3-42.
**Done when:** the app can compute the previous and next chapter entries for a given current entry without rendering any reader UI yet.

### 44) `P3-44 [S] Add glossary metadata utilities`

**Objective:** create the first reusable glossary lookup layer.
**Scope:** glossary listing by language, lookup by logical `id`, and minimal typed access patterns needed by later phases.
**Depends on:** P3-36, P3-39.
**Done when:** the app can load glossary entries from content and resolve them by language and logical identity.

### 45) `P3-45 [XS] Validate shared logical identity rules across localized content`

**Objective:** enforce the core multilingual architecture rule early, even before Phase 8.
**Scope:** mirrored logical IDs, file examples, and safe handling for entries that do not yet have translations.
**Depends on:** P3-35, P3-36, P3-38, P3-39.
**Done when:** the repo demonstrates and documents that equivalent localized entries share the same logical `id`, without requiring full translation parity yet.

### 46) `P3-46 [XS] Add a Phase 3 verification pass for content loading`

**Objective:** close the milestone with a real end-to-end metadata sanity check.
**Scope:** schema validation, typed loading, ordering checks, glossary loading checks, and explicit review of Phase 3 boundaries.
**Depends on:** P3-41 through P3-45.
**Done when:** chapter entries load from content, glossary entries load from content, ordering works, identity rules are clear, and no Phase 4 or Phase 5 UI work has leaked into the milestone.

---

## Recommended execution order

`P3-32 → P3-33 → P3-34 → P3-35 → P3-36 → P3-37 → P3-38 → P3-39 → P3-40 → P3-41 → P3-42 → P3-43 → P3-44 → P3-45 → P3-46`

This follows the approved Phase 3 sequence from the roadmap and blueprint: create the content configuration layer, define schemas, seed example entries, then build the metadata utilities that later phases will consume.

---

## Suggested labels

- `phase:3`
- `type:feat`
- `type:content`
- `type:schema`
- `type:i18n`
- `type:architecture`
- `priority:p0`
- `size:xs`
- `size:s`

---

## Exit criteria for closing the milestone

Phase 3 should be considered complete only when all of the following are true:

- the project has working typed content collections
- chapter entries load from content
- glossary entries load from content
- book config exists as content
- the app can list chapter entries by language and book
- the app can compute ordered chapters
- the app can compute previous/next chapter metadata
- localized content follows shared logical identity rules
- the milestone still contains **no Phase 4/5 leakage** such as TOC rendering, book-home UI, chapter pages, or MDX reader layout.

There’s one small architectural choice worth flagging early: whether `book-config` should be designed as a true collection from day one, or as a single structured config entry that only later grows into multiple book records. The blueprint clearly wants **book config as content** and wants the architecture future-ready for multiple books while still targeting one book first, so I kept that tension explicit inside **P3-37** rather than hiding it.

If you want, the next step can be **P3-32 already written as a GitHub issue**, ready to paste.
