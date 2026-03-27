import { z } from "astro/zod";
import { LOCALES } from "../conventions";

const logicalIdPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const glossaryTypeSchema = z.enum(["rule", "term"]);

export const glossarySchema = z.object({
  id: z
    .string()
    .trim()
    .min(1)
    .regex(
      logicalIdPattern,
      "id must use lowercase letters, numbers, and hyphens",
    ),
  lang: z.enum(LOCALES),
  term: z.string().trim().min(1),
  type: glossaryTypeSchema,
  aliases: z.array(z.string().trim().min(1)),
  summary: z.string().trim().min(1),
});
