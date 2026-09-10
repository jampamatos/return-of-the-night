import { describe, expect, it } from "vitest";

import {
  buildReaderSidebarItems,
  normalizeReaderHeadings,
} from "../../src/lib/reader/headings";

describe("reader headings", () => {
  it("keeps only meaningful second- and third-level headings", () => {
    expect(
      normalizeReaderHeadings([
        { depth: 1, slug: "chapter", text: "Chapter" },
        { depth: 2, slug: " section ", text: " Section " },
        { depth: 3, slug: "subsection", text: "Subsection" },
        { depth: 4, slug: "detail", text: "Detail" },
        { depth: 2, slug: "", text: "Missing slug" },
      ]),
    ).toEqual([
      { depth: 2, slug: "section", text: "Section" },
      { depth: 3, slug: "subsection", text: "Subsection" },
    ]);
  });

  it("nests third-level headings under the latest second-level heading", () => {
    const items = buildReaderSidebarItems([
      { depth: 3, slug: "intro-note", text: "Intro note" },
      { depth: 2, slug: "rules", text: "Rules" },
      { depth: 3, slug: "checks", text: "Checks" },
      { depth: 2, slug: "travel", text: "Travel" },
    ]);

    expect(items).toEqual([
      {
        id: "intro-note",
        label: "Intro note",
        href: "#intro-note",
        depth: 3,
        children: [],
      },
      {
        id: "rules",
        label: "Rules",
        href: "#rules",
        depth: 2,
        children: [
          {
            id: "checks",
            label: "Checks",
            href: "#checks",
            depth: 3,
            children: [],
          },
        ],
      },
      {
        id: "travel",
        label: "Travel",
        href: "#travel",
        depth: 2,
        children: [],
      },
    ]);
  });
});
