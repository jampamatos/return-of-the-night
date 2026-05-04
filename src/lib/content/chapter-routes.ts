import type { ChapterEntry } from "./chapters";
import type { Locale } from "../../config/site";
import { BOOK_HOME_SEGMENT } from "./toc-conventions";

function trimSlashes(path: string): string {
  return path.replace(/^\/+|\/+$/g, "");
}

export function buildChapterReaderHref(
  lang: Locale,
  chapter: ChapterEntry,
): string {
  const slug = trimSlashes(chapter.data.slug);

  return `/${lang}/${BOOK_HOME_SEGMENT}/${slug}/`;
}
