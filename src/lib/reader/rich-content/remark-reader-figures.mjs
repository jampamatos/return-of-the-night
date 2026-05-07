const CAPTION_PREFIX_PATTERN = /^(Caption|Legenda):\s*/i;

function isImageOnlyParagraph(node) {
  return (
    node?.type === "paragraph" &&
    node.children?.length === 1 &&
    node.children[0]?.type === "image"
  );
}

function isWhitespaceText(node) {
  return node?.type === "text" && node.value.trim() === "";
}

function getCaptionChildren(node) {
  if (
    node?.type !== "paragraph" ||
    node.children?.length !== 1 ||
    node.children[0]?.type !== "emphasis"
  ) {
    return undefined;
  }

  const captionChildren = structuredClone(node.children[0].children ?? []);
  const firstChild = captionChildren[0];

  if (firstChild?.type !== "text") return undefined;

  const captionText = firstChild.value.replace(CAPTION_PREFIX_PATTERN, "");
  if (captionText === firstChild.value) return undefined;

  return [{ ...firstChild, value: captionText }, ...captionChildren.slice(1)];
}

function getInlineImageCaptionPair(node) {
  if (node?.type !== "paragraph") return undefined;

  const meaningfulChildren = node.children.filter(
    (child) => !isWhitespaceText(child),
  );

  if (
    meaningfulChildren.length !== 2 ||
    meaningfulChildren[0]?.type !== "image" ||
    meaningfulChildren[1]?.type !== "emphasis"
  ) {
    return undefined;
  }

  const captionChildren = getCaptionChildren({
    type: "paragraph",
    children: [meaningfulChildren[1]],
  });

  if (!captionChildren) return undefined;

  return {
    image: meaningfulChildren[0],
    captionChildren,
  };
}

function createFigureNode(image, captionChildren) {
  return {
    type: "paragraph",
    data: {
      hName: "figure",
      hProperties: {
        "data-reader-rich-content": "figure",
      },
    },
    children: [
      image,
      {
        type: "paragraph",
        data: {
          hName: "figcaption",
        },
        children: captionChildren,
      },
    ],
  };
}

function transformFigurePairs(parent) {
  if (!Array.isArray(parent?.children)) return;

  for (let index = 0; index < parent.children.length; index += 1) {
    const imageParagraph = parent.children[index];
    const captionParagraph = parent.children[index + 1];

    const inlinePair = getInlineImageCaptionPair(imageParagraph);
    if (inlinePair) {
      parent.children.splice(
        index,
        1,
        createFigureNode(inlinePair.image, inlinePair.captionChildren),
      );
      continue;
    }

    if (!isImageOnlyParagraph(imageParagraph)) continue;

    const captionChildren = getCaptionChildren(captionParagraph);
    if (!captionChildren) continue;

    parent.children.splice(
      index,
      2,
      createFigureNode(imageParagraph.children[0], captionChildren),
    );
  }
}

export function remarkReaderFigures() {
  return function transform(tree) {
    transformFigurePairs(tree);
  };
}
