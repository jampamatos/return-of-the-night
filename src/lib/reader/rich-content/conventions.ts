export const SUPPORTED_RICH_CONTENT_BLOCK_TYPES = [
  "figure",
  "table",
  "columns",
  "callout",
  "audience",
] as const;

export type SupportedRichContentBlockType =
  (typeof SUPPORTED_RICH_CONTENT_BLOCK_TYPES)[number];

export const FIGURE_CAPTION_PREFIXES = ["Caption", "Legenda"] as const;

export const SUPPORTED_AUDIENCE_BLOCK_TARGETS = ["player", "gm"] as const;

export type SupportedAudienceBlockTarget =
  (typeof SUPPORTED_AUDIENCE_BLOCK_TARGETS)[number];

export const SUPPORTED_CALLOUT_VARIANTS = [
  "note",
  "warning",
  "example",
] as const;

export type SupportedCalloutVariant =
  (typeof SUPPORTED_CALLOUT_VARIANTS)[number];

export const RICH_CONTENT_READER_NON_GOALS = [
  "glossary-hover-cards",
  "inline-glossary-term-interactions",
  "localization-fallback-behavior",
  "access-control-for-audience-filtered-content",
  "broad-reader-visual-redesign",
  "chapter-reader-architecture-rewrite",
] as const;

export const AUDIENCE_BLOCK_SECURITY_NOTE =
  "Audience-filtered content is a reading preference, not an access-control or security boundary.";
