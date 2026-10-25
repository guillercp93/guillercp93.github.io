import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const order = z.number().int().positive();
// Same text in every locale, or one translation per locale.
const text = z.union([z.string(), z.object({ es: z.string(), en: z.string() })]);
const stack = z.array(text).nonempty();

const experience = defineCollection({
  loader: file('src/content/experience.json'),
  schema: z.object({
    order,
    role: text,
    company: z.string(),
    period: text,
    highlights: z.object({ es: z.array(z.string()).nonempty(), en: z.array(z.string()).nonempty() }),
    stack,
  }),
});

const projects = defineCollection({
  loader: file('src/content/projects.json'),
  schema: z.object({
    order,
    name: z.string(),
    description: text,
    stack,
    repo: z.url(),
    demo: z.url().optional(),
  }),
});

const skills = defineCollection({
  loader: file('src/content/skills.json'),
  schema: z.object({
    order,
    group: text,
    items: stack,
  }),
});

const education = defineCollection({
  loader: file('src/content/education.json'),
  schema: z.object({
    order,
    title: text,
    place: z.string(),
    year: z.string().regex(/^\d{4}$/),
    kind: text,
  }),
});

export const collections = { experience, projects, skills, education };
