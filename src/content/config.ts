import { defineCollection, z } from 'astro:content'

const authorSchema = z.object({
  name: z.string(),
  avatar: z.string(),
  role: z.string(),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  website: z.string().optional(),
})

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().transform((str) => new Date(str + 'T00:00:00')),
  draft: z.boolean().default(false),
  category: z.string(),
  author: authorSchema,
})

const resourceSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().transform((str) => new Date(str + 'T00:00:00')),
  category: z.string(),
  draft: z.boolean().default(false),
  author: authorSchema,
})

const articles = defineCollection({
  //   type: 'content',
  schema: articleSchema,
})

const resources = defineCollection({
  //   type: 'content',
  schema: resourceSchema,
})

export const collections = {
  articles,
  resources,
}
