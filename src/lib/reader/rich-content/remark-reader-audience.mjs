const AUDIENCE_DIRECTIVE_NAME = "audience";

const AUDIENCE_LABELS = {
  gm: "GM reading preference content",
  player: "Player reading preference content",
};

function isSupportedAudienceTarget(value) {
  return Object.hasOwn(AUDIENCE_LABELS, value);
}

function isAudienceDirective(node) {
  return (
    node?.type === "containerDirective" && node.name === AUDIENCE_DIRECTIVE_NAME
  );
}

function getAudienceTarget(node) {
  const target = node.attributes?.target;

  if (typeof target !== "string" || !isSupportedAudienceTarget(target)) {
    return undefined;
  }

  return target;
}

function getTextContent(node) {
  if (node?.type === "text") return node.value;
  if (!Array.isArray(node?.children)) return "";

  return node.children.map((child) => getTextContent(child)).join("");
}

function getAudienceLabel(node, target) {
  const firstChild = node.children?.[0];

  if (!firstChild?.data?.directiveLabel) {
    return {
      children: [{ type: "text", value: target.toUpperCase() }],
      text: target.toUpperCase(),
    };
  }

  node.children.shift();

  return {
    children: firstChild.children ?? [
      { type: "text", value: target.toUpperCase() },
    ],
    text: getTextContent(firstChild).trim() || target.toUpperCase(),
  };
}

function transformAudienceDirective(node) {
  const target = getAudienceTarget(node);

  if (!target) return;

  const label = getAudienceLabel(node, target);

  node.children = [
    {
      type: "paragraph",
      data: {
        hName: "p",
        hProperties: {
          className: ["reader-audience__label"],
        },
      },
      children: label.children,
    },
    ...(node.children ?? []),
  ];

  node.data = {
    ...node.data,
    hName: "section",
    hProperties: {
      ...node.data?.hProperties,
      "aria-label": `${AUDIENCE_LABELS[target]}: ${label.text}`,
      className: ["reader-audience", `reader-audience--${target}`],
      "data-reader-audience": target,
      "data-reader-rich-content": "audience",
    },
  };
}

function transformAudienceBlocks(parent) {
  if (!Array.isArray(parent?.children)) return;

  for (const child of parent.children) {
    if (isAudienceDirective(child)) {
      transformAudienceDirective(child);
    }

    transformAudienceBlocks(child);
  }
}

export function remarkReaderAudience() {
  return function transform(tree) {
    transformAudienceBlocks(tree);
  };
}
