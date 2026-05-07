import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import { remarkReaderFigures } from "./src/lib/reader/rich-content/remark-reader-figures.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      remarkPlugins: [remarkReaderFigures],
    }),
  ],
});
