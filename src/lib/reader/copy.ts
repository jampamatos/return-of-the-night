import type { Audience, Locale } from "../../config/site";
import type { ChapterAudience, ReaderCopy } from "./types";

export const READER_AUDIENCE_LABELS = {
  en: {
    all: "Player and GM",
    player: "Player",
    gm: "GM",
  },
  "pt-BR": {
    all: "Jogador e Mestre",
    player: "Jogador",
    gm: "Mestre",
  },
} as const satisfies Record<Locale, Record<ChapterAudience, string>>;

export const READER_COPY = {
  en: {
    title: "Chapter Reader",
    description: "Read a chapter from the Return of the Night core book.",
    eyebrow: "Chapter reader",
    heading: "Chapter reader",
    body: "Choose a chapter from the Table of Contents to start reading.",
    chapterMetadataLabel: "Chapter metadata",
    statusLabel: "Status",
    audienceLabel: "Audience",
    missingTitle: "Chapter entry not found",
    missingBody:
      "The route exists, but the chapter entry could not be resolved from the current language and slug.",
    contentLabel: "Chapter content",
    languageSwitcherLabel: "Language",
    audienceSwitcherLabel: "Reading Mode",
    breadcrumbLabel: "Book location",
    homeLabel: "Home",
    tocLabel: "Table of Contents",
    chapterLabel: "Chapter",
    backToTocLabel: "Back to Table of Contents",
    sidebarLabel: "On this page",
    emptySidebarLabel:
      "This chapter does not have local sections yet. Continue reading from the main content.",
    chapterNavigationLabel: "Chapter navigation",
    previousChapterLabel: "Previous Chapter",
    nextChapterLabel: "Next Chapter",
    previousChapterUnavailableLabel: "This is the first available chapter.",
    nextChapterUnavailableLabel: "This is the last available chapter.",
  },
  "pt-BR": {
    title: "Leitor de Capítulo",
    description: "Leia um capítulo do livro principal de Return of the Night.",
    eyebrow: "Leitor de capítulo",
    heading: "Leitor de capítulo",
    body: "Escolha um capítulo pelo Sumário para começar a leitura.",
    chapterMetadataLabel: "Metadados do capítulo",
    statusLabel: "Status",
    audienceLabel: "Público",
    missingTitle: "Entrada de capítulo não encontrada",
    missingBody:
      "A rota existe, mas a entrada do capítulo não pôde ser resolvida a partir do idioma e do slug atuais.",
    contentLabel: "Conteúdo do capítulo",
    languageSwitcherLabel: "Idioma",
    audienceSwitcherLabel: "Modo de Leitura",
    breadcrumbLabel: "Localização no livro",
    homeLabel: "Início",
    tocLabel: "Sumário",
    chapterLabel: "Capítulo",
    backToTocLabel: "Voltar ao Sumário",
    sidebarLabel: "Nesta página",
    emptySidebarLabel:
      "Este capítulo ainda não tem seções locais. Continue a leitura pelo conteúdo principal.",
    chapterNavigationLabel: "Navegação entre capítulos",
    previousChapterLabel: "Capítulo Anterior",
    nextChapterLabel: "Próximo Capítulo",
    previousChapterUnavailableLabel: "Este é o primeiro capítulo disponível.",
    nextChapterUnavailableLabel: "Este é o último capítulo disponível.",
  },
} as const satisfies Record<Locale, ReaderCopy>;

export function getReaderAudienceLabels(
  lang: Locale,
): Record<ChapterAudience, string> {
  return READER_AUDIENCE_LABELS[lang];
}

export function getReaderCopy(lang: Locale): ReaderCopy {
  return READER_COPY[lang];
}

export function getAudienceOptionsForReader(
  lang: Locale,
  audiences: Audience[],
) {
  const audienceLabels = getReaderAudienceLabels(lang);

  return audiences.map((audience) => ({
    value: audience,
    label: audienceLabels[audience],
    isActive: audience === "player",
  }));
}
