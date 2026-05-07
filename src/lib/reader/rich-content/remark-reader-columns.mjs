function isColumnsDirective(node) {
  return node?.type === "containerDirective" && node.name === "columns";
}

function isColumnDirective(node) {
  return node?.type === "containerDirective" && node.name === "column";
}

function isDirectiveClosingParagraph(node) {
  return (
    node?.type === "paragraph" &&
    node.children?.length === 1 &&
    node.children[0]?.type === "text" &&
    node.children[0].value.trim() === ":::"
  );
}

function setElementName(node, elementName, elementProperties = {}) {
  node.data = {
    ...node.data,
    hName: elementName,
    hProperties: {
      ...node.data?.hProperties,
      ...elementProperties,
    },
  };
}

function transformColumnDirective(node) {
  setElementName(node, "div", {
    className: ["reader-column"],
    "data-reader-rich-content": "column",
  });
}

function collectColumnSiblings(parent, startIndex) {
  const columnsNode = parent.children[startIndex];
  const followingColumns = [];
  let cursor = startIndex + 1;

  while (isColumnDirective(parent.children[cursor])) {
    followingColumns.push(parent.children[cursor]);
    cursor += 1;
  }

  const hasClosingParagraph = isDirectiveClosingParagraph(
    parent.children[cursor],
  );
  const deleteCount = followingColumns.length + (hasClosingParagraph ? 1 : 0);

  if (deleteCount > 0) {
    parent.children.splice(startIndex + 1, deleteCount);
  }

  columnsNode.children = [...(columnsNode.children ?? []), ...followingColumns];
}

function transformColumnsDirective(parent, index) {
  const columnsNode = parent.children[index];

  collectColumnSiblings(parent, index);

  setElementName(columnsNode, "div", {
    className: ["reader-columns"],
    "data-reader-rich-content": "columns",
  });

  columnsNode.children = (columnsNode.children ?? []).filter((child) =>
    isColumnDirective(child),
  );

  for (const child of columnsNode.children) {
    transformColumnDirective(child);
  }
}

function transformColumns(parent) {
  if (!Array.isArray(parent?.children)) return;

  for (let index = 0; index < parent.children.length; index += 1) {
    const child = parent.children[index];

    if (isColumnsDirective(child)) {
      transformColumnsDirective(parent, index);
      continue;
    }

    if (isColumnDirective(child)) {
      transformColumnDirective(child);
    }

    transformColumns(child);
  }
}

export function remarkReaderColumns() {
  return function transform(tree) {
    transformColumns(tree);
  };
}
