// interface Tag {
//   name: string
//   count: number
// }

// export function getAllTags(resources: any[]): Tag[] {
//   const tagCount = new Map<string, number>()

//   resources.forEach((resource) => {
//     const category = resource.data.category
//     tagCount.set(category, (tagCount.get(category) || 0) + 1)
//   })

//   return Array.from(tagCount.entries())
//     .map(([name, count]) => ({ name, count }))
//     .sort((a, b) => a.name.localeCompare(b.name))
// }

interface ContentItem {
  data: {
    category?: string // Make category optional since it might not exist in all content
    title: string
    description: string
    type?: 'article' | 'resource'
  }
  slug: string
}

interface Tag {
  name: string
  count: {
    total: number
    articles: number
    resources: number
  }
}

export function getAllTags(
  resources: ContentItem[],
  articles: ContentItem[]
): Tag[] {
  const tagCount = new Map<string, { articles: number; resources: number }>()

  // Count resources
  resources.forEach((resource) => {
    const category = resource.data.category
    if (!category) return // Skip if no category

    const current = tagCount.get(category) || { articles: 0, resources: 0 }
    tagCount.set(category, { ...current, resources: current.resources + 1 })
  })

  // Count articles
  articles.forEach((article) => {
    const category = article.data.category
    if (!category) return // Skip if no category

    const current = tagCount.get(category) || { articles: 0, resources: 0 }
    tagCount.set(category, { ...current, articles: current.articles + 1 })
  })

  // Convert map to array of Tag objects and sort by name
  return Array.from(tagCount.entries())
    .filter(([name]) => name) // Extra safety: filter out any undefined/null names
    .map(([name, count]) => ({
      name,
      count: {
        total: count.articles + count.resources,
        articles: count.articles,
        resources: count.resources,
      },
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}
