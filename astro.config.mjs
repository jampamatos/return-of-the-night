import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";

import mdx from "@astrojs/mdx";
import remarkDirective from "remark-directive";
import { remarkReaderAudience } from "./src/lib/reader/rich-content/remark-reader-audience.mjs";
import { remarkReaderCallouts } from "./src/lib/reader/rich-content/remark-reader-callouts.mjs";
import { remarkReaderColumns } from "./src/lib/reader/rich-content/remark-reader-columns.mjs";
import { remarkReaderFigures } from "./src/lib/reader/rich-content/remark-reader-figures.mjs";
import { remarkReaderGlossary } from "./src/lib/reader/rich-content/remark-reader-glossary.mjs";

// https://astro.build/config
export default defineConfig({
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkDirective,
        remarkReaderCallouts,
        remarkReaderColumns,
        remarkReaderFigures,
        remarkReaderAudience,
        remarkReaderGlossary,
      ],
    }),
  },
  integrations: [mdx()],
});
