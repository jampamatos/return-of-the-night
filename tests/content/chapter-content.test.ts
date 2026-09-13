import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

const chaptersRoot = fileURLToPath(
  new URL("../../src/content/chapters/", import.meta.url),
);

const requiredFields = [
  "id",
  "lang",
  "book",
  "chapterNumber",
  "chapterTitle",
  "pageTitle",
  "slug",
  "order",
  "summary",
  "audience",
  "status",
] as const;

interface ChapterSource {
  sourcePath: string;
  localeDirectory: string;
  fields: Record<string, string>;
  body: string;
}

function getFrontmatter(source: string): Record<string, string> {
  const match = source.match(/^---\r?\n(?<frontmatter>[\s\S]*?)\r?\n---/);
  const frontmatter = match?.groups?.frontmatter;

  if (!frontmatter) return {};

  return Object.fromEntries(
    frontmatter.split(/\r?\n/).flatMap((line) => {
      const field = line.match(
        /^(?<key>[A-Za-z][A-Za-z0-9]*):\s*(?<value>.+)$/,
      );

      if (!field?.groups?.key || !field.groups.value) return [];

      return [
        [
          field.groups.key,
          field.groups.value.trim().replace(/^['"]|['"]$/g, ""),
        ],
      ];
    }),
  );
}

async function listChapterSources(): Promise<ChapterSource[]> {
  const localeEntries = await readdir(chaptersRoot, { withFileTypes: true });
  const localeDirectories = localeEntries.filter((entry) =>
    entry.isDirectory(),
  );

  return Promise.all(
    localeDirectories.flatMap(async (localeDirectory) => {
      const localePath = `${chaptersRoot}${localeDirectory.name}`;
      const entries = await readdir(localePath, { withFileTypes: true });
      const chapterFiles = entries.filter(
        (entry) => entry.isFile() && entry.name.endsWith(".mdx"),
      );

      return Promise.all(
        chapterFiles.map(async (chapterFile) => {
          const sourcePath = `${localePath}/${chapterFile.name}`;
          const source = await readFile(sourcePath, "utf8");

          return {
            sourcePath,
            localeDirectory: localeDirectory.name,
            fields: getFrontmatter(source),
            body: source.replace(/^---[\s\S]*?\r?\n---\r?\n?/, ""),
          };
        }),
      );
    }),
  ).then((localizedSources) => localizedSources.flat());
}

describe("chapter source content", () => {
  it("has the required frontmatter and unique localized identities", async () => {
    const chapters = await listChapterSources();

    expect(chapters.length).toBeGreaterThan(0);

    const logicalIdentities = new Set<string>();
    const localizedRoutes = new Set<string>();

    for (const chapter of chapters) {
      for (const field of requiredFields) {
        expect(
          chapter.fields[field],
          `${chapter.sourcePath} needs ${field}`,
        ).toBeTruthy();
      }

      expect(chapter.fields.lang).toBe(chapter.localeDirectory);
      expect(Number.isFinite(Number(chapter.fields.chapterNumber))).toBe(true);
      expect(Number.isFinite(Number(chapter.fields.order))).toBe(true);
      const logicalIdentity = `${chapter.fields.lang}/${chapter.fields.book}/${chapter.fields.id}`;
      const localizedRoute = `${chapter.fields.lang}/${chapter.fields.slug}`;

      expect(logicalIdentities.has(logicalIdentity)).toBe(false);
      expect(localizedRoutes.has(localizedRoute)).toBe(false);

      logicalIdentities.add(logicalIdentity);
      localizedRoutes.add(localizedRoute);
    }
  });

  it("keeps the localized chapter maps aligned", async () => {
    const chapters = await listChapterSources();
    const chaptersByLocale = new Map(
      ["en", "pt-BR"].map((locale) => [
        locale,
        chapters
          .filter((chapter) => chapter.fields.lang === locale)
          .sort(
            (left, right) =>
              Number(left.fields.order) - Number(right.fields.order),
          ),
      ]),
    );

    const englishChapters = chaptersByLocale.get("en") ?? [];
    const portugueseChapters = chaptersByLocale.get("pt-BR") ?? [];

    expect(englishChapters.length).toBeGreaterThan(0);
    expect(portugueseChapters.length).toBeGreaterThan(0);
    expect(englishChapters.map((chapter) => chapter.fields.id)).toEqual(
      portugueseChapters.map((chapter) => chapter.fields.id),
    );

    for (const englishChapter of englishChapters) {
      const portugueseChapter = portugueseChapters.find(
        (chapter) => chapter.fields.id === englishChapter.fields.id,
      );

      expect(portugueseChapter).toBeDefined();
      expect(portugueseChapter?.fields.book).toBe(englishChapter.fields.book);
      expect(portugueseChapter?.fields.chapterNumber).toBe(
        englishChapter.fields.chapterNumber,
      );
      expect(portugueseChapter?.fields.order).toBe(englishChapter.fields.order);
      expect(portugueseChapter?.fields.audience).toBe(
        englishChapter.fields.audience,
      );
      expect(portugueseChapter?.fields.status).toBe(
        englishChapter.fields.status,
      );
    }
  });
});
