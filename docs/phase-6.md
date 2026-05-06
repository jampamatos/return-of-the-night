# Milestone: `Phase 6 — Rich content features`

## Goal

Add the features that make the reader more powerful and closer to the intended vision.

## Deliverables

- images with captions
- styled tables
- side-by-side layout
- callouts
- audience-conditional blocks

## Definition of Done

- authors can use these features without excessively complex syntax
- source files remain readable
- rendering stays consistent

## Phase boundary

This milestone includes the **rich-content authoring and rendering layer only**. It does **not** include Phase 7 glossary hover cards or inline glossary-term interactions, Phase 8 localization fallback behavior, or Phase 9 broad UX/visual refinement. It should build on the current reader and shell without expanding into those later roadmap areas.

---

## Issues

### 76) `P6-76 [XS] Define Phase 6 rich-content conventions`

**Objective:** lock the authoring and implementation conventions for rich content before feature work begins.
**Scope:** supported block types, Markdown-first expectations, reader-scope boundaries, and explicit non-goals.
**Depends on:** the current maintenance checkpoint being complete.
**Done when:** there is a small implementation note or constants module defining:

- the supported Phase 6 block types
- the rule that authoring should stay close to Markdown/MDX
- the rule that audience blocks are a reading preference, not security
- the explicit Phase 6 / Phase 7 / Phase 8 boundary.

### 77) `P6-77 [S] Decide the Phase 6 extension strategy for rich content`

**Objective:** choose how rich content features should be implemented without overcomplicating authoring.
**Scope:** plugin vs component vs hybrid strategy for figures, tables, columns, callouts, and audience blocks.
**Depends on:** P6-76.
**Done when:** the project has an explicit technical decision for whether each Phase 6 feature is implemented through parsing, components, or a hybrid approach, with the simplest viable path chosen.

### 78) `P6-78 [S] Add the shared MDX integration surface for rich content features`

**Objective:** create the wiring layer that Phase 6 blocks will plug into.
**Scope:** MDX integration points, shared content-component registration, and the minimum reusable rich-content entry surface.
**Depends on:** P6-77.
**Done when:** the repository has a clear and reusable place to register or resolve rich-content rendering behavior for chapter content.

### 79) `P6-79 [S] Implement author-facing figure and caption conventions`

**Objective:** support image-plus-caption authoring in a way that stays pleasant for writers.
**Scope:** the approved image/caption convention and the parser or rendering logic needed to recognize it.
**Depends on:** P6-78.
**Done when:** chapter authors can write image-plus-caption content using the approved near-Markdown convention and the system recognizes it consistently.

### 80) `P6-80 [S] Render semantic figure-with-caption blocks in the reader`

**Objective:** turn recognized image/caption content into a proper reader element.
**Scope:** semantic figure rendering, caption rendering, and reader-safe layout behavior.
**Depends on:** P6-79.
**Done when:** supported image/caption content renders as a real figure with caption in the chapter reader, not as a loose image plus plain paragraph.

### 81) `P6-81 [XS] Add Phase 6 image asset safeguards and sample provenance handling`

**Objective:** keep image support aligned with the repo’s open-source asset policy.
**Scope:** sample image usage for Phase 6 testing and asset provenance expectations for any repository-tracked images used in examples.
**Depends on:** P6-79.
**Done when:** any sample image assets used for Phase 6 are compatible with the repository’s asset-origin and license policy, and contributors have a clear baseline for adding future images safely.

### 82) `P6-82 [S] Implement styled table rendering for chapter content`

**Objective:** make tables feel like part of the reader instead of raw browser defaults.
**Scope:** reader table styling, semantic table rendering, and consistency with the current chapter page layout.
**Depends on:** P6-78.
**Done when:** tables inside chapter content render with intentional styling while preserving proper table semantics.

### 83) `P6-83 [XS] Add responsive and overflow-safe table behavior`

**Objective:** keep styled tables usable on narrower screens and in constrained layouts.
**Scope:** overflow handling, readable containment, and non-broken table interaction inside the reader.
**Depends on:** P6-82.
**Done when:** chapter tables remain readable and usable when they exceed the available reading width.

### 84) `P6-84 [S] Implement author-facing columns block conventions`

**Objective:** support side-by-side composition without forcing authors into heavy JSX authoring.
**Scope:** the approved `:::columns` / `:::column` convention and the parsing or rendering behavior needed to support it.
**Depends on:** P6-78.
**Done when:** authors can write supported side-by-side content using the approved block convention and the system recognizes it reliably.

### 85) `P6-85 [S] Render side-by-side layout blocks in the reader`

**Objective:** display column content as a real editorial layout inside chapter pages.
**Scope:** two-column or equivalent side-by-side rendering behavior for supported content blocks.
**Depends on:** P6-84.
**Done when:** recognized columns content renders as a side-by-side layout within the reader instead of a stacked fallback by default.

### 86) `P6-86 [XS] Add responsive fallback behavior for columns`

**Objective:** keep side-by-side content usable on smaller screens.
**Scope:** mobile and narrow-width fallback behavior for column-based layouts.
**Depends on:** P6-85.
**Done when:** side-by-side layouts degrade gracefully on smaller screens without breaking reading flow.

### 87) `P6-87 [S] Implement author-facing callout conventions`

**Objective:** support callout blocks while keeping syntax easy to remember.
**Scope:** the approved callout block syntax and minimal supported variants for Phase 6.
**Depends on:** P6-78.
**Done when:** authors can write callouts using the approved block convention and the system recognizes them consistently.

### 88) `P6-88 [S] Render semantic callout blocks in the reader`

**Objective:** make callouts visually and structurally distinct from ordinary paragraph flow.
**Scope:** callout component rendering, spacing, hierarchy, and reader-safe styling.
**Depends on:** P6-87.
**Done when:** supported callouts render as distinct reader elements with consistent semantics and presentation.

### 89) `P6-89 [S] Implement author-facing audience block conventions`

**Objective:** support player/GM-scoped content blocks as part of the content authoring system.
**Scope:** the approved audience block syntax and target rules for `player` and `gm`.
**Depends on:** P6-78.
**Done when:** authors can mark content blocks for audience-specific rendering using the approved convention.

### 90) `P6-90 [S] Render audience-conditional blocks from the existing reading-mode preference`

**Objective:** connect audience-authored blocks to the site’s current player/GM reading mode.
**Scope:** conditional rendering behavior using the existing audience preference model, without presenting it as security.
**Depends on:** P6-89.
**Done when:** player/GM-scoped blocks render according to the active audience preference in the reader, and the implementation clearly preserves the “reading preference, not security” rule.

### 91) `P6-91 [XS] Add real-content sample coverage for all Phase 6 block types`

**Objective:** validate the phase using actual chapter content rather than only synthetic isolated tests.
**Scope:** sample chapter content exercising figures, tables, columns, callouts, and audience blocks.
**Depends on:** P6-80, P6-82, P6-85, P6-88, P6-90.
**Done when:** the repository contains real chapter examples that exercise every Phase 6 block type in the reader.

### 92) `P6-92 [XS] Add Phase 6 verification pass for authoring and rendering behavior`

**Objective:** close the milestone against the actual roadmap Definition of Done.
**Scope:** authoring readability, rendering consistency, responsive safeguards, and strict Phase 6 boundary checks.
**Depends on:** P6-91.
**Done when:** all supported Phase 6 block types can be authored without excessive syntax, chapter sources remain readable, rendering is consistent in the reader, and no Phase 7/8/9 behavior has leaked into the milestone.

---

## Recommended execution order

`P6-76 → P6-77 → P6-78 → P6-79 → P6-80 → P6-81 → P6-82 → P6-83 → P6-84 → P6-85 → P6-86 → P6-87 → P6-88 → P6-89 → P6-90 → P6-91 → P6-92`

This ordering follows the current blueprint closely: define conventions first, choose the simplest implementation strategy, add the shared MDX integration surface, then implement each rich-content block type one by one, connect audience blocks to the existing reading mode, and finally verify everything with real content.

---

## Suggested labels

- `phase:6`
- `type:feat`
- `type:content`
- `type:mdx`
- `type:reader`
- `type:ux`
- `type:a11y`
- `priority:p0`
- `size:xs`
- `size:s`

---

## Exit criteria for closing the milestone

Phase 6 should be considered complete only when all of the following are true:

- authors can use image/caption, table, columns, callout, and audience-block features without heavy or cryptic syntax
- the rich-content syntax remains readable in source files
- figures render semantically with captions
- tables are intentionally styled and remain usable in constrained layouts
- side-by-side layouts render properly and degrade gracefully on smaller screens
- callouts render as distinct reader elements
- audience-conditional blocks render from the existing reading-mode preference
- real chapter content exercises all supported Phase 6 features
- the milestone still contains **no Phase 7+ leakage** such as glossary hover cards, inline glossary syntax work, localization fallback logic, or broad visual-polish work.

One repo-specific point matters a lot here: because the reader is already complete, Phase 6 should act like a **content-expression layer on top of the existing reader**, not a restart of reader architecture. The current architecture already has the shell, TOC, chapter routes, MDX rendering, sidebar, and deep links in place, so this milestone should extend that system rather than blur back into Phase 5 work.
