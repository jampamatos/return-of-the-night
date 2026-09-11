import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const glossaryRoot = path.resolve(process.cwd(), "src/content/glossary");

function getGlossaryIds() {
  if (!existsSync(glossaryRoot)) {
    return new Set();
  }

  const ids = new Set();

  for (const locale of readdirSync(glossaryRoot, { withFileTypes: true })) {
    if (!locale.isDirectory()) continue;

    const localePath = path.join(glossaryRoot, locale.name);

    for (const entry of readdirSync(localePath, { withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith(".mdx")) continue;

      const source = readFileSync(path.join(localePath, entry.name), "utf8");
      const id = source.match(/^id:\s*([a-z0-9-]+)\s*$/m)?.[1];

      if (id) ids.add(id);
    }
  }

  return ids;
}

function transformGlossaryTerms(parent, glossaryIds) {
  if (!Array.isArray(parent?.children)) return;

  for (const child of parent.children) {
    if (child?.type === "textDirective" && child.name === "term") {
      const id = child.attributes?.id;

      if (typeof id !== "string" || id.length === 0) {
        throw new Error(
          'Glossary terms must use :term[Localized label]{id="stable-term-id"}.',
        );
      }

      if (!glossaryIds.has(id)) {
        throw new Error(`Glossary term \"${id}\" does not have an entry.`);
      }

      child.data = {
        ...child.data,
        hName: "button",
        hProperties: {
          ...child.data?.hProperties,
          type: "button",
          className: ["reader-glossary-term"],
          "data-glossary-id": id,
          "aria-controls": "reader-glossary-popover",
          "aria-expanded": "false",
          "aria-haspopup": "dialog",
        },
      };
    }

    transformGlossaryTerms(child, glossaryIds);
  }
}

export function remarkReaderGlossary() {
  const glossaryIds = getGlossaryIds();

  return function transform(tree) {
    transformGlossaryTerms(tree, glossaryIds);
  };
}
