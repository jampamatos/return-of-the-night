import { getCollection, type CollectionEntry } from "astro:content";
import {
  CONTENT_COLLECTIONS,
  type ContentLocale,
} from "../content/conventions";

type GlossaryCollectionName = typeof CONTENT_COLLECTIONS.glossary;

export type GlossaryEntry = CollectionEntry<GlossaryCollectionName>;

export function isGlossaryEntryInLanguage(
  entry: GlossaryEntry,
  lang: ContentLocale,
): boolean {
  return entry.data.lang === lang;
}

export async function listGlossaryEntries(): Promise<GlossaryEntry[]> {
  return getCollection(CONTENT_COLLECTIONS.glossary);
}

export async function listGlossaryEntriesByLanguage(
  lang: ContentLocale,
): Promise<GlossaryEntry[]> {
  return getCollection(CONTENT_COLLECTIONS.glossary, (entry) =>
    isGlossaryEntryInLanguage(entry, lang),
  );
}

export async function getGlossaryEntryByLanguageAndId(
  lang: ContentLocale,
  glossaryId: GlossaryEntry["data"]["id"],
): Promise<GlossaryEntry | undefined> {
  const entries = await listGlossaryEntriesByLanguage(lang);

  return entries.find((entry) => entry.data.id === glossaryId);
}
