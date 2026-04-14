# Milestone: `Phase 4 — Book home / Table of Contents`

## Goal

Generate the book home page automatically from the content model.

## Deliverables

- book home route
- automatic TOC
- chapter grouping
- correct links for each page

## Definition of Done

- the book page shows the real chapters from content
- the order matches the metadata
- links open the correct pages

## Phase boundary

This milestone includes the **book home route and generated TOC experience only**. It does **not** include the actual chapter reader, MDX rendering pages, current-chapter sidebar, heading anchors, deep links, or reader-level previous/next navigation. Those belong to Phase 5.

---

## Issues

### 47) `P4-47 [XS] Define Phase 4 TOC conventions`

**Objective:** lock the implementation conventions for the generated book home and TOC layer.
**Scope:** canonical book-home route shape, current-language behavior, grouping assumptions, label boundaries, and explicit non-goals.
**Depends on:** Phase 3 being complete.
**Done when:** there is a small implementation note or constants module defining:

- the book-home route pattern for the MVP
- the current-language TOC behavior
- the grouping rule used in Phase 4
- which labels are owned by Phase 4
- which behaviors are intentionally deferred to Phase 5+.

### 48) `P4-48 [S] Create the book home route scaffold`

**Objective:** create the first route dedicated to the book entry page.
**Scope:** route file, layout integration, and minimal page shell for the book home.
**Depends on:** P4-47.
**Done when:** the project has a working book-home route that renders through the shared site shell and is ready to receive generated TOC data.

### 49) `P4-49 [S] Add book-home data loading for the active language`

**Objective:** connect the new route to real content instead of placeholders.
**Scope:** loading chapter metadata for the current language and current book using Phase 3 utilities.
**Depends on:** P4-48.
**Done when:** the book-home route reads real chapter entries for the active locale from the content layer.

### 50) `P4-50 [S] Add ordered TOC data generation`

**Objective:** ensure the TOC uses metadata-driven ordering rather than hand-maintained lists.
**Scope:** ordered chapter data preparation for the book home page.
**Depends on:** P4-49.
**Done when:** the book-home route consumes chapter data in the same canonical order defined by content metadata.

### 51) `P4-51 [S] Add chapter grouping utilities for the TOC`

**Objective:** turn the flat ordered chapter list into the grouped structure needed by the Table of Contents.
**Scope:** grouping logic derived from book/chapter metadata and safe behavior for incomplete future data.
**Depends on:** P4-50.
**Done when:** the app can transform ordered chapter entries into grouped TOC data suitable for rendering.

### 52) `P4-52 [S] Render the automatic TOC view`

**Objective:** display the grouped chapter structure as the first real book index page.
**Scope:** TOC rendering component or page section, grouped entries, and readable hierarchy.
**Depends on:** P4-51.
**Done when:** the book home page renders the TOC from real content data rather than hardcoded entries.

### 53) `P4-53 [XS] Add correct link generation for TOC entries`

**Objective:** make each TOC entry point to the correct future reading destination.
**Scope:** route generation from content metadata for each rendered entry.
**Depends on:** P4-52.
**Done when:** each TOC item renders a correct link for its corresponding page, even if the Phase 5 reader is not complete yet.

### 54) `P4-54 [XS] Add empty-state and missing-data safeguards for the book home`

**Objective:** keep the book-home page safe and understandable while content is still sparse.
**Scope:** no-chapters state, incomplete-group handling, and safe rendering for partial content.
**Depends on:** P4-49, P4-51.
**Done when:** the TOC page fails gracefully when content is missing or still incomplete, instead of breaking or rendering misleading structure.

### 55) `P4-55 [XS] Add book-home labels and navigation copy refinement`

**Objective:** refine the visible wording around the generated TOC without slipping into full localization work.
**Scope:** page labels, section headings, and simple navigation copy for the current shell.
**Depends on:** P4-52.
**Done when:** the book-home page uses intentional labels that fit the current shell and future reader direction, while remaining within Phase 4 scope.

### 56) `P4-56 [XS] Add orientation cues on the book home page`

**Objective:** make the TOC feel like a real book-level index rather than a plain list.
**Scope:** clear book context, hierarchy cues, and navigation signals that support reader orientation.
**Depends on:** P4-52, P4-55.
**Done when:** the page makes it visually clear that the user is at the book entry / Table of Contents level and not inside a chapter reader yet.

### 57) `P4-57 [XS] Add basic responsive behavior for the TOC layout`

**Objective:** ensure the generated TOC remains usable on smaller screens.
**Scope:** stacked layout behavior, readable hierarchy, and non-broken link interaction on narrow widths.
**Depends on:** P4-52.
**Done when:** the book home / TOC remains readable and navigable on mobile widths without introducing reader-specific mobile patterns from later phases.

### 58) `P4-58 [XS] Add Phase 4 verification pass for real-content TOC behavior`

**Objective:** close the milestone with a real verification of the approved Definition of Done.
**Scope:** content-backed rendering, ordering verification, grouping verification, and link correctness checks.
**Depends on:** P4-53 through P4-57.
**Done when:** the book home page shows real chapters from content, respects metadata order, generates correct links, and stays within Phase 4 boundaries with no Phase 5 leakage.

---

## Recommended execution order

`P4-47 → P4-48 → P4-49 → P4-50 → P4-51 → P4-52 → P4-53 → P4-54 → P4-55 → P4-56 → P4-57 → P4-58`

This follows the approved roadmap and blueprint sequence closely: route first, then real chapter listing for the active language, then grouping, then TOC rendering, then labels/navigation refinement and verification.

---

## Suggested labels

- `phase:4`
- `type:feat`
- `type:content`
- `type:routing`
- `type:toc`
- `type:ux`
- `priority:p0`
- `size:xs`
- `size:s`

---

## Exit criteria for closing the milestone

Phase 4 should be considered complete only when all of the following are true:

- the project has a working book-home route
- the page renders real chapter entries from content
- the TOC is generated automatically rather than hand-maintained
- chapter grouping works
- the order follows metadata
- links are generated correctly for each TOC entry
- the page supports basic reader orientation as a book-level index
- the milestone still contains **no Phase 5 leakage** such as chapter reader pages, MDX rendering, heading extraction, or reader-local navigation.

One subtle design decision is worth keeping visible from the start: Phase 4 should make the TOC feel like a **book-level index**, not just a technical list. The shell/reading guidelines clearly push toward orientation, hierarchy, and editorial structure, so I reflected that in **P4-55** and **P4-56** without letting the milestone drift into Phase 9 polish work.
