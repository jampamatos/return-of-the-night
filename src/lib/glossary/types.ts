import type { ContentLocale } from "../content/conventions";

// Add a glossary type here to make it available in frontmatter and the glossary UI.
export const GLOSSARY_TYPES = {
  rule: { en: "Rule", "pt-BR": "Regra" },
  term: { en: "Term", "pt-BR": "Termo" },
  gangs: { en: "Gangs", "pt-BR": "Gangues" },
} as const satisfies Record<string, Record<ContentLocale, string>>;

export type GlossaryType = keyof typeof GLOSSARY_TYPES;

export const GLOSSARY_TYPE_VALUES = Object.keys(GLOSSARY_TYPES) as [
  GlossaryType,
  ...GlossaryType[],
];

export function getGlossaryTypeLabel(
  type: GlossaryType,
  lang: ContentLocale,
): string {
  return GLOSSARY_TYPES[type][lang];
}
