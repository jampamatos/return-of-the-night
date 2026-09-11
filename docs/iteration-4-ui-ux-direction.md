# Iteration 4 UI/UX Direction

## Purpose

Iteration 4 moves Return of the Night from a coherent but restrained digital reader toward an editorial system with a distinct point of view. The goal is not to add generic cyberpunk decoration. It is to make the existing information hierarchy feel sharper, more institutional, and more like a book people can inhabit.

The working principle is:

> Clean does not mean soft.

## Source reading

This direction synthesizes the project review and visual references supplied for the iteration:

- WipEout / The Designers Republic: typographic attitude, asymmetry, compressed microcopy, and confident empty space.
- Blade Runner 2049 production interfaces: calm information density, grids, large terms surrounded by peripheral system data, and material imperfection.
- SIGNALIS: hard technical components, decisive state color, functional framing, and diegetic interface behavior.
- Control: bureaucratic archive language; the interface is an institution within the world, not a layer applied on top of it.
- CY_BORG: selective rule-breaking, saturated emphasis, and occasional editorial aggression. Use as seasoning, not the base system.
- Mothership / Hull Breach and Cyberpunk RED: an RPG book can be dense, graphic, and physical without becoming a dashboard.

The intended balance is approximately 40% serious editorial publication, 25% fictional operating system, 15% Designers Republic/rave typography, 10% bureaucratic dossier, and 10% punk/zine rupture.

## Non-negotiable constraints

- The product remains a book first. Long-form prose keeps a stable readable measure, comfortable leading, semantic headings, and predictable flow.
- The interface must remain accessible: color never carries meaning alone, focus remains unmistakable, touch targets remain usable, and reduced-motion preferences are honored.
- Do not turn every page into a HUD, add decorative data without restraint, rely on glitch effects, or make a terminal aesthetic compete with prose.
- Player/GM remains a public spoiler-avoidance preference. Its visual treatment may be forceful, but it must never imply real access control.
- The system should introduce a few recurring gestures, not a new visual trick for every component.

## The new system: one book, three artifacts

The themes are not palette swaps. Each is a different physical and political reading context built from the same content structure.

| Theme | Identity           | Dominant materials                                                          | Accent behavior                                                                                 |
| ----- | ------------------ | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Dark  | `NIGHT TERMINAL`   | blue-black screen, cold cyan signal, sparse scan/grain texture              | cyan for navigation/system, amber for action/warning, magenta only for GM/restricted/corruption |
| Light | `CORPORATE SYSTEM` | cold off-white, near-black ink, clinical grid, institutional spacing        | electric cyan for system state; restricted signals can use decisive red or magenta              |
| Paper | `LEAKED HARDCOPY`  | warm stock, toner-black text, visible print registration and archival marks | copper/ochre for editorial structure; dirty magenta for GM/restricted material                  |

The shared design grammar is deliberately narrow:

1. **Technical cut:** `//` joins labels to their state, such as `CHAPTER // 01`, `STATUS // DRAFT`, and `ARCHIVE // PUBLIC`.
2. **Hard frame:** sparse panels use square or minimally rounded corners, a notch or interrupted rule only where it carries meaning, and no generic glowing card treatment.
3. **Editorial number:** major groups and chapters receive an oversized index. It may enter the margin or sit as a low-contrast watermark, but never obstructs reading.
4. **Document state:** short, truthful metadata appears at key transitions: locale, audience preference, draft state, entry type, and revision when the underlying data exists.

## Typographic roles

The existing three-role structure is the right foundation, but the distinction must become more visible.

| Role    | Direction                                                                                                                                                          | Use                                                     |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| Display | Test `Big Shoulders Display` as the leading candidate for chapter numbers, major titles, and selected group headings. Retain a fallback that preserves the layout. | large chapter title, group index, cover scale moments   |
| System  | Keep `IBM Plex Mono`. Use capitals, controlled tracking, and compact text only for labels, document states, controls, codes, and marginal metadata.                | navigation, labels, tags, TOC metadata, callout headers |
| Reading | Keep `Source Serif 4` unless a reading test identifies a real problem.                                                                                             | paragraphs, lists, captions, long explanations          |

Display type should be used sparingly enough that a chapter title feels like an event. Body text should never be forced into a faux-terminal voice.

## Recomposition by experience

### 1. Cover: threshold

The cover remains spacious and visual. It should feel like a threshold rather than a landing-page sales panel.

- Preserve one primary action.
- Make that action a harder command surface: `> OPEN THE BOOK` is acceptable, but its supporting state can clarify that it enters the public project archive.
- Keep language and audience choices, but render them as compact state lines rather than three equivalent product controls.
- Add only restrained peripheral metadata if it reinforces the cover: edition, locale, or public-build status. No busy dashboard.

### 2. Project Home: transmission log

Home should stop behaving like an even grid of polite cards. It is the public transmission point for the project.

- Keep the book-resume CTA as the primary action.
- Give one content region visual dominance: a future `TRANSMISSION LOG`, `OPEN SOURCE PROTOCOL`, or contribution block.
- Present news and discussion as dated editorial entries or an intentionally empty log, rather than equal feature cards.
- Treat contribution as a protocol/action, not a generic footer link.

### 3. Table of Contents: index ledger

The TOC should be denser, calmer, and more book-like than the current introductory panel.

- Replace oversized summary cards with a compact document header: book identity, entry count, current reading state, and a single continue-reading action.
- Treat each group as a spread-like index block: a dominant group number in the left ledger rail, group name and description beside it, and compact chapter rows below.
- Remove repeated enclosure around individual entries. Entries should read as an index with strong rules, not as a card collection.
- Put chapter number, audience state, and draft status on one metadata line. Show summaries only when useful; they should not outrank the chapter title.
- GM-only-while-reading entries need a clear but non-security-coded restricted marker.

### 4. Reader: annotated chapter spread

The reader needs character through transitions and supporting structure, not through decoration inside every paragraph.

- Make the chapter opening a document masthead: large chapter index, title, subtitle, compact state row, and an assertive dividing rule.
- Preserve one-column prose at a readable measure. Do not imitate a printed two-page spread by forcing body prose into two columns.
- Use a quieter sidebar/rail. It should feel like a margin index or folio, not another panel competing with the chapter.
- Use generous intentional space before major `h2` breaks. Large section indexes may sit in the margin or behind the heading at low contrast.
- Let rich content deliberately break the rhythm: a figure, reference table, faction record, or campaign frame can become a spread-like full-width editorial object.
- Previous/next navigation should read like a book edge: paired chapter signals with a strong directional relationship, rather than two unrelated buttons.

### 5. Callouts and reader states: indexed documents

Callouts must stop being generic tinted rectangles.

| Existing semantic type | Proposed visible system label       | Character                                                                           |
| ---------------------- | ----------------------------------- | ----------------------------------------------------------------------------------- |
| `note`                 | `PUBLIC BUILD // NOTE`              | cyan index bar, document identifier, restrained content field                       |
| `warning`              | `SYSTEM CAUTION // ACTION REQUIRED` | amber rule and assertive label, never only an amber background                      |
| `example`              | `FIELD EXAMPLE // RECORD`           | editorial specimen treatment rather than a generic pink box                         |
| GM audience block      | `GM // RESTRICTED READING`          | magenta state marker plus explicit text; still public markup and not access control |

The first Iteration 4 pass should use real metadata only. Invented codes belong only in intentionally decorative marginal areas and must remain quiet.

## Navigation model

The global header becomes a compact archive control strip instead of a row of equal segmented controls.

Desktop direction:

```text
RETURN OF THE NIGHT // PUBLIC BUILD       HOME  INDEX
LANG: EN  |  THEME: DARK  |  MODE: PLAYER
```

- The active value should carry the visual state; inactive values should not each look like a button.
- `Home` always means the project Home. `Index` means the Table of Contents; this is clearer than the broad label `Book`.
- Keep controls keyboard-accessible and maintain the existing local preference behavior.
- On mobile, preserve the compact-menu behavior and expose the same state/action model without hiding essential navigation.

## Delivery order

### A. System foundations

1. Add a small, documented set of Iteration 4 tokens: typography roles, hard-frame geometry, document-state spacing, and theme-specific semantic accents.
2. Introduce a reusable system-label/document-state component or CSS pattern. Do not build a generic component library.
3. Rework the global control strip and the `Home` / `Index` labels.
4. Update dark, light, and paper tokens as distinct artifacts; validate contrast in all three.

### B. Reading surfaces

5. Recompose the TOC as a compact index ledger.
6. Recompose the chapter masthead, rail, section breaks, and chapter navigation.
7. Reframe callouts and audience blocks as indexed documents.
8. Apply the same grammar selectively to glossary interactions and the project Home.

### C. Verification and restraint

9. Test at desktop, tablet, and mobile widths in every theme and audience preference.
10. Extend browser/accessibility tests for theme persistence, compact navigation, reader headings, GM visual state, and contrast-sensitive components.
11. Conduct a final subtraction pass: remove any decorative system signal that does not improve orientation, atmosphere, or hierarchy.

## Acceptance criteria

Iteration 4 succeeds when the reader feels materially different without becoming harder to read:

- a reader can identify theme, chapter, place in the book, and reading preference at a glance;
- the TOC feels like a useful book index, not a dashboard or stack of cards;
- the Light and Paper themes communicate corporate and leaked-document identities respectively;
- chapter typography and state labels create memorable hierarchy;
- callouts have distinct system roles without relying on color alone;
- the experience remains calm during long-form reading; and
- a screenshot communicates Return of the Night before its title is read.
