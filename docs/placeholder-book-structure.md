# Current Book Content

## Purpose

This document describes the content contract while _Return of the Night_ is actively being written.

The final chapter count and sequence are deliberately not fixed. Book prose is written in PT-BR first and translated to English in the same change. The two localized entries use the same logical ID, order, audience, status, and intended document role; their visible labels and slugs are localized.

## Current chapter draft

| Number | Stable ID                          | EN page title | PT-BR page title | Audience | Role                                     |
| ------ | ---------------------------------- | ------------- | ---------------- | -------- | ---------------------------------------- |
| 0      | `the-world-under-the-infinite-day` | Three Lives   | Três Vidas       | All      | Introduces the world and themes of play. |

This is the current draft, not a promise about the eventual structure. New chapters can be added, reordered, or removed as the book develops, provided every supported locale stays structurally aligned.

## Validation coverage

The reader continues to support figures, tables, responsive columns, callouts, Player/GM blocks, heading navigation, and language-specific routing. Those features are not currently represented by a dedicated chapter fixture; authors should use them only when they improve the book content.

Content tests do not require a fixed number of chapters or predetermined IDs. They require non-empty EN and PT-BR editions with matching chapter IDs in order; then compare each pair's book, number, order, audience, and status. They also require matching localized book-config group IDs, group audiences, chapter membership, glossary IDs and types, and inline glossary references for matching chapters. Reader locale controls resolve translated chapters by shared logical ID; if a counterpart is absent, they route to a localized Table-of-Contents notice instead of a broken URL.

## Glossary status

The current glossary entries are provisional placeholders used to establish stable IDs and inline references while the setting is being written. They are not yet canonical definitions. Every entry still needs an EN/PT-BR counterpart with the same `id` and `type`; terms such as corporation and its in-world slang can be added when their canonical wording is ready.
