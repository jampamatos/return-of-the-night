# Interactive Glossary

This document defines the authoring contract for Return of the Night's inline glossary terms.

## Authoring syntax

Use a localized visible label and a shared stable glossary ID:

```md
:term[arcology]{id="arcology"}
```

The label belongs to the current language. The `id` must use the same logical glossary ID in both PT-BR and English.

## Reader behavior

The reader transforms an inline term into an accessible button. It opens the localized term summary on hover, keyboard focus, or click. On wide screens, the active definition occupies the reader's contextual right rail alongside the page outline; it updates in place without covering the reading column. Below the reader-rail breakpoint, the same information becomes a compact anchored dialog.

Both variants provide a link to the corresponding glossary-index entry and close with `Escape`, their close button, or an outside click. The desktop rail remains available until it is explicitly replaced or closed, while the mobile dialog also dismisses after pointer leave when it has not received focus.

The glossary index is available at `/{lang}/glossary/`. Individual entries are deep-linkable as `/{lang}/glossary/#stable-term-id`.

## Validation

The Markdown transform rejects an inline term with a missing `id` or one that does not resolve to a glossary entry. Content tests also ensure that every localized chapter reference resolves against its locale's glossary corpus.

When adding a term:

1. add its PT-BR and English glossary entries with the same `id`;
2. add or update localized chapter references using that `id`;
3. run `npm run check` and `npm run test:e2e`.

## Scope

Glossary cards provide reading help, not a spoiler-security boundary. If a definition needs Player/GM-specific treatment, author that distinction explicitly in the content and preserve the project's public spoiler-etiquette policy.
