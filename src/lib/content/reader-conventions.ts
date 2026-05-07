import { MVP_BOOK_ID } from "./conventions";
import {
  BOOK_HOME_SEGMENT,
  CHAPTER_READER_ROUTE_PATTERN,
} from "./toc-conventions";

// The reader must complete the chapter path already promised by the Table of Contents.
// Do not introduce a parallel reader route unless the TOC contract changes first.
export const READER_ROUTE = {
  segment: BOOK_HOME_SEGMENT,
  pattern: CHAPTER_READER_ROUTE_PATTERN,
  source: "toc-generated-chapter-links",
  hrefBuilder: "buildChapterReaderHref",
} as const;

// Reader pages are part of the existing site shell, not standalone documents.
// They must keep the same locale-aware layout and shared controls used by book-home pages.
export const READER_SHELL_RULES = {
  preserveSharedShell: true,
  preserveLocaleFromRoute: true,
  preserveHeaderControls: ["language-switcher", "audience-switcher"] as const,
} as const;

// The reader sidebar is local navigation for the current chapter only.
// Book-wide navigation, glossary behavior, and richer reader tools belong outside this core reader contract.
export const READER_SIDEBAR_SCOPE = {
  book: MVP_BOOK_ID,
  source: "current-chapter-headings",
  includeOnlyCurrentChapter: true,
  allowBookWideSectionNavigation: false,
  allowCrossChapterSectionNavigation: false,
} as const;

// The reader owns stable heading targets and basic hash navigation.
// The visual polish of anchor links can evolve later, but IDs must stay predictable.
export const READER_ANCHOR_RULES = {
  source: "current-chapter-headings",
  idBehavior: "stable-slug",
  supportsSamePageHashLinks: true,
  supportsDirectLoadHashLinks: true,
} as const;

export const READER_CORE_SCOPE = [
  "chapter-reader-route",
  "content-driven-static-paths",
  "current-chapter-entry-loading",
  "plain-mdx-body-rendering",
  "shared-shell-preservation",
  "chapter-level-orientation",
  "current-chapter-heading-extraction",
  "current-chapter-sidebar",
  "reader-previous-next-navigation",
  "stable-heading-anchors",
  "working-section-deep-links",
  "minimal-reader-empty-states",
] as const;

export const READER_DEFERRED_SCOPE = [
  "columns",
  "callouts",
  "expanded-audience-conditional-block-rendering",
  "glossary-hover-cards",
  "localization-consolidation-or-fallback-logic",
  "reader-visual-polish",
] as const;
