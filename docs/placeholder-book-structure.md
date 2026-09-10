# Bilingual Placeholder Book Structure

## Purpose

This document defines the complete temporary content map used to validate the reader before final book prose is written.

Every chapter and glossary entry is a **placeholder**, not finished canon. Book prose is written in PT-BR first and translated to English in the same change. The two localized entries use the same logical ID, order, audience, status, and intended document role; their visible labels and slugs are localized.

## Chapter map

| Number | Stable ID                     | EN page title               | PT-BR page title                | Audience | Purpose                                          |
| ------ | ----------------------------- | --------------------------- | ------------------------------- | -------- | ------------------------------------------------ |
| 0      | `how-to-read-this-book`       | How to Read This Book       | Como Ler Este Livro             | All      | Reader and rich-content fixture.                 |
| 1      | `the-world-under-endless-day` | The World Under Endless Day | O Mundo sob o Dia Infinito      | All      | Public premise and setting vocabulary.           |
| 2      | `characters-at-the-threshold` | Characters at the Threshold | Personagens no Limiar           | Player   | Character-facing setting choices.                |
| 3      | `the-shape-of-play`           | The Shape of Play           | A Forma do Jogo                 | All      | Mission loop and play expectations.              |
| 4      | `life-under-control`          | Life Under Control          | Vida sob Controle               | All      | Original setting pressures.                      |
| 5      | `beyond-the-arcology`         | Beyond the Arcology         | Além da Arcologia               | All      | Exterior and public/GM context boundary.         |
| 6      | `resistance-and-factions`     | Resistance and Factions     | Resistência e Facções           | All      | Faction relationships.                           |
| 7      | `running-return-of-the-night` | Running Return of the Night | Conduzindo Return of the Night  | GM       | GM preparation.                                  |
| 8      | `campaign-frames`             | Campaign Frames             | Estruturas de Campanha          | GM       | Campaign starting points and escalation.         |
| 9      | `reference-and-workspace`     | Reference and Workspace     | Referência e Espaço de Trabalho | All      | Future quick reference and glossary destination. |

## Validation coverage

The `how-to-read-this-book` pair exercises figures, tables, responsive columns, note/warning/example callouts, Player/GM blocks, heading navigation, and language-specific routing. The other chapters provide the complete table-of-contents, grouping, reader-navigation, audience, and responsive-content surface.

The content tests require the exact chapter map in both locales and compare book, number, order, audience, and status. They also require matching localized book-config group IDs and chapter membership. Full missing-translation behavior and user-facing fallback states remain part of the later localization milestone.

## Placeholder glossary map

The temporary glossary includes aligned EN/PT-BR entries for `arcology`, `endless-day`, `access-chip`, `exposure`, `corporate-heat`, and `night-network`. It is intentionally content-only until the interactive glossary implementation begins.
