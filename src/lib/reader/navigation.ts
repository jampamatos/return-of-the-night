import type { Locale } from "../../config/site";
import { buildChapterReaderHref } from "../content/chapter-routes";
import type { ChapterEntry } from "../content/chapters";
import type { ReaderAdjacentLink } from "./types";

export function buildReaderAdjacentLink(
  lang: Locale,
  chapter: ChapterEntry,
): ReaderAdjacentLink {
  return {
    href: buildChapterReaderHref(lang, chapter),
    chapterNumber: chapter.data.chapterNumber,
    chapterTitle: chapter.data.chapterTitle,
    pageTitle: chapter.data.pageTitle,
  };
}
