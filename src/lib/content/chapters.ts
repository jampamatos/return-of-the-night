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

export function compareChapterEntriesByReadingOrder(
  left: ChapterEntry,
  right: ChapterEntry,
): number {
  const orderDifference = left.data.order - right.data.order;
  if (orderDifference !== 0) return orderDifference;

  const chapterNumberDifference =
    left.data.chapterNumber - right.data.chapterNumber;
  if (chapterNumberDifference !== 0) return chapterNumberDifference;

  return left.data.id.localeCompare(right.data.id);
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

export async function listOrderedChapterEntriesByLanguageAndBook(
  scope: ChapterScope,
): Promise<ChapterEntry[]> {
  const chapters = await listChapterEntriesByLanguageAndBook(scope);

  return [...chapters].sort(compareChapterEntriesByReadingOrder);
}
