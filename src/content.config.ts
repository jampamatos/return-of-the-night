import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";

import { CONTENT_COLLECTIONS, CONTENT_PATHS } from "./lib/content/conventions";

import {
  bookConfigSchema,
  chaptersSchema,
  glossarySchema,
} from "./lib/content/schemas";

const chaptersCollection = defineCollection({
  loader: glob({
    base: `./${CONTENT_PATHS.chaptersRoot}`,
    pattern: "**/*.{md,mdx}",
  }),
  schema: chaptersSchema,
});

const glossaryCollection = defineCollection({
  loader: glob({
    base: `./${CONTENT_PATHS.glossaryRoot}`,
    pattern: "**/*.{md,mdx}",
  }),
  schema: glossarySchema,
});

const bookConfigCollection = defineCollection({
  loader: glob({
    base: `./${CONTENT_PATHS.configRoot}`,
    pattern: "**/*.{md,mdx,json,yaml,yml}",
  }),
  schema: bookConfigSchema,
});

export const collections = {
  [CONTENT_COLLECTIONS.chapters]: chaptersCollection,
  [CONTENT_COLLECTIONS.glossary]: glossaryCollection,
  [CONTENT_COLLECTIONS.bookConfig]: bookConfigCollection,
};
