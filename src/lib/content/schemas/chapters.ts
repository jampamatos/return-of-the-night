import { z } from "astro/zod";
import { BOOK_IDS, LOCALES } from "../conventions";

const logicalIdPattern = /^[a-z0-9]+(?:[-/][a-z0-9]+)*$/;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*$/;

const chapterAudienceSchema = z.enum(["all", "player", "gm"]);
const chapterStatusSchema = z.enum(["draft", "review", "ready"]);

export const chaptersSchema = z.object({
  id: z
    .string()
    .trim()
    .min(1)
    .regex(
      logicalIdPattern,
      "id must use lowercase letters, numbers, hyphens, and optional slash-separated segments",
    ),
  lang: z.enum(LOCALES),
  book: z.enum(BOOK_IDS),
  chapterNumber: z.number().int().min(0),
  chapterTitle: z.string().trim().min(1),
  pageTitle: z.string().trim().min(1),
  slug: z
    .string()
    .trim()
    .min(1)
    .regex(slugPattern, "slug must be a lowercase URL-friendly path"),
  order: z.number().int().min(0),
  summary: z.string().trim().min(1),
  audience: chapterAudienceSchema,
  status: chapterStatusSchema,
});
