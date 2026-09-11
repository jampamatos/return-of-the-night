import { describe, expect, it } from "vitest";
import type { ChapterEntry } from "../../src/lib/content/chapters";
import {
  TRANSLATION_UNAVAILABLE_FRAGMENT,
  buildLocalizedChapterHref,
} from "../../src/lib/content/localization";

const portugueseChapter = {
  data: {
    slug: "comecando/como-ler-o-livro",
  },
} as ChapterEntry;

describe("localized chapter routing", () => {
  it("uses the target locale's localized chapter slug", () => {
    expect(buildLocalizedChapterHref("pt-BR", portugueseChapter)).toBe(
      "/pt-BR/book/comecando/como-ler-o-livro/",
    );
  });

  it("uses an explicit Table of Contents fallback for a missing translation", () => {
    expect(buildLocalizedChapterHref("pt-BR", undefined)).toBe(
      `/pt-BR/book/#${TRANSLATION_UNAVAILABLE_FRAGMENT}`,
    );
  });
});
