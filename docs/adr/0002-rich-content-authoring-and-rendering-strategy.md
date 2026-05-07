# ADR 0002: Rich Content Authoring and Rendering Strategy

## Status

Accepted

## Context

Return of the Night is a content-first digital book platform. Chapter pages already support the core reading experience: routed chapter pages, MDX rendering, current-chapter navigation, heading anchors, deep links, and previous/next chapter navigation.

The next reader capability is richer chapter content: figures with captions, styled tables, side-by-side layouts, callouts, and audience-filtered blocks.

These features should make chapters more expressive without making source files hard to read or maintain. Most contributors should be able to author common rich-content blocks without needing to write custom JSX for everyday cases.

The project also needs to preserve a clear boundary between rich-content rendering and later or separate concerns such as glossary interactions, localization fallback behavior, access control, and broad visual redesign.

## Decision

The reader will support a small, explicit set of rich-content block types:

- figures with captions
- styled tables
- side-by-side columns
- callouts
- audience-filtered blocks

The authoring model should stay close to Markdown/MDX. Common rich-content blocks should be readable in source files and should not require authors to write JSX unless a specific advanced case truly needs it.

The implementation will use a hybrid strategy:

- Standard Markdown tables should remain the authoring convention for tables, with reader-specific semantic rendering and styling applied by the site.
- Figures with captions should use an author-friendly block convention, rendered internally as semantic figure content.
- Columns should use an author-friendly block convention for side-by-side composition, rendered internally through reader-owned layout markup.
- Callouts should use an author-friendly block convention with a minimal supported set of variants.
- Audience-filtered blocks should use an explicit authoring convention connected to the existing reader audience preference.

Components may be used under the hood whenever they make rendering, semantics, styling, or maintainability clearer. However, component implementation details should not force ordinary chapter authors into heavy JSX syntax.

## Current figure convention

Figures with captions use standard Markdown image syntax followed immediately by an emphasized caption paragraph:

```md
![Permanent daylight over a sealed arcology](/images/landing-hero.png)
_Caption: Existing registered project artwork reused to validate semantic figure rendering._
```

Localized content may use `Legenda:` instead of `Caption:` for the caption marker.

The reader transforms this pair into semantic figure content internally. Authors should not write figure JSX for ordinary image-plus-caption content.

## Current columns convention

Side-by-side content uses directive-style Markdown blocks:

```md
:::columns
:::column
Rules text, lists, or tables go here.
:::
:::column
Image, table, or supporting text goes here.
:::
:::
```

The reader transforms supported `columns` / `column` directives into reader-owned layout markup internally. Authors should not write layout JSX for ordinary two-column composition.

## Current callout convention

Callouts use directive-style Markdown blocks with an intentionally limited variant set:

```md
:::note
Supporting context goes here.
:::

:::warning
Important caution goes here.
:::

:::example
Short applied example goes here.
:::
```

Localized content may provide an explicit visible label:

```md
:::warning[Aviso]
Localized warning text goes here.
:::
```

The reader transforms supported `note`, `warning`, and `example` directives into reader-owned semantic callout markup. Authors should not write callout JSX for ordinary note, warning, or example blocks.

## Audience filtering

Audience-filtered content is a reading preference, not a security feature.

The player/GM audience preference controls what the reader chooses to show or hide in the reading interface. It must not be described or implemented as access control, secrecy, permissions, authentication, or content protection.

If content must be truly private or protected, that requirement belongs to a separate access-control design, not to the reader audience preference.

However, true access control is not currently a requirement for the project, so the audience preference can be implemented as a simple content filter that hides or shows content based on reader choice.

## Non-goals

This decision does not define or implement:

- glossary hover cards
- inline glossary-term interactions
- localization fallback behavior
- authentication or access control for GM-only content
- broad reader visual redesign
- a rewrite of the existing chapter reader architecture

The rich-content layer should extend the current reader instead of replacing it.

## Rationale

Keeping the supported block set small makes the reader easier to implement, document, test, and maintain.

Keeping authoring close to Markdown/MDX supports the project’s content-first goals. Chapter files should remain pleasant to read in source form because they are not only data files; they are part of the authoring workflow.

A hybrid strategy gives the project flexibility:

- Markdown tables stay familiar and portable.
- Directive-like blocks can keep figures, columns, callouts, and audience content readable.
- Components can still provide semantic HTML, consistent styling, and responsive behavior behind the scenes.

Separating audience filtering from security avoids misleading contributors and readers. Hiding content based on a local reading preference is useful for presentation, but it is not a protection boundary.

## Trade-offs

### Benefits

- Chapter source files remain readable.
- Common authoring stays approachable for non-specialist contributors.
- The reader gains richer editorial features without a major architecture rewrite.
- Rendering behavior can remain centralized and consistent.
- The project avoids overcommitting to broad future systems too early.

### Costs

- Some block conventions will need parser or MDX integration work.
- Directive-style authoring may require additional documentation for contributors.
- The project will need to verify that the chosen syntax remains pleasant once real content grows.
- Advanced custom layouts may still require explicit components or future extensions.

## Rejected alternatives

### JSX-first authoring

Using MDX components directly for every rich-content block would be straightforward technically, but it would make ordinary chapter files more verbose and less Markdown-like.

This approach remains available for advanced cases, but it should not be the default authoring model for common rich-content blocks.

### Parser-only rendering

Implementing every feature purely through parsing would keep authoring clean, but it could make implementation harder to understand and maintain.

The project should use parsing where it improves authoring, but still allow named components to own rendering and styling.

### Treating audience blocks as protected content

Audience filtering is useful for reader presentation, but it does not protect content from being inspected in source files, builds, or client-side output.

For that reason, audience-filtered blocks must not be treated as private or secure content.

## When to revisit

This decision should be revisited if:

- real chapter authoring shows that the selected block syntax is too noisy or confusing;
- contributors regularly need to drop into JSX for common content patterns;
- the rich-content implementation becomes harder to maintain than the authoring benefits justify;
- glossary, localization, or access-control requirements become mature enough to require a separate architectural decision;
- the reader architecture changes in a way that affects how rich-content blocks should be registered or rendered.

Until then, rich content should remain a small Markdown/MDX-first authoring layer on top of the existing chapter reader.
