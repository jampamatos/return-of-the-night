import { z } from "astro/zod";
import { BOOK_IDS, LOCALES } from "../conventions";

const navigationLabelsSchema = z.object({
  tableOfContents: z.string().trim().min(1),
  previousChapter: z.string().trim().min(1),
  nextChapter: z.string().trim().min(1),
  glossary: z.string().trim().min(1),
});

const chapterGroupSchema = z.object({
  id: z.string().trim().min(1),
  label: z.string().trim().min(1),
  description: z.string().trim().min(1).optional(),
  order: z.number().int().min(0),
  chapterNumbers: z.array(z.number().int().min(0)).min(1),
});

export const bookConfigSchema = z.object({
  book: z.enum(BOOK_IDS),
  lang: z.enum(LOCALES),
  bookTitle: z.string().trim().min(1),
  bookSubtitle: z.string().trim().min(1).optional(),
  navigation: navigationLabelsSchema,
  chapterGroups: z.array(chapterGroupSchema),
});
