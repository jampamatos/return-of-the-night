import type { Locale } from "../../config/site";
import { buildChapterReaderHref } from "./chapter-routes";
import type { ChapterEntry } from "./chapters";

export const TRANSLATION_UNAVAILABLE_FRAGMENT = "translation-unavailable";

export function buildLocalizedChapterHref(
  targetLocale: Locale,
  targetChapter: ChapterEntry | undefined,
): string {
  if (targetChapter) {
    return buildChapterReaderHref(targetLocale, targetChapter);
  }

  return `/${targetLocale}/book/#${TRANSLATION_UNAVAILABLE_FRAGMENT}`;
}
