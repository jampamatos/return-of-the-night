import { describe, expect, it } from "vitest";
import {
  getLastReaderStorageKey,
  isReaderPathForLocale,
} from "../../src/lib/reader/last-reader";

describe("last reader paths", () => {
  it("uses a locale-specific storage key", () => {
    expect(getLastReaderStorageKey("en")).toBe("rotn:last-reader-path:en");
    expect(getLastReaderStorageKey("pt-BR")).toBe(
      "rotn:last-reader-path:pt-BR",
    );
  });

  it("accepts only localized chapter routes", () => {
    expect(
      isReaderPathForLocale("/en/book/getting-started/reading-the-book/", "en"),
    ).toBe(true);
    expect(
      isReaderPathForLocale("/pt-BR/book/comecando/como-ler-o-livro/", "pt-BR"),
    ).toBe(true);
    expect(isReaderPathForLocale("/en/book/", "en")).toBe(false);
    expect(isReaderPathForLocale("/pt-BR/book/comecando/", "en")).toBe(false);
    expect(isReaderPathForLocale("https://example.com/", "en")).toBe(false);
  });
});
