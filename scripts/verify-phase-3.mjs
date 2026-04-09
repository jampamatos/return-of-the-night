import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { parse } from "devalue";

const rootDir = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const storePath = path.join(rootDir, ".astro", "data-store.json");
const pagesDir = path.join(rootDir, "src", "pages");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function readContentStore() {
  assert(
    fs.existsSync(storePath),
    'Missing ".astro/data-store.json". Run `npm run typecheck` first.',
  );

  return parse(fs.readFileSync(storePath, "utf8"));
}

function getCollectionEntries(store, collectionName) {
  const collection = store.get(collectionName);

  assert(
    collection instanceof Map,
    `Missing collection "${collectionName}" in content store.`,
  );

  return [...collection.values()];
}

function compareChapterEntriesByReadingOrder(left, right) {
  const orderDifference = left.data.order - right.data.order;
  if (orderDifference !== 0) return orderDifference;

  const chapterNumberDifference =
    left.data.chapterNumber - right.data.chapterNumber;
  if (chapterNumberDifference !== 0) return chapterNumberDifference;

  return left.data.id.localeCompare(right.data.id);
}

function getAdjacentChapterEntries(chapters, currentChapterId) {
  const currentIndex = chapters.findIndex(
    (entry) => entry.data.id === currentChapterId,
  );

  if (currentIndex === -1) {
    return undefined;
  }

  return {
    previous: chapters[currentIndex - 1],
    current: chapters[currentIndex],
    next: chapters[currentIndex + 1],
  };
}

function findEntryByLanguageAndId(entries, lang, logicalId) {
  return entries.find(
    (entry) => entry.data.lang === lang && entry.data.id === logicalId,
  );
}

function listPageFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      listPageFiles(fullPath, files);
      continue;
    }

    files.push(path.relative(rootDir, fullPath).replaceAll(path.sep, "/"));
  }

  return files.sort();
}

function verifyPhaseBoundary() {
  const expectedPageFiles = [
    "src/pages/[lang]/index.astro",
    "src/pages/[lang]/shell/index.astro",
    "src/pages/index.astro",
  ];

  const actualPageFiles = listPageFiles(pagesDir);

  assert(
    JSON.stringify(actualPageFiles) === JSON.stringify(expectedPageFiles),
    `Phase 3 boundary changed. Expected routes ${expectedPageFiles.join(", ")} but found ${actualPageFiles.join(", ")}.`,
  );
}

function main() {
  const store = readContentStore();

  const chapterEntries = getCollectionEntries(store, "chapters");
  const glossaryEntries = getCollectionEntries(store, "glossary");
  const bookConfigEntries = getCollectionEntries(store, "book-config");

  assert(
    bookConfigEntries.length >= 1,
    "Expected at least one book-config entry.",
  );
  assert(
    chapterEntries.length >= 3,
    "Expected localized chapter entries to load from content.",
  );
  assert(
    glossaryEntries.length >= 3,
    "Expected localized glossary entries to load from content.",
  );

  const enCoreChapters = chapterEntries
    .filter((entry) => entry.data.lang === "en" && entry.data.book === "core")
    .sort(compareChapterEntriesByReadingOrder);

  assert(
    enCoreChapters.length === 2,
    "Expected exactly two English core chapters for Phase 3 verification.",
  );
  assert(
    enCoreChapters.map((entry) => entry.data.id).join(",") === "test-1,test-2",
    "English chapter ordering did not match the expected reading order.",
  );

  const firstChapterAdjacency = getAdjacentChapterEntries(
    enCoreChapters,
    "test-1",
  );
  assert(
    firstChapterAdjacency,
    'Expected adjacency metadata for chapter "test-1".',
  );
  assert(
    firstChapterAdjacency.previous === undefined,
    'Expected "test-1" to have no previous chapter.',
  );
  assert(
    firstChapterAdjacency.current.data.id === "test-1",
    'Expected current chapter to resolve to "test-1".',
  );
  assert(
    firstChapterAdjacency.next?.data.id === "test-2",
    'Expected "test-2" to be the next chapter after "test-1".',
  );

  const secondChapterAdjacency = getAdjacentChapterEntries(
    enCoreChapters,
    "test-2",
  );
  assert(
    secondChapterAdjacency,
    'Expected adjacency metadata for chapter "test-2".',
  );
  assert(
    secondChapterAdjacency.previous?.data.id === "test-1",
    'Expected "test-1" to be the previous chapter before "test-2".',
  );
  assert(
    secondChapterAdjacency.next === undefined,
    'Expected "test-2" to have no next chapter.',
  );

  const enGlossaryEntries = glossaryEntries.filter(
    (entry) => entry.data.lang === "en",
  );
  const ptBrGlossaryEntries = glossaryEntries.filter(
    (entry) => entry.data.lang === "pt-BR",
  );

  assert(
    enGlossaryEntries.length >= 2,
    "Expected at least two English glossary entries.",
  );
  assert(
    ptBrGlossaryEntries.length >= 1,
    "Expected at least one PT-BR glossary entry.",
  );

  const enRule = findEntryByLanguageAndId(glossaryEntries, "en", "test-rule");
  const ptBrRule = findEntryByLanguageAndId(
    glossaryEntries,
    "pt-BR",
    "test-rule",
  );

  assert(enRule, 'Expected English glossary entry "test-rule".');
  assert(ptBrRule, 'Expected PT-BR glossary entry "test-rule".');
  assert(
    enRule.data.id === ptBrRule.data.id,
    "Expected localized glossary entries to share the same logical id.",
  );

  const enChapterMirror = findEntryByLanguageAndId(
    chapterEntries,
    "en",
    "test-1",
  );
  const ptBrChapterMirror = findEntryByLanguageAndId(
    chapterEntries,
    "pt-BR",
    "test-1",
  );

  assert(enChapterMirror, 'Expected English chapter entry "test-1".');
  assert(ptBrChapterMirror, 'Expected PT-BR chapter entry "test-1".');
  assert(
    enChapterMirror.data.id === ptBrChapterMirror.data.id,
    "Expected localized chapter entries to share the same logical id.",
  );

  verifyPhaseBoundary();

  console.log("Phase 3 verification passed.");
  console.log(`- book-config entries: ${bookConfigEntries.length}`);
  console.log(`- chapter entries: ${chapterEntries.length}`);
  console.log(`- glossary entries: ${glossaryEntries.length}`);
  console.log(
    `- ordered English core chapters: ${enCoreChapters.map((entry) => entry.data.id).join(" -> ")}`,
  );
  console.log(
    '- localized logical-id examples: chapters("test-1"), glossary("test-rule")',
  );
  console.log("- boundary check: no Phase 4/5 routes detected");
}

main();
