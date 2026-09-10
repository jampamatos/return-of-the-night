# Open-Source, Spoiler, and Language Policy

## Status

Accepted. This policy defines how Return of the Night is published, how its Player/GM reading modes work, and how bilingual book content is maintained.

## Open-source scope

Return of the Night is a free, open-source project.

- Source code is licensed under the repository's [MIT License](../LICENSE).
- Original book text and documentation are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) unless a file states otherwise.
- Repository-tracked assets are governed individually by the provenance and licensing requirements in [Asset Policy](./assets-policy.md) and [Asset Register](./assets-register.md).
- Third-party intellectual property is governed by [Third-Party Notices](../THIRD_PARTY_NOTICES.md), not by the repository's default licenses.

Open source applies to both the implementation and the original Return of the Night material. It does not grant rights to third-party content that is not explicitly covered by an applicable license or notice.

## Player and GM reading modes

Player and GM modes are reader preferences intended to reduce accidental spoilers during play.

- The active mode controls which audience-marked blocks the reader chooses to display.
- The static build can contain content for both audiences.
- Hiding an audience block in the interface does not protect it from source inspection, browser tools, cached output, or another reader selecting GM mode.
- The project must not describe audience mode as authentication, authorization, access control, secrecy, or content protection.
- Authors may use audience blocks for pacing and spoiler etiquette, but must not rely on them to protect material that truly needs to remain private.

This limitation is intentional and compatible with the project's free, open-source model.

## Bilingual book workflow

Repository-facing artifacts remain English-first:

- code, stable IDs, frontmatter field names, contributor documentation, commit messages, and technical decisions are written in English;
- stable logical IDs use English-friendly lowercase identifiers;
- localized slugs and visible labels may differ.

Book prose follows a PT-BR-first workflow:

1. Write the PT-BR chapter or glossary entry.
2. Add its English translation in the same change.
3. Keep the same logical `id`, book, order, status, audience, and intended document structure in both entries.
4. Localize visible fields, prose, terms, summaries, and slugs for each language.
5. Run the project content and quality checks before marking either entry ready.

PT-BR is the editorial source for book prose. English is its immediate maintained translation, not a later backlog item. A future content validator will enforce parity; until then, contributors are responsible for maintaining it manually.

## Author checklist

Before submitting book content, confirm that:

- the PT-BR and English entries are present together;
- their shared ID, order, status, audience, and structural role match;
- all prose is original or otherwise licensed for public redistribution;
- any CWN-derived rules explanation follows [Third-Party Notices](../THIRD_PARTY_NOTICES.md);
- new assets are registered with provenance and a redistribution-compatible license;
- Player/GM content is treated as spoiler etiquette, not private information.

## Related documents

- [Project blueprint](./open_rulebook_platform_blueprint.md)
- [Setting source of truth](./return-of-the-night-source-of-truth-v0.2.md)
- [Writing Guide](./writing-guide.md)
- [Asset Policy](./assets-policy.md)
- [Third-Party Notices](../THIRD_PARTY_NOTICES.md)
