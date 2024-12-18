import { defineCollection, z } from 'astro:content'

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().transform((str) => new Date(str)),
  draft: z.boolean().default(false),
})

const resourceSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  draft: z.boolean().default(false),
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
