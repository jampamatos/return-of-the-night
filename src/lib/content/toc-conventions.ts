import { MVP_BOOK_ID } from "./conventions";

export const BOOK_HOME_SEGMENT = "book" as const;

export const BOOK_HOME_ROUTE_PATTERN = `/{lang}/${BOOK_HOME_SEGMENT}/` as const;

export const TOC_SCOPE = {
  book: MVP_BOOK_ID,
  localeMode: "active-only",
  allowCrossLocaleFallback: false,
} as const;

export const TOC_GROUPING = {
  source: "book-config.chapterGroups",
  membershipKey: "chapterNumber",
  preserveConfiguredOrder: true,
  renderEmptyGroups: false,
  includeUngroupedEntries: true,
} as const;

export const BOOK_HOME_LABEL_BOUNDARY = {
  usesBookConfigFields: ["bookTitle", "bookSubtitle"] as const,
  usesNavigationLabels: ["tableOfContents"] as const,
  defersNavigationLabels: [
    "previousChapter",
    "nextChapter",
    "glossary",
  ] as const,
} as const;

export const DEFERRED_READER_BEHAVIORS = [
  "chapter-reader-route",
  "mdx-rendering-pages",
  "current-chapter-sidebar",
  "heading-anchors",
  "deep-links",
  "reader-previous-next-navigation",
] as const;
