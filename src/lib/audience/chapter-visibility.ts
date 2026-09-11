import type { Audience } from "../../config/site";
import type { ChapterAudience } from "../reader/types";

export function isChapterVisibleForAudience(
  chapterAudience: ChapterAudience,
  audience: Audience,
): boolean {
  return audience === "gm" || chapterAudience !== "gm";
}
