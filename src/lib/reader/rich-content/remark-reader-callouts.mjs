const CALLOUT_LABELS = {
  example: "Example",
  note: "Note",
  warning: "Warning",
};

function isCalloutDirective(node) {
  return (
    node?.type === "containerDirective" &&
    Object.hasOwn(CALLOUT_LABELS, node.name)
  );
}

function getTextContent(node) {
  if (node?.type === "text") return node.value;
  if (!Array.isArray(node?.children)) return "";

  return node.children.map((child) => getTextContent(child)).join("");
}

function getDirectiveLabel(node) {
  const firstChild = node.children?.[0];

  if (!firstChild?.data?.directiveLabel) {
    return {
      children: [{ type: "text", value: CALLOUT_LABELS[node.name] }],
      text: CALLOUT_LABELS[node.name],
    };
  }

  node.children.shift();

  return {
    children: firstChild.children ?? [
      { type: "text", value: CALLOUT_LABELS[node.name] },
    ],
    text: getTextContent(firstChild).trim() || CALLOUT_LABELS[node.name],
  };
}

function createCalloutLabelNode(labelChildren) {
  return {
    type: "paragraph",
    data: {
      hName: "p",
      hProperties: {
        className: ["reader-callout__label"],
      },
    },
    children: labelChildren,
  };
}

function transformCalloutDirective(node) {
  const label = getDirectiveLabel(node);

  node.data = {
    ...node.data,
    hName: "aside",
    hProperties: {
      ...node.data?.hProperties,
      "aria-label": label.text,
      className: ["reader-callout", `reader-callout--${node.name}`],
      "data-reader-callout": node.name,
      "data-reader-rich-content": "callout",
      role: "note",
    },
  };

  node.children = [
    createCalloutLabelNode(label.children),
    ...(node.children ?? []),
  ];
}

function transformCallouts(parent) {
  if (!Array.isArray(parent?.children)) return;

  for (const child of parent.children) {
    if (isCalloutDirective(child)) {
      transformCalloutDirective(child);
    }

    transformCallouts(child);
  }
}

export function remarkReaderCallouts() {
  return function transform(tree) {
    transformCallouts(tree);
  };
}
