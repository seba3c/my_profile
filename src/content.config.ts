import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    // Estimated reading time in minutes, computed by the
    // blog-i18n-reading-sync skill (ceil(wordCount / 200), min 1).
    readingTime: z.number().optional(),
    // Set when a post is cross-posted elsewhere (e.g. dev.to) and this site
    // isn't the canonical source for it.
    canonicalUrl: z.url().optional(),
  }),
});

export const collections = { blog };
