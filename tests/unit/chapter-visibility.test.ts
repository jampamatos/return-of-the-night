import { describe, expect, it } from "vitest";

import { isChapterVisibleForAudience } from "../../src/lib/audience/chapter-visibility";

describe("chapter audience visibility", () => {
  it("hides GM-facing chapters for Player reading mode", () => {
    expect(isChapterVisibleForAudience("all", "player")).toBe(true);
    expect(isChapterVisibleForAudience("player", "player")).toBe(true);
    expect(isChapterVisibleForAudience("gm", "player")).toBe(false);
  });

  it("keeps every chapter visible for GM reading mode", () => {
    expect(isChapterVisibleForAudience("all", "gm")).toBe(true);
    expect(isChapterVisibleForAudience("player", "gm")).toBe(true);
    expect(isChapterVisibleForAudience("gm", "gm")).toBe(true);
  });
});
