import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

interface BookConfig {
  book: string;
  lang: string;
  chapterGroups: Array<{
    id: string;
    order: number;
    audience?: "all" | "player" | "gm";
    chapterNumbers: number[];
  }>;
}

async function readBookConfig(locale: "en" | "pt-BR"): Promise<BookConfig> {
  const sourcePath = fileURLToPath(
    new URL(`../../src/content/config/core.${locale}.json`, import.meta.url),
  );

  return JSON.parse(await readFile(sourcePath, "utf8")) as BookConfig;
}

describe("localized book configuration", () => {
  it("keeps chapter-group identities and membership aligned", async () => {
    const [englishConfig, portugueseConfig] = await Promise.all([
      readBookConfig("en"),
      readBookConfig("pt-BR"),
    ]);

    expect(englishConfig.book).toBe("core");
    expect(portugueseConfig.book).toBe("core");
    expect(englishConfig.lang).toBe("en");
    expect(portugueseConfig.lang).toBe("pt-BR");
    expect(
      portugueseConfig.chapterGroups.map(
        ({ id, order, audience = "all", chapterNumbers }) => ({
          id,
          order,
          audience,
          chapterNumbers,
        }),
      ),
    ).toEqual(
      englishConfig.chapterGroups.map(
        ({ id, order, audience = "all", chapterNumbers }) => ({
          id,
          order,
          audience,
          chapterNumbers,
        }),
      ),
    );
  });
});
