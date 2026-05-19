import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    locale: z.enum(['es', 'en']),
    company: z.string(),
    role: z.string(),
    startDate: z.coerce.date(),
    endDate: z.union([z.coerce.date(), z.literal('Actual'), z.literal('Present')]),
    description: z.string(),
    location: z.string().optional(),
    techs: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z.object({
    locale: z.enum(['es', 'en']),
    title: z.string(),
    institution: z.string(),
    location: z.string().optional(),
    date: z.string(),
    description: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { experience, education };
