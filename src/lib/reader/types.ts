import type { Audience } from "../../config/site";

export type ChapterAudience = Audience | "all";

export interface ReaderHeading {
  depth: number;
  slug: string;
  text: string;
}

export interface ReaderSidebarItem {
  id: string;
  label: string;
  href: `#${string}`;
  depth: number;
  children: ReaderSidebarItem[];
}

export interface ReaderAdjacentLink {
  href: string;
  chapterNumber: number;
  chapterTitle: string;
  pageTitle: string;
}

export interface ReaderChapterSummary {
  chapterNumber: number;
  chapterTitle: string;
  pageTitle: string;
  summary: string;
  status: string;
  audience: ChapterAudience;
}

export interface ReaderCopy {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  body: string;
  chapterMetadataLabel: string;
  statusLabel: string;
  audienceLabel: string;
  missingTitle: string;
  missingBody: string;
  contentLabel: string;
  languageSwitcherLabel: string;
  audienceSwitcherLabel: string;
  breadcrumbLabel: string;
  homeLabel: string;
  tocLabel: string;
  chapterLabel: string;
  backToTocLabel: string;
  sidebarLabel: string;
  emptySidebarLabel: string;
  chapterNavigationLabel: string;
  previousChapterLabel: string;
  nextChapterLabel: string;
  previousChapterUnavailableLabel: string;
  nextChapterUnavailableLabel: string;
}
