import type { BookConfigEntry } from "./book-config";
import type { ChapterEntry } from "./chapters";
import type { ChapterAudience } from "../reader/types";
import { TOC_GROUPING } from "./toc-conventions";

type TocGroupDefinition = BookConfigEntry["data"]["chapterGroups"][number];

export interface TocGroup {
  id: string;
  label: string;
  description?: string;
  order: number;
  audience: ChapterAudience;
  entries: ChapterEntry[];
}

export function getEffectiveChapterAudience(
  chapter: ChapterEntry,
  bookConfig: BookConfigEntry | undefined,
): ChapterAudience {
  const group = bookConfig?.data.chapterGroups.find((candidate) =>
    candidate.chapterNumbers.includes(chapter.data.chapterNumber),
  );

  if (chapter.data.audience === "gm" || group?.audience === "gm") {
    return "gm";
  }

  if (chapter.data.audience === "player" || group?.audience === "player") {
    return "player";
  }

  return "all";
}

export function groupOrderedChapterEntriesForToc(
  chapters: ChapterEntry[],
  bookConfig: BookConfigEntry | undefined,
): TocGroup[] {
  const groupDefinitions: TocGroupDefinition[] =
    bookConfig?.data.chapterGroups ?? [];

  const configuredGroups = groupDefinitions.map((group) => ({
    id: group.id,
    label: group.label,
    description: group.description,
    order: group.order,
    audience: group.audience,
    entries: chapters.filter((chapter) =>
      group.chapterNumbers.includes(chapter.data.chapterNumber),
    ),
  }));

  const groups = TOC_GROUPING.renderEmptyGroups
    ? configuredGroups
    : configuredGroups.filter((group) => group.entries.length > 0);

  const groupedChapterIds = new Set(
    groups.flatMap((group) => group.entries.map((entry) => entry.id)),
  );

  if (TOC_GROUPING.includeUngroupedEntries) {
    const ungroupedEntries = chapters.filter(
      (chapter) => !groupedChapterIds.has(chapter.id),
    );

    if (ungroupedEntries.length > 0) {
      groups.push({
        id: "ungrouped",
        label: "Ungrouped",
        description: undefined,
        order: Number.MAX_SAFE_INTEGER,
        audience: "all",
        entries: ungroupedEntries,
      });
    }
  }

  if (TOC_GROUPING.preserveConfiguredOrder) {
    return [...groups].sort((left, right) => left.order - right.order);
  }

  return groups;
}
