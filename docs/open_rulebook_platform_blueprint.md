# Return of the Night — Source of Truth and Roadmap

> Master project document. This file defines the vision, scope, foundational decisions, initial architecture, and implementation roadmap for **Return of the Night**. When a local decision conflicts with this document, this document prevails until it is intentionally updated.

> Project name:
>
> - **English:** Return of the Night
> - **Portuguese:** A Volta da Noite

---

## 1. Project summary

**Return of the Night** is an open-source web platform for reading RPG rulebooks, setting books, campaign books, and compendiums, with an experience inspired by modern digital readers such as D&D Beyond, but with its own maintainable, content-first architecture.

The platform must provide:

- a **landing page** that introduces the project and the book
- a **navigable digital-book reading experience**
- an automatically generated **Table of Contents**
- **chapter-based navigation**, with a sidebar restricted to the current chapter
- **deep links** to specific sections
- a **glossary with hover card / focus popover behavior**
- support for **audience-conditioned content**: player or GM
- **localization**, starting with **English** and **PT-BR**
- a writing workflow that stays close to Markdown and remains pleasant for authors

The project must balance three goals at once:

1. a strong reader experience
2. a strong authoring experience
3. a strong open-source foundation that can scale sustainably

---

## 2. English-first policy

This project is **English-first**.

That means:

- the canonical project name is **Return of the Night**
- the repository language is **English**
- code, comments, commit messages, docs, issue templates, PR templates, ADRs, and contributor-facing files should be written in **English** by default
- the initial content architecture should treat **English** as the primary working language
- PT-BR is a first-class supported locale, but not the primary maintenance language

### Practical implications

- `README.md`, `CONTRIBUTING.md`, `ROADMAP.md`, `SECURITY.md`, `SUPPORT.md`, and architecture docs should be in English
- folder names, identifiers, schema field names, component names, route conventions, and content IDs should be in English
- translations should map to shared logical IDs whose canonical reference is English-first
- discussion with the assistant may happen in Portuguese, but repository artifacts should default to English unless there is a deliberate reason otherwise

---

## 3. Open-source policy

This project is intended to be a **real open-source project**, not merely a public repo.

That means the project must be built from the start with:

- clear documentation
- contributor onboarding
- explicit licensing
- maintainable structure
- community standards
- issue and PR hygiene
- architectural decision tracking
- validation and automation where appropriate

Open source is not a cosmetic label here. It is a design constraint.

---

## 4. Vision

Build an open-source RPG digital-book platform that treats content as a first-class system, allowing authors to maintain books, rules, glossaries, and campaign materials through a simple writing workflow, while readers navigate that content with clarity, elegance, and speed.

The vision is **not** to clone D&D Beyond in full. The vision is to create a solid, extensible, open-source foundation that delivers the reader and authoring capabilities that matter most for RPG books.

---

## 5. Product goals

### 5.1 Primary goals

- Deliver a reading experience that is organized, fast, and pleasant.
- Keep chapter authoring mostly in Markdown/MDX without painful syntax.
- Generate navigation structure from content metadata whenever possible.
- Support distinct **player** and **GM** reading perspectives.
- Start with proper localization instead of bolting it on later.
- Structure the repository from day one according to strong open-source practices.

### 5.2 Secondary goals

- Make future outside collaboration easier.
- Enable future expansion to multiple books.
- Support rich content blocks without forcing authors to write JSX everywhere.
- Make the project a useful learning vehicle for content-oriented software architecture.

---

## 6. Project principles

### 6.1 Content-first

Content should drive navigation, not the other way around. Whenever possible, the UI should be derived from structured content and metadata.

### 6.2 Author-first

Writing chapters should feel pleasant. Authors should not depend on cryptic or hard-to-remember syntax.

### 6.3 Reader-first

Readers should quickly find what they need through a clear Table of Contents, chapter navigation, internal links, glossary interactions, and contextual cues.

### 6.4 Open-source-first

The project must start with README, policies, templates, contribution guidance, and repository structure suitable for public collaboration.

### 6.5 Progressive complexity

Start simple with a strong foundation. Add complexity only when the current layer is stable and clearly understood.

### 6.6 Learning-oriented

Decisions should favor understanding and maintainability, not only immediate speed.

### 6.7 English-first

All core repository artifacts should default to English so that the project remains accessible to the broadest contributor base.

---

## 7. Scope

## 7.1 MVP

The MVP should include:

- landing page
- audience selector: player / GM
- local persistence of audience selection
- language selector: English / PT-BR
- base book structure
- automatically generated Table of Contents
- chapter page
- current-chapter sidebar
- Prev Chapter / Next Chapter navigation
- deep links to headings
- chapters written in MDX with writing kept mostly Markdown-like
- images
- image captions
- tables
- side-by-side layouts
- audience-conditional blocks
- glossary with inline references and hover/focus cards
- open-source repository structure

## 7.2 Post-MVP

May come later:

- full-text search
- multiple books
- book edition/versioning
- highly polished theme system
- user accounts
- cloud sync
- CMS integration
- inline comments
- advanced import/export workflows

## 7.3 Out of scope for now

- real authentication
- real authorization for GM/player separation
- WYSIWYG editor
- custom backend
- real-time collaboration

---

## 8. Audiences and reading modes

The system will initially support two primary reading modes:

### 8.1 Player

Player-oriented mode. Hides or filters GM-only blocks.

### 8.2 GM

GM-oriented mode. Shows the full content, including blocks marked as GM-only.

### 8.3 Important rule

In the MVP, player/GM mode is a **reading preference**, not a real security layer. Truly secret content must not rely on this feature alone.

---

## 9. Desired experience

## 9.1 Landing page

The landing page should:

- explain the project or book quickly
- provide a clear CTA into the book
- allow profile and language selection with minimal friction
- act as an elegant entry point into the reading experience

## 9.2 Book home / Table of Contents

The first page of the book should be a visually strong Table of Contents that groups chapters and subsections clearly.

Ideally:

- chapters are listed automatically
- labels remain coherent across languages
- links go directly to the correct chapter pages

## 9.3 Chapter page

The chapter page should include:

- breadcrumb or minimum contextual navigation
- chapter/page title
- main content area
- a sidebar limited to the current chapter
- Prev Chapter / Next Chapter navigation
- stable deep links for sections
- a discreet audience and language switcher

## 9.4 Glossary

Inline glossary terms should open a compact card on hover and keyboard focus.

## 9.5 Responsiveness

The experience must work on mobile, but desktop can be prioritized first. Mobile adaptation should still be considered early enough to avoid structural rework.

---

## 10. Initial technical decisions

## 10.1 Official stack

The initial stack will be:

- **Astro**
- **TypeScript**
- **MDX**
- **Astro Content Collections**
- small interactive **islands** when necessary

### Rationale

- Astro is excellent for content-heavy sites.
- TypeScript adds safety and architectural clarity.
- MDX enriches Markdown without forcing a fully component-driven writing model.
- Content Collections provide schema, organization, and validation.
- Small islands keep interactivity localized and the mental model simpler.

## 10.2 Rendering strategy

Prefer static / pre-rendered output, with lightweight client-side interactivity only where necessary.

## 10.3 Audience state

Audience selection will be persisted in the browser via `localStorage` in the MVP.

Suggested key:

```txt
rotn:audience
```

Values:

- `player`
- `gm`

## 10.4 Languages

Initial supported languages:

- `en`
- `pt-BR`

## 10.5 Routing strategy

Use language-prefixed routes:

```txt
/en/
/pt-BR/
```

This keeps the structure explicit, simple, and scalable.

---

## 11. Content model

Content will be organized into distinct collections.

## 11.1 `chapters` collection

Represents book pages.

Expected fields, initially:

```yaml
id: introduction/welcome
lang: en
book: core
chapterNumber: 0
chapterTitle: Introduction
pageTitle: Introduction: Welcome to Adventure
slug: introduction/welcome-to-adventure
order: 10
summary: Overview of the book and how to use it.
audience: all
status: draft
```

### Role of these fields

- `id`: stable logical identifier across languages
- `lang`: entry language
- `book`: future-proofing for multiple books
- `chapterNumber`: groups pages into chapters
- `chapterTitle`: parent chapter name
- `pageTitle`: page title shown in the UI
- `slug`: friendly URL
- `order`: navigation order
- `summary`: short description
- `audience`: target audience of the entire page, if needed
- `status`: draft, ready, etc.

## 11.2 `glossary` collection

Represents glossary entries.

Example:

```yaml
id: long-rest
lang: en
term: Long Rest
type: rule
aliases:
  - long rest
summary: An extended rest period with specific benefits.
```

## 11.3 `book-config` collection

Represents structural book configuration.

It may contain:

- book name
- global labels
- chapter ordering
- navigation labels
- chapter groups

## 11.4 Future expansion

The architecture should allow multiple books later, but the first implementation should target **one book only**.

---

## 12. Authoring conventions

The central proposal is: **use MDX under the hood, but keep writing as close to plain Markdown as possible**.

## 12.1 Normal text

Common text, headings, lists, and tables should follow normal Markdown whenever possible.

## 12.2 Glossary term

Target syntax:

```md
:term[Long Rest]
```

This syntax should be transformed into an element with:

- glossary-term semantics
- color based on glossary type
- hover/focus card behavior

## 12.3 Image with caption

Target syntax:

```md
![Barbarian axe and shield](./barbarian-weapons.png)
_Caption: weapons and ornaments associated with the barbarian._
```

We want to treat this as a semantic figure with a caption, ideally via a parsing rule or plugin.

## 12.4 Side-by-side layout

Target syntax:

```md
:::columns
:::column
Text or a table goes here.
:::
:::column
![Barbarian art](./berserker.png)
_Caption: Path of the Berserker._
:::
:::
```

## 12.5 Audience blocks

Target syntax:

```md
:::audience{target="gm"}
This block is visible only in GM mode.
:::
```

```md
:::audience{target="player"}
This block is visible only in player mode.
:::
```

## 12.6 Callouts

Target syntax:

```md
:::note
Note text.
:::
```

## 12.7 Meta-rule

Whenever there are two possible approaches — one more powerful and one simpler — prefer the simpler one **as long as it does not sabotage long-term content scalability**.

---

## 13. Navigation

## 13.1 Table of Contents

Must be generated from content metadata.

Desired rules:

- automatic ordering through metadata
- grouping by chapter
- stable links
- compatibility across languages

## 13.2 Chapter sidebar

The reading sidebar should show only the content of the current chapter.

It may be derived from:

- chapter headings
- explicit metadata later, if needed

## 13.3 Between-chapter navigation

The page should show:

- `Prev Chapter`
- `Next Chapter`

These links should be computed automatically from book order.

## 13.4 Anchors and deep links

Every relevant heading should receive a stable ID.

Internal links must:

- open the correct page
- scroll to the correct section
- work across languages

---

## 14. Glossary

## 14.1 Goal

Allow important terms to be understood quickly without forcing the reader to leave the main reading flow.

## 14.2 Entry types

Initial examples:

- `rule`
- `action`
- `spell`
- `condition`
- `item`
- `lore`

## 14.3 Semantic color

Each glossary type should be able to map to a different color. Exact colors may be chosen later, but the architecture must already support that mapping.

## 14.4 Accessibility

Glossary interactions cannot depend only on hover. They must also work by keyboard focus.

---

## 15. Localization

## 15.1 Initial languages

- English
- PT-BR

## 15.2 Expected organization

```txt
src/content/chapters/en/
src/content/chapters/pt-BR/
src/content/glossary/en/
src/content/glossary/pt-BR/
```

## 15.3 Matching rule

Equivalent entries across languages must share the same logical `id`.

Example:

- `id: long-rest` in English
- `id: long-rest` in PT-BR

## 15.4 Practical rule

The structure across languages should remain as mirrored as possible.

## 15.5 English-first rule

When there is uncertainty about naming, identifiers, or the primary reference version of a content entry, default to the English version.

---

## 16. Initial folder structure

```txt
.
├─ .github/
│  ├─ ISSUE_TEMPLATE/
│  ├─ workflows/
│  └─ pull_request_template.md
├─ public/
│  └─ images/
├─ src/
│  ├─ components/
│  │  ├─ reader/
│  │  ├─ glossary/
│  │  ├─ content/
│  │  └─ ui/
│  ├─ content/
│  │  ├─ chapters/
│  │  │  ├─ en/
│  │  │  └─ pt-BR/
│  │  ├─ glossary/
│  │  │  ├─ en/
│  │  │  └─ pt-BR/
│  │  └─ config/
│  ├─ layouts/
│  ├─ lib/
│  │  ├─ audience/
│  │  ├─ content/
│  │  ├─ glossary/
│  │  ├─ i18n/
│  │  └─ reader/
│  ├─ pages/
│  │  ├─ index.astro
│  │  └─ [lang]/
│  ├─ styles/
│  └─ content.config.ts
├─ docs/
│  ├─ adr/
│  ├─ architecture.md
│  ├─ content-style-guide.md
│  └─ writing-guide.md
├─ README.md
├─ ROADMAP.md
├─ CONTRIBUTING.md
└─ package.json
```

---

## 17. Open-source and minimum governance

The repository must start with the minimum foundation of a serious open-source project.

## 17.1 Required files

- `README.md`
- `LICENSE`
- `CODE_OF_CONDUCT.md`
- `CONTRIBUTING.md`
- `SECURITY.md`
- `SUPPORT.md`
- `CHANGELOG.md`
- `ROADMAP.md`
- `docs/architecture.md`
- `docs/writing-guide.md`

## 17.2 GitHub templates

- bug report template
- feature request template
- documentation issue template
- translation issue template
- pull request template

## 17.3 Commit convention

Use **Conventional Commits**.

Examples:

- `feat(reader): add chapter sidebar`
- `feat(glossary): support hover cards`
- `docs(roadmap): define milestone 1`
- `chore(repo): add issue templates`

## 17.4 Community expectations

The project should also plan for:

- a welcoming contribution model
- clear labels and triage practices
- documented review expectations
- transparent decision-making through ADRs or equivalent docs

---

## 18. Quality and automation

## 18.1 Minimum requirements

- lint
- format
- typecheck
- build

## 18.2 Initial CI

Minimum pipeline:

- install dependencies
- run lint
- run format check
- run typecheck
- run build

## 18.3 Future expansion

- broken-link checks
- content validation
- missing-translation checks
- accessibility smoke checks

---

## 19. Accessibility

Accessibility must be included from the beginning, not treated as a late correction.

Minimum requirements:

- semantic headings
- keyboard navigation
- visible focus state
- glossary cards accessible through focus as well as hover
- figures with semantic captions
- proper tables
- good contrast
- respect for `prefers-reduced-motion` if animation is added

---

## 20. Asset policy

Because the project is open source, every image, icon, texture, or font must have a clear origin and license.

### Baseline rule

No asset enters the repository unless we know:

- where it came from
- whether it may be redistributed
- under which license it is published

### Documentation expectation

Where relevant, asset provenance should be documented in a way contributors can inspect later.

---

## 21. Main risks

### 21.1 Too much ambition too early

Trying to reproduce a mature product in full before the foundation is ready.

### 21.2 Overcomplicated authoring syntax

If the system requires too much “mini-programming” to write chapters, the authoring experience will degrade.

### 21.3 Excessive mixing of content and UI

Content must remain reusable and understandable.

### 21.4 Improvised localization

If the structure is not localization-ready from the start, rework will be substantial.

### 21.5 False sense of access control

GM/player mode in the MVP is not a substitute for real security.

### 21.6 Weak open-source hygiene

A public repository without contribution standards, licensing clarity, and documentation quickly becomes hard to maintain.

---

## 22. Macro roadmap

This roadmap goes from zero to an initially mature product.

## Phase 0 — Direction and preparation

### Goal

Define clearly what we are building and how we will work.

### Deliverables

- source-of-truth document
- stack definition
- MVP definition
- step-by-step working method
- high-level system model

### Definition of Done

- there is an approved master document
- stack and scope are clear
- initial priorities are agreed upon

---

## Phase 1 — Repository foundation

### Goal

Create the technical and organizational foundation of the project.

### Deliverables

- Astro project initialized
- TypeScript configured
- lint and formatting configured
- initial folder structure created
- open-source files created
- issue/PR templates created
- minimum CI working

### Definition of Done

- the project runs locally
- `lint`, `typecheck`, and `build` pass
- the repository already looks like a real open-source project

### Suggested sub-steps

1. initialize the Astro project
2. understand the base Astro structure
3. add strict TypeScript and quality tooling
4. create the initial folder structure
5. write the initial README
6. create GitHub community files
7. create the CI workflow

---

## Phase 2 — Base site structure

### Goal

Create the navigable shell of the product before building the content engine.

### Deliverables

- initial landing page
- shared base layout
- language-prefixed routing
- language switcher
- audience switcher
- localStorage persistence

### Definition of Done

- the user can enter the site
- the user can choose language
- the user can choose player/GM mode
- the choice persists through navigation and reloads

### Suggested sub-steps

1. create the base layout
2. create a simple landing page
3. create language-prefixed routing
4. implement the language switcher
5. implement a simple audience store
6. connect the UI to localStorage

---

## Phase 3 — Content engine

### Goal

Create the structure that turns content files into a navigable book.

### Deliverables

- content collections
- typed schemas
- first `chapters` collection
- first `glossary` collection
- book config
- metadata reading utilities
- book-order generation

### Definition of Done

- chapters are loaded from content
- glossary entries are loaded from content
- the app understands ordering, language, and logical identity of entries

### Suggested sub-steps

1. create `content.config.ts`
2. define the `chapters` schema
3. define the `glossary` schema
4. create a few example entries
5. create utilities to list chapters by language
6. create utilities to find previous/next chapters

---

## Phase 4 — Book home / Table of Contents

### Goal

Generate the book home page automatically from the content model.

### Deliverables

- book home route
- automatic TOC
- chapter grouping
- correct links for each page

### Definition of Done

- the book page shows the real chapters from content
- the order matches the metadata
- links open the correct pages

### Suggested sub-steps

1. create the book home route
2. list chapters for the current language
3. group them by chapter
4. render the TOC view
5. refine labels and navigation

---

## Phase 5 — Chapter reader

### Goal

Turn content pages into a real reading experience.

### Deliverables

- chapter page
- MDX rendering
- current-chapter sidebar
- Prev Chapter / Next Chapter navigation
- stable heading anchors
- working deep links

### Definition of Done

- the user can enter a chapter and read content
- the sidebar shows only relevant current-chapter sections
- prev/next works
- links to specific sections work

### Suggested sub-steps

1. create the dynamic chapter route
2. render MDX content
3. extract headings
4. build the chapter sidebar
5. compute previous/next chapter links
6. test deep links

---

## Phase 6 — Rich content features

### Goal

Add the features that make the reader more powerful and closer to the intended vision.

### Deliverables

- images with captions
- styled tables
- side-by-side layout
- callouts
- audience-conditional blocks

### Definition of Done

- authors can use these features without excessively complex syntax
- source files remain readable
- rendering stays consistent

### Suggested sub-steps

1. decide whether the extensions should be plugins, components, or both
2. implement figure-with-caption handling
3. implement the columns block
4. implement callouts
5. implement the audience block
6. test with real content samples

---

## Phase 7 — Interactive glossary

### Goal

Create a system of inline-reference glossary entries with contextual visual feedback.

### Deliverables

- `:term[...]` syntax
- syntax parsing/conversion
- mapping to glossary entries from the collection
- hover/focus card
- color by glossary type

### Definition of Done

- inline terms are detected
- they find the correct glossary entry
- they show summary text on hover/focus
- they are keyboard accessible

### Suggested sub-steps

1. model the glossary-term component API
2. create glossary lookup by language and id/alias
3. decide the parsing pipeline
4. render the hover card
5. apply semantic color by type
6. validate accessibility

---

## Phase 8 — Real localization

### Goal

Consolidate multilingual support consistently across the product.

### Deliverables

- equivalent routes by language
- mirrored content by shared `id`
- translated global labels
- a strategy for missing content

### Definition of Done

- English and PT-BR work end to end
- navigation, TOC, glossary, and chapters respect the active language

### Suggested sub-steps

1. finalize the language-based content structure
2. validate ID correspondence
3. translate global navigation labels
4. test language switching inside the reader
5. decide the fallback strategy for missing entries

---

## Phase 9 — UX and layout refinement

### Goal

Move the interface closer to the intended product experience without sacrificing clarity or maintainability.

### Deliverables

- refined landing page
- refined TOC
- refined chapter reader page
- visual tokens for glossary types
- responsive improvements
- navigation improvements

### Definition of Done

- the project feels like a coherent product, not just a technical demo
- desktop is strong
- mobile is functional

---

## Phase 10 — Contribution docs and hardening

### Goal

Prepare the project to grow without turning into chaos.

### Deliverables

- real writing guide
- real architecture guide
- initial ADRs
- refined templates
- content validations
- backlog for future cycles

### Definition of Done

- an outside contributor can understand how to contribute
- the project has enough documentation to scale safely

---

## 23. Recommended implementation order now

The recommended sequence to begin with is:

1. Phase 1 — Repository foundation
2. Phase 2 — Base site structure
3. Phase 3 — Content engine
4. Phase 4 — Book home
5. Phase 5 — Chapter reader
6. Phase 6 — Rich content features
7. Phase 7 — Interactive glossary
8. Phase 8 — Real localization
9. Phase 9 — UX/layout refinement
10. Phase 10 — Contribution docs and hardening

---

## 24. Working method

We will work in small steps.

Each step should answer:

- what is the goal?
- why does this step exist?
- which concepts does it teach?
- which files does it touch?
- what should work at the end?

### Ideal execution format

For each step:

1. understand the concept
2. implement the minimum useful version
3. test locally
4. checkpoint what was learned
5. connect it back to the wider system

---

## 25. Next concrete milestone

The next concrete milestone is:

### **Phase 1 — Repository foundation**

That means the next practical tasks should be, in order:

1. initialize the Astro project
2. understand the structure created by Astro
3. configure basic quality tooling
4. create the project directory structure
5. write the initial README
6. create the initial open-source documentation base

---

## 26. Rule for updating this document

This document can and should evolve. But every relevant change in direction must be:

- deliberate
- documented
- justified

Core decisions must not change silently.

---

## 27. Current state

### Project status right now

- initial vision defined
- MVP scope outlined
- initial stack chosen
- initial architecture proposed
- macro roadmap defined
- ready to start Phase 1

---

## 28. Final executive summary

We are building **Return of the Night**, an open-source RPG digital-book platform with MDX-based content, rich navigation, interactive glossary behavior, player/GM reading modes, and support for English and PT-BR.

The implementation strategy is incremental: start with a solid repository foundation, then build the site shell, then the content engine, then the reader, and only after that move into rich authoring features, glossary interactions, localization consolidation, and visual refinement.

The priorities are understanding, clarity, maintainability, and real open-source readiness — not speed or premature complexity.
