import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

const chapterRoot = fileURLToPath(
  new URL("../../src/content/chapters/", import.meta.url),
);
const glossaryRoot = fileURLToPath(
  new URL("../../src/content/glossary/", import.meta.url),
);
const termReferencePattern = /:term\[[^\]]+\]\{id="([a-z0-9-]+)"\}/g;

async function listMdxSources(root: string, locale: "en" | "pt-BR") {
  const entries = await readdir(`${root}${locale}`, { withFileTypes: true });

  return Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
      .map(async (entry) => ({
        path: `${root}${locale}/${entry.name}`,
        source: await readFile(`${root}${locale}/${entry.name}`, "utf8"),
      })),
  );
}

function getGlossaryIds(sources: Array<{ source: string }>) {
  return new Set(
    sources
      .map((entry) => entry.source.match(/^id:\s*([a-z0-9-]+)\s*$/m)?.[1])
      .filter((id): id is string => Boolean(id)),
  );
}

function getTermReferences(source: string) {
  return Array.from(source.matchAll(termReferencePattern), (match) => match[1]);
}

function getLogicalId(source: string): string | undefined {
  return source.match(/^id:\s*([a-z0-9-]+)\s*$/m)?.[1];
}

describe("glossary references", () => {
  it("resolves every inline term in its localized glossary", async () => {
    for (const locale of ["en", "pt-BR"] as const) {
      const [chapters, glossary] = await Promise.all([
        listMdxSources(chapterRoot, locale),
        listMdxSources(glossaryRoot, locale),
      ]);
      const glossaryIds = getGlossaryIds(glossary);
      const references = chapters.flatMap((chapter) =>
        getTermReferences(chapter.source).map((id) => ({
          id,
          path: chapter.path,
        })),
      );

      expect(
        references,
        `${locale} needs an inline glossary fixture`,
      ).not.toHaveLength(0);

      for (const reference of references) {
        expect(
          glossaryIds,
          `${reference.path} references ${reference.id}`,
        ).toContain(reference.id);
      }
    }
  });

  it("keeps inline glossary references aligned across translated chapters", async () => {
    const [englishChapters, portugueseChapters] = await Promise.all([
      listMdxSources(chapterRoot, "en"),
      listMdxSources(chapterRoot, "pt-BR"),
    ]);
    const portugueseReferencesByChapterId = new Map(
      portugueseChapters.map((chapter) => [
        getLogicalId(chapter.source),
        getTermReferences(chapter.source).sort(),
      ]),
    );

    for (const englishChapter of englishChapters) {
      const chapterId = getLogicalId(englishChapter.source);

      expect(chapterId, `${englishChapter.path} needs id`).toBeTruthy();
      expect(portugueseReferencesByChapterId.has(chapterId)).toBe(true);
      expect(getTermReferences(englishChapter.source).sort()).toEqual(
        portugueseReferencesByChapterId.get(chapterId),
      );
    }
  });
});
