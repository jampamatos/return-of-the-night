import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import remarkDirective from "remark-directive";
import { remarkReaderAudience } from "./src/lib/reader/rich-content/remark-reader-audience.mjs";
import { remarkReaderCallouts } from "./src/lib/reader/rich-content/remark-reader-callouts.mjs";
import { remarkReaderColumns } from "./src/lib/reader/rich-content/remark-reader-columns.mjs";
import { remarkReaderFigures } from "./src/lib/reader/rich-content/remark-reader-figures.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      remarkPlugins: [
        remarkDirective,
        remarkReaderCallouts,
        remarkReaderColumns,
        remarkReaderFigures,
        remarkReaderAudience,
      ],
    }),
  ],
});
