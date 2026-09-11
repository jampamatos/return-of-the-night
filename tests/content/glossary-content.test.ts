import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

const glossaryRoot = fileURLToPath(
  new URL("../../src/content/glossary/", import.meta.url),
);

function getField(source: string, field: string): string | undefined {
  return source.match(new RegExp(`^${field}:\\s*(.+)$`, "m"))?.[1]?.trim();
}

async function listGlossaryIds(locale: "en" | "pt-BR") {
  const localePath = `${glossaryRoot}${locale}`;
  const entries = await readdir(localePath, { withFileTypes: true });

  return Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
      .map(async (entry) => {
        const source = await readFile(`${localePath}/${entry.name}`, "utf8");

        return {
          sourcePath: `${localePath}/${entry.name}`,
          id: getField(source, "id"),
          lang: getField(source, "lang"),
          type: getField(source, "type"),
        };
      }),
  );
}

describe("placeholder glossary content", () => {
  it("keeps the same stable glossary IDs in both locales", async () => {
    const [englishEntries, portugueseEntries] = await Promise.all([
      listGlossaryIds("en"),
      listGlossaryIds("pt-BR"),
    ]);

    for (const entry of [...englishEntries, ...portugueseEntries]) {
      expect(entry.id, `${entry.sourcePath} needs id`).toBeTruthy();
    }

    expect(englishEntries.map((entry) => entry.lang)).toEqual(
      Array(englishEntries.length).fill("en"),
    );
    expect(portugueseEntries.map((entry) => entry.lang)).toEqual(
      Array(portugueseEntries.length).fill("pt-BR"),
    );

    expect(englishEntries.map((entry) => entry.id).sort()).toEqual([
      "access-chip",
      "arcology",
      "corporate-heat",
      "endless-day",
      "exposure",
      "night-network",
    ]);
    expect(portugueseEntries.map((entry) => entry.id).sort()).toEqual(
      englishEntries.map((entry) => entry.id).sort(),
    );

    for (const englishEntry of englishEntries) {
      const portugueseEntry = portugueseEntries.find(
        (entry) => entry.id === englishEntry.id,
      );

      expect(portugueseEntry?.type).toBe(englishEntry.type);
    }
  });
});
