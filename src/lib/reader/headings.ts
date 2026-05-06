import type { ReaderHeading, ReaderSidebarItem } from "./types";

export function normalizeReaderHeadings(
  headings: ReaderHeading[] | undefined,
): ReaderHeading[] {
  return (headings ?? []).flatMap((heading) => {
    const slug = heading.slug.trim();
    const text = heading.text.trim();

    if (heading.depth < 2 || heading.depth > 3 || !slug || !text) {
      return [];
    }

    return [
      {
        depth: heading.depth,
        slug,
        text,
      },
    ];
  });
}

export function buildReaderSidebarItems(
  headings: ReaderHeading[],
): ReaderSidebarItem[] {
  const items: ReaderSidebarItem[] = [];
  let currentLevelTwo: ReaderSidebarItem | undefined;

  for (const heading of headings) {
    const item: ReaderSidebarItem = {
      id: heading.slug,
      label: heading.text,
      href: `#${heading.slug}`,
      depth: heading.depth,
      children: [],
    };

    if (heading.depth === 2) {
      items.push(item);
      currentLevelTwo = item;
      continue;
    }

    if (heading.depth === 3 && currentLevelTwo) {
      currentLevelTwo.children.push(item);
      continue;
    }

    items.push(item);
  }

  return items;
}
