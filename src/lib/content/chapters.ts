import { getCollection, type CollectionEntry } from "astro:content";
import {
  CONTENT_COLLECTIONS,
  type BookId,
  type ContentLocale,
} from "./conventions";

type ChaptersCollectionName = typeof CONTENT_COLLECTIONS.chapters;

export type ChapterEntry = CollectionEntry<ChaptersCollectionName>;

export interface ChapterScope {
  lang: ContentLocale;
  book: BookId;
}

export function isChapterEntryInScope(
  entry: ChapterEntry,
  scope: ChapterScope,
): boolean {
  return entry.data.lang === scope.lang && entry.data.book === scope.book;
}

export async function listChapterEntries(): Promise<ChapterEntry[]> {
  return getCollection(CONTENT_COLLECTIONS.chapters);
}

export async function listChapterEntriesByLanguageAndBook(
  scope: ChapterScope,
): Promise<ChapterEntry[]> {
  return getCollection(CONTENT_COLLECTIONS.chapters, (entry) =>
    isChapterEntryInScope(entry, scope),
  );
}
