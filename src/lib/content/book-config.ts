import { getCollection, type CollectionEntry } from "astro:content";
import {
  CONTENT_COLLECTIONS,
  type BookId,
  type ContentLocale,
} from "./conventions";

type BookConfigCollectionName = typeof CONTENT_COLLECTIONS.bookConfig;

export type BookConfigEntry = CollectionEntry<BookConfigCollectionName>;

export interface BookConfigScope {
  lang: ContentLocale;
  book: BookId;
}

export function isBookConfigEntryInScope(
  entry: BookConfigEntry,
  scope: BookConfigScope,
): boolean {
  return entry.data.lang === scope.lang && entry.data.book === scope.book;
}

export async function listBookConfigEntries(): Promise<BookConfigEntry[]> {
  return getCollection(CONTENT_COLLECTIONS.bookConfig);
}

export async function listBookConfigEntriesByLanguageAndBook(
  scope: BookConfigScope,
): Promise<BookConfigEntry[]> {
  return getCollection(CONTENT_COLLECTIONS.bookConfig, (entry) =>
    isBookConfigEntryInScope(entry, scope),
  );
}

export async function getBookConfigEntryByLanguageAndBook(
  scope: BookConfigScope,
): Promise<BookConfigEntry | undefined> {
  const entries = await listBookConfigEntriesByLanguageAndBook(scope);

  return entries[0];
}
