import { describe, expect, it } from "vitest";
import { getThemeOrDefault } from "../../src/config/site";

describe("theme preference", () => {
  it("accepts dark and light everywhere", () => {
    expect(getThemeOrDefault("dark")).toBe("dark");
    expect(getThemeOrDefault("light")).toBe("light");
  });

  it("limits paper to book routes that explicitly support it", () => {
    expect(getThemeOrDefault("paper")).toBe("dark");
    expect(getThemeOrDefault("paper", true)).toBe("paper");
  });

  it("falls back safely for an unknown saved value", () => {
    expect(getThemeOrDefault("neon")).toBe("dark");
  });
});
