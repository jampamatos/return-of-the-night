import { LOCALES, type Locale } from "../../config/site";

export { LOCALES };
export type ContentLocale = Locale;

export const CONTENT_COLLECTIONS = {
  chapters: "chapters",
  glossary: "glossary",
  bookConfig: "book-config",
} as const;

export type ContentCollectionName =
  (typeof CONTENT_COLLECTIONS)[keyof typeof CONTENT_COLLECTIONS];

// Phase 3 targets one MVP book, but keeps the identifier typed for future growth.
export const BOOK_IDS = ["core"] as const;
export type BookId = (typeof BOOK_IDS)[number];
export const MVP_BOOK_ID: BookId = "core";

export const CONTENT_PATHS = {
  chaptersRoot: "src/content/chapters",
  glossaryRoot: "src/content/glossary",
  configRoot: "src/content/config",
} as const;

// Equivalent entries across locales must keep the same logical id.
export const SHARED_LOGICAL_ID_RULE =
  "Equivalent localized entries must share the same logical id." as const;

export function getChaptersDirectory(locale: ContentLocale): string {
  return `${CONTENT_PATHS.chaptersRoot}/${locale}`;
}

export function getGlossaryDirectory(locale: ContentLocale): string {
  return `${CONTENT_PATHS.glossaryRoot}/${locale}`;
}
