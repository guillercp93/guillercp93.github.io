import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const order = z.number().int().positive();
const stack = z.array(z.string()).nonempty();

const experience = defineCollection({
  loader: file('src/content/experience.json'),
  schema: z.object({
    order,
    role: z.string(),
    company: z.string(),
    period: z.string(),
    highlights: z.array(z.string()).nonempty(),
    stack,
  }),
});

const projects = defineCollection({
  loader: file('src/content/projects.json'),
  schema: z.object({
    order,
    name: z.string(),
    description: z.string(),
    stack,
    repo: z.url(),
    demo: z.url().optional(),
  }),
});

const skills = defineCollection({
  loader: file('src/content/skills.json'),
  schema: z.object({
    order,
    group: z.string(),
    items: z.array(z.string()).nonempty(),
  }),
});

const education = defineCollection({
  loader: file('src/content/education.json'),
  schema: z.object({
    order,
    title: z.string(),
    place: z.string(),
    year: z.string().regex(/^\d{4}$/),
    kind: z.string(),
  }),
});

export const collections = { experience, projects, skills, education };
