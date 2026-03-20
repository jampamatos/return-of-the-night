# Milestone: `Phase 2 — Base site structure`

## Goal

Create the navigable shell of the product before building the content engine.

## Deliverables

- Initial landing page
- Shared base layout
- Language-prefixed routing
- Language switcher
- Audience switcher
- Local persistence

## Definition of Done

- The user can enter the site
- The user can choose language
- The user can choose player/GM mode
- The choice persists through navigation and reloads

## Phase boundary

This milestone includes only the **site shell**. It does **not** include content collections, book config, automatic TOC generation, chapter routes, MDX reader pages, or full multilingual content parity. Those belong to later roadmap phases.

---

## Issues

### 1) `P2-20 [XS] Define Phase 2 shell conventions`

**Objective:** lock the conventions that the rest of Phase 2 depends on.
**Scope:** supported locales, default locale, audience values, storage key, and route shape.
**Depends on:** Phase 1 being complete.
**Done when:** there is a small implementation note or code-level constants covering:

- locales: `en`, `pt-BR`
- audience values: `player`, `gm`
- storage key: `rotn:audience`
- route pattern: `/{lang}/...`

### 2) `P2-21 [S] Add the shared base layout`

**Objective:** create the reusable shell used by all Phase 2 pages.
**Scope:** app frame, page slot, header area for switches, basic metadata hooks.
**Depends on:** P2-20.
**Done when:** both locale entry pages render through one shared layout instead of duplicating structure.

### 3) `P2-22 [XS] Add minimal shell styling and focus states`

**Objective:** make the base shell readable, usable, and not visually broken.
**Scope:** layout spacing, header alignment, button/select styling, visible keyboard focus.
**Depends on:** P2-21.
**Done when:** the shell looks coherent on desktop, remains usable on mobile widths, and interactive controls have visible focus states.

### 4) `P2-23 [S] Create language-prefixed route scaffolding`

**Objective:** establish the route structure for the site shell.
**Scope:** locale-prefixed entry routes for `en` and `pt-BR`.
**Depends on:** P2-20, P2-21.
**Done when:** `/en/` and `/pt-BR/` both render valid pages through the shared layout.

### 5) `P2-24 [XS] Add root entry behavior for unprefixed access`

**Objective:** make `/` behave predictably before the content engine exists.
**Scope:** redirect or handoff to the chosen default locale.
**Depends on:** P2-23.
**Done when:** entering `/` always leads the user into a locale-prefixed shell instead of leaving them on an orphan root page.

### 6) `P2-25 [S] Build the initial landing page shell`

**Objective:** create the first real entry page for the product.
**Scope:** concise project/book intro, clear CTA, space for language and audience selection.
**Depends on:** P2-21, P2-23.
**Done when:** each locale has a simple landing page that explains the project briefly and gives the user a clear next action.

### 7) `P2-26 [XS] Add minimal locale label sources for shell UI`

**Objective:** support English and PT-BR in the Phase 2 shell without building full localization yet.
**Scope:** shell labels only, such as landing copy, CTA text, and switcher labels.
**Depends on:** P2-20.
**Done when:** the Phase 2 shell can render its visible UI labels in both supported languages.

### 8) `P2-27 [S] Implement the language switcher`

**Objective:** allow users to switch between locale-prefixed shell routes.
**Scope:** switcher UI, current-locale awareness, route replacement/preservation where sensible.
**Depends on:** P2-23, P2-25, P2-26.
**Done when:** the user can switch between English and PT-BR from the shell UI and remain inside the locale-prefixed experience.

### 9) `P2-28 [S] Implement the audience preference store`

**Objective:** create the smallest valid client-side state layer for player/GM preference.
**Scope:** read, validate, write, and default behavior for audience preference.
**Depends on:** P2-20.
**Done when:** there is a minimal client-side utility/store that persists `player` or `gm` in `localStorage` using the approved key.

### 10) `P2-29 [S] Implement the audience switcher`

**Objective:** expose the audience preference in the UI.
**Scope:** player/GM toggle or segmented control, visual active state, layout integration.
**Depends on:** P2-25, P2-28.
**Done when:** the user can switch between player and GM modes from the UI and see the active selection reflected immediately.

### 11) `P2-30 [XS] Persist preferences across navigation and reload`

**Objective:** satisfy the actual Phase 2 behavior contract.
**Scope:** hydration-safe restore of audience preference, route-based persistence of language, and stable behavior after reload.
**Depends on:** P2-27, P2-28, P2-29.
**Done when:** audience mode restores after reload, active language survives navigation through prefixed routes, and the user experience is consistent on refresh.

### 12) `P2-31 [XS] Add Phase 2 accessibility and behavior verification pass`

**Objective:** close the milestone with a real check, not just “it seems to work.”
**Scope:** keyboard navigation, focus visibility, route checks, reload checks, invalid-storage fallback.
**Depends on:** P2-22 through P2-30.
**Done when:** the shell controls are keyboard-usable, focus is visible, invalid audience values fail safely, and the Phase 2 Definition of Done is manually verified.

---

## Recommended execution order

`P2-20 → P2-21 → P2-22 → P2-23 → P2-24 → P2-25 → P2-26 → P2-27 → P2-28 → P2-29 → P2-30 → P2-31`

This ordering follows the approved Phase 2 sequence from the blueprint—base layout, simple landing page, language-prefixed routing, language switcher, simple audience store, and localStorage connection—while splitting the work into smaller, implementation-friendly issues.

---

## Suggested labels

- `phase:2`
- `type:feat`
- `type:ux`
- `type:i18n`
- `type:state`
- `priority:p0`
- `size:xs`
- `size:s`

---

## Exit criteria for closing the milestone

Phase 2 should be considered complete only when all of the following are true:

- the site has a working locale-prefixed shell
- the landing page exists in both supported locales
- the language switcher works
- the audience switcher works
- the audience preference persists through reload
- language choice persists through navigation and reload behavior
- the milestone still contains **no Phase 3+ leakage** such as content collections, chapter routes, or real localization rollout.
