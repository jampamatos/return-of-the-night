# Editorial Guide

## Purpose

This guide is the working path for the active book-writing phase. It complements the repository-wide [Writing Guide](./writing-guide.md) with the practical decisions needed for chapters and glossary entries.

## Authoring sequence

1. Choose the stable logical ID and the chapter's place in the existing map.
2. Copy [`chapter.pt-BR.mdx`](./templates/chapter.pt-BR.mdx) into `src/content/chapters/pt-BR/` and write the PT-BR source.
3. Copy [`chapter.en.mdx`](./templates/chapter.en.mdx) into `src/content/chapters/en/` and write the immediate English translation.
4. Keep shared structural metadata identical; localize slugs, titles, summaries, prose, visible labels, and terms.
5. Add or update matched glossary entries using the PT-BR and English templates when the chapter introduces a recurring concept.
6. Run validation before considering the prose ready for review.

Do not add a chapter in one language as a temporary state. The supported editions are maintained together.

## Chapter metadata

`id` is the stable shared identity used for translation parity and cross-language reader navigation. It is English-friendly, lowercase, and uses hyphens. `slug` is reader-facing and should be natural in its own language.

The following fields must match across PT-BR and English: `id`, `book`, `chapterNumber`, `order`, `audience`, and `status`. The following must be translated: `chapterTitle`, `pageTitle`, `slug`, `summary`, and body prose.

The reader already supplies the page `h1`. Begin chapter body content at `##` so local reader navigation has a clean hierarchy.

## Glossary and terms

Use a glossary entry when a setting term, rule term, organization, technology, or repeated concept benefits from a stable definition. Reference it inline with:

```mdx
:term[visible localized label]{id="stable-term-id"}
```

The label is translated prose. The `id` must exist in both locale glossary collections. Keep equivalent entries' `id` and `type` aligned; translate `term`, aliases, summary, and body.

## Reader blocks

Use rich blocks only when they improve reading:

- `:::note[NOTA // ...]`, `:::warning[AVISO // ...]`, and `:::example[EXEMPLO // ...]` for intentional asides; localize the label alongside the prose;
- `:::audience[JOGADOR // ...]{target="player"}` and `:::audience[MESTRE // ...]{target="gm"}` for spoiler etiquette; localize the visible label but preserve the English target ID;
- tables for actual comparison or reference data;
- figures only with licensed, documented assets and useful captions.

Do not rely on the Player/GM control to protect private information: all book content is public static output.

## Ready-for-review checklist

- PT-BR prose is complete and English is translated in the same change.
- Shared metadata, glossary IDs, glossary types, and term references are aligned.
- Visible copy has been localized; no source-language slug was copied into the other edition.
- New assets follow [Assets Policy](./assets-policy.md) and appear in the [asset register](./assets-register.md).
- `npm run check` and `npm run test:e2e` pass.

The current reader design is functional. A deliberate, unified visual redesign remains separate from authoring so it does not interrupt the writing workflow.
