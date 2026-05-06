# Shell, Reading Experience, and Visual Direction Guidelines

## Purpose

This document captures the current functional and visual direction for the **Return of the Night** site shell and reading experience. It is intended to guide implementation decisions as the product evolves while preserving a clear boundary between what exists now and what remains planned roadmap work.

The goal is not to fully design the final product yet, but to define the **experience principles, interface expectations, visual identity, and early design constraints** that should shape the shell from this point onward.

---

## Product Experience North Star

**Return of the Night** should feel like a **serious digital reading platform for an interactive tabletop book**, not a generic website or a simple article viewer.

The intended experience combines:

- the **navigable, structured reading flow** of platforms like **D&D Beyond**
- the **editorial and typographic richness** of a well-designed RPG book
- the **dark, neon, techno-noir identity** of cyberpunk media such as **Cities Without Number**, **Cyberpunk 2077**, and **Shadowrun**

In short:

> The product should offer the usability of a modern digital rules/book platform while projecting a strong cyberpunk, nocturnal, and unsettling editorial identity.

---

## Core Experience Goals

The reading experience should always preserve three priorities:

1. **Reader orientation**
2. **Immersive visual identity**
3. **Editorial flexibility**

### 1. Reader orientation

The user should never feel lost while reading.

The platform should make it easy to understand:

- where the current page belongs in the book
- which chapter and section the user is in
- how to move to previous and next sections or chapters
- how to return to the Table of Contents
- how to jump within the current chapter
- how to access glossary terms without breaking reading flow

### 2. Immersive visual identity

The platform should not feel neutral or generic. Even at the shell level, it should already suggest:

- urban night
- cybernetic technology
- neon-lit darkness
- dystopian atmosphere
- technological decay
- horror beneath polished surfaces

### 3. Editorial flexibility

The site should support more than one rigid page pattern.

Some pages may be simple, linear, and text-heavy. Others may become more visually elaborate, with stronger composition, image framing, side notes, or special layouts.

The system should therefore be designed as a **reading platform**, not just as a blog template.

---

## Functional Reading Experience Direction

## Global shell

The upper part of the site supports or should remain compatible with:

- site branding
- a home/landing entry point
- possible future global navigation
- language switching
- audience mode switching
- eventual mode toggles such as light/dark theme

The brand area should act as a reliable link back to the locale-specific home or book entry point.

## Reading page structure

The intended reading experience should roughly follow this pattern:

1. **Global site header**
2. **Contextual book navigation**
3. **Reader area**
4. **Chapter/section navigation**
5. **Reading content**
6. **Supportive interaction elements**

### Contextual book navigation

When the platform eventually supports multiple books or multiple major sources, the reading interface should allow a contextual path such as:

- site / source / book / chapter
- or equivalent breadcrumb-like orientation

This does not need to be fully implemented while the project supports one book, but the shell should remain compatible with this future direction.

### Reader layout

The eventual book reader should support:

- a main reading column
- a chapter-local navigation panel
- section-based navigation within the current chapter
- chapter previous/next controls
- a path back to the main Table of Contents
- a floating back-to-top control

### Section navigation

The left-side reader navigation should allow:

- current chapter sections
- nested sections within sections
- open/close behavior
- collapse/expand states
- sufficient flexibility to preserve reading space when the user wants a less cluttered layout

This means the reader navigation should be **useful but dismissible**, not always dominant.

### Table of Contents

The Table of Contents should be:

- generated automatically from book structure and content metadata
- procedural rather than hand-maintained
- capable of growing as chapters and sections are added
- navigable as a book-level index

It may visually resemble a structured editorial contents spread, but functionally it must be derived from the content system.

### Chapter navigation

Reader pages should support strong directional navigation such as:

- previous chapter
- next chapter
- current chapter label
- clear return path to the TOC

These controls should contribute to orientation without overpowering the page.

### Glossary interaction

Glossary terms inside the reading flow should support two levels of interaction:

#### Inline/hover discovery

When the user hovers over a glossary-marked term, the site should reveal a **small contextual overlay** that explains the term without forcing navigation away from the page.

This interaction is best thought of as a:

- **popover**
- **contextual hover card**
- or **rich tooltip**

rather than a full blocking modal.

#### Deep-link navigation

When the user clicks a glossary term, the site should take the reader to the glossary page and scroll to that specific entry.

This creates both:

- quick understanding in place
- and deeper reference access when needed

### Special editorial layouts

The system should eventually allow pages or sections that are more visually composed than a plain article, including layouts inspired by strongly designed RPG books.

This means the content system should not assume that every page is only:

- title
- body
- simple headings
- uniform paragraphs

Instead, the platform should remain open to:

- image-led sections
- pullout blocks
- side notes
- special composition templates
- more expressive editorial arrangements

---

## Mobile and Responsive Behavior

The site must be **fully responsive**, with real mobile thinking rather than a desktop layout merely squeezed into a narrow screen.

### Mobile priorities

On smaller screens, the reading experience should prioritize:

- readable text width
- clear heading hierarchy
- easy jump navigation
- uncluttered controls
- preserved orientation

### Mobile navigation adaptation

The chapter-local or intra-page navigation may transform into a mobile-friendly pattern such as:

- a hamburger-triggered drawer
- a “Jump To” control
- a temporary overlay menu
- or another compact navigation mechanism

The important part is not the exact component yet, but the behavior:

- the user must still be able to navigate sections quickly
- the reading surface must remain the primary focus
- navigation should be available without permanently occupying valuable screen space

---

## Visual Identity Direction

## Overall mood

The visual tone should be:

- dark
- urban
- neon-lit
- technological
- atmospheric
- nocturnal
- sharp but readable
- moody rather than chaotic

The site should evoke:

- cybernetic futures
- dangerous city nights
- screen glow and wet pavement
- corporate dystopia
- machine horror
- digital grime
- late-night underground networks

It should feel like the reader is entering a **dangerous, intelligent, stylized world**, not a sterile design system.

## External visual reference: Cities Without Number

The project draws part of its visual inspiration from **Cities Without Number**, but it is important to interpret that reference correctly.

The book does not appear to rely on one single illustration technique or one single hand. Its coherence comes from **art direction**, recurring editorial image patterns, disciplined palette control, and a consistent techno-noir mood.

What stands out most in practice is not constant splash art, but a repeated editorial grammar made of:

- recurring support images and visual motifs
- opening images with stronger atmospheric impact
- image use as part of page composition, not only as decoration

The recurring visual language of that reference tends to favor:

- dark charcoal, slate-blue, and blue-violet base tones
- selective magenta, cyan, or amber accents rather than full-spectrum neon
- large shadow masses with localized glow
- industrial grime, haze, rain, smoke, and degraded technological surfaces
- oppressive architecture and infrastructure
- human figures used for scale, vulnerability, or tension rather than glamor
- asymmetrical crops, vertical framing, and compositions that feel editorial rather than poster-like

For this project, the important takeaway is not to imitate the exact rendering style of any one illustration, but to preserve the same visual discipline:

- dark first, neon second
- one dominant accent family per image whenever possible
- atmosphere before spectacle
- architecture, systems, and power structures over character glamour
- support art, side imagery, and framing devices should matter as much as hero images

Different production methods may still be acceptable, including:

- digital painting
- photobashed or matte-painted scenes
- more graphic or stylized illustration
- mixed editorial image systems

What matters is that all of them still read as belonging to the same world.

## Image direction for Return of the Night

The project should adapt that reference to its own specific identity rather than copying generic cyberpunk imagery.

The core visual idea of the setting is not merely "cool neon dystopia". It is a world that abolished war and night, enclosed humanity inside corporate Arcologies, and taught people to fear the outside.

That means project imagery should often reinforce:

- sealed corporate habitats
- impossible artificial light
- oppressive verticality
- surveillance and ownership systems
- false cleanliness hiding systemic violence
- the contrast between controlled interiors and the forbidden reality outside
- the emotional shock of encountering true darkness

As a rule, project images should feel like they belong to a world of:

- corporate containment
- synthetic daylight and nocturnal deprivation
- technological dependence
- managed fear
- urban decay beneath polished control

The style should avoid drifting into:

- rainbow-neon visual noise
- clean commercial sci-fi
- heroic action-poster posing
- glossy futurism without grime or dread
- images that feel playful, ironic, or too visually loud for long-form reading

## Light and dark modes

The project should support both:

- **light mode**
- **dark mode**

However, both modes should preserve the same identity.

### Dark mode

Dark mode should be the most native expression of the product’s world:

- neon against shadow
- rich blacks and deep blue-violets
- strong contrast
- glowing accent color moments
- techno-noir atmosphere

### Light mode

Light mode should not become bland or corporate. It should still feel part of the same world:

- pale off-white or cool paper-like surfaces
- restrained but visible neon accents
- dark text with subtle futuristic tone
- enough clarity for long reading sessions

---

## Proposed Early Color Direction

This is an initial direction, not a final locked palette.

## Core neutrals

### Dark surfaces

- `#0A0F14` — near-black blue
- `#111827` — deep slate-blue
- `#161B22` — dark interface surface
- `#1F2937` — elevated dark panel

### Light surfaces

- `#F3F5F7` — cool light background
- `#E8EDF2` — muted light surface
- `#D7DEE7` — soft cool border/surface edge

### Text

- `#F5F7FA` — primary light-on-dark text
- `#D8E1EA` — secondary light-on-dark text
- `#111827` — primary dark-on-light text
- `#334155` — secondary dark-on-light text

## Accent colors

These should be used with discipline. The world is neon, but the UI should not become noisy.

### Cyan / electric blue

- `#22D3EE`
- `#38BDF8`

Use for:

- active states
- focus indicators
- selected controls
- technical/system feel

### Magenta / neon pink

- `#F72585`
- `#FF4FD8`

Use for:

- special highlights
- hover glow moments
- dramatic UI accents
- horror-tech atmosphere

### Acid yellow / toxic amber

- `#FACC15`
- `#F59E0B`

Use for:

- warnings
- section markers
- subtle industrial energy
- contrast details

### Deep violet

- `#7C3AED`
- `#8B5CF6`

Use for:

- worldbuilding tone
- secondary accents
- atmospheric layered surfaces

### Signal red

- `#EF4444`

Use sparingly for:

- danger
- destructive actions
- alerts
- high-risk emphasis

## Suggested semantic mapping

This is only a first proposal for the design system mindset:

- **background**: dark charcoal-blue or cool light gray
- **surface**: slightly raised neutral panel
- **primary accent**: electric cyan
- **secondary accent**: neon magenta
- **warning/accent contrast**: acid amber
- **danger**: signal red
- **muted text**: blue-gray
- **borders**: cool gray with low-to-medium contrast

---

## Typography Direction

Typography should balance:

- long-form readability
- editorial seriousness
- futuristic identity
- genre atmosphere

The platform likely needs **two complementary type families**:

1. one for **body reading**
2. one for **display/navigation/accent use**

## Recommended body font direction

The body font should prioritize comfortable long reading. Good candidates include:

### Option A — Literata

A very strong candidate for book-like reading:

- literary tone
- readable at long lengths
- good for editorial immersion
- elegant without feeling old-fashioned

### Option B — Source Serif 4

Another excellent reading font:

- strong serif readability
- flexible and modern
- suitable for long passages

### Option C — Inter (if a sans-led system is preferred)

Useful if the project wants a more digital-forward body style, but less book-like than a serif option.

**Recommendation:** start with **Source Serif 4** or **Literata** for body text.

## Recommended display / UI font direction

The project needs a more futuristic voice for headings, labels, TOC accents, and navigation.

Good candidates include:

### Option A — Rajdhani

- readable
- geometric
- futuristic without becoming unusable
- strong cyberpunk energy

### Option B — Orbitron

- highly futuristic
- good for selective use
- best for accent headings, not for all UI

### Option C — Exo 2

- sci-fi feel
- more versatile than highly stylized display fonts

### Option D — Space Grotesk

- modern
- strong interface presence
- less overtly sci-fi, but still sharp and contemporary

**Recommendation:** pair **Source Serif 4** or **Literata** with **Rajdhani**, **Exo 2**, or **Space Grotesk**.

## Early recommended pairings

### Pairing 1 — Balanced and strong

- **Body:** Source Serif 4
- **Display/UI:** Rajdhani

### Pairing 2 — More literary and atmospheric

- **Body:** Literata
- **Display/UI:** Exo 2

### Pairing 3 — More digital and contemporary

- **Body:** Inter
- **Display/UI:** Space Grotesk

## Typographic usage guideline

A likely future typographic split could be:

- **body copy**: serif for immersion and long reading
- **UI labels and controls**: sans-serif
- **major page headings / chapter headings**: futuristic display sans
- **small metadata / breadcrumbs**: compact sans
- **special in-world or editorial callouts**: optional accent treatment later

This would preserve both:

- reading comfort
- genre identity

---

## Layout and Composition Principles

Even before advanced reader features are implemented, the shell should already begin to reflect these principles:

### Controlled reading width

Text content should live in a restrained reading column, not stretch endlessly across the screen.

### Clear hierarchy

The user should be able to visually distinguish:

- global shell
- book context
- navigation
- content
- supportive metadata

### Surface layering

The interface should use layered surfaces, not a single flat wash of color. This is especially important for the cyberpunk mood:

- page background
- shell panel
- elevated controls
- reader content surface

### Accent restraint

Accent colors should feel intentional and charged, not sprayed everywhere. The world can be neon while the UI remains disciplined.

### Reading-first spacing

Spacing should support:

- breathing room
- scanability
- heading rhythm
- navigation clarity
- long-form comfort

---

## Practical Design Guidance for the Shell and Reader

When evolving the shell and reader, the design should suggest:

- a product, not a bare starter app
- reading seriousness
- cyberpunk atmosphere
- clean structure with future extensibility
- compatibility with later reader features

The shell should therefore aim for:

- a branded top bar
- a controlled central content area
- future-ready panel/slot structure
- color tokens that can grow into light/dark themes
- typographic choices that already point toward the final product

---

## Summary

The intended design direction for **Return of the Night** is:

- functionally inspired by premium digital RPG readers
- structurally centered on navigation and orientation
- visually rooted in cyberpunk night, neon, and techno-horror
- editorial rather than blog-like
- immersive but still highly usable
- flexible enough to support both simple reading pages and more expressive layouts later

This document should guide shell- and reader-level decisions so that the product grows in a coherent direction rather than feeling visually or structurally improvised.
