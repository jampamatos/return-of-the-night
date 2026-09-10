import { describe, expect, it } from "vitest";

import {
  buildLocalHref,
  getDefaultLocaleHref,
  getPathWithoutLocale,
  getSafeLocaleFromPath,
} from "../../src/utils/locale-routing";

describe("locale routing", () => {
  it("removes a recognized locale without changing ordinary paths", () => {
    expect(getPathWithoutLocale("/pt-BR/book/world/")).toBe("/book/world");
    expect(getPathWithoutLocale("en")).toBe("/");
    expect(getPathWithoutLocale("book/world")).toBe("/book/world");
  });

  it("builds locale-aware hrefs from localized and unlocalized paths", () => {
    expect(buildLocalHref("en", "/pt-BR/book/world/")).toBe("/en/book/world");
    expect(buildLocalHref("pt-BR", "/")).toBe("/pt-BR/");
    expect(getDefaultLocaleHref("/book/")).toBe("/en/book/");
  });

  it("uses the default locale for unknown route prefixes", () => {
    expect(getSafeLocaleFromPath("/pt-BR/book/")).toBe("pt-BR");
    expect(getSafeLocaleFromPath("/unknown/book/")).toBe("en");
  });
});
