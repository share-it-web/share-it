interface ContentItem {
  data: {
    category?: string
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

  resources.forEach((resource) => {
    const category = resource.data.category
    if (!category) return

    const current = tagCount.get(category) || { articles: 0, resources: 0 }
    tagCount.set(category, { ...current, resources: current.resources + 1 })
  })

  articles.forEach((article) => {
    const category = article.data.category
    if (!category) return

    const current = tagCount.get(category) || { articles: 0, resources: 0 }
    tagCount.set(category, { ...current, articles: current.articles + 1 })
  })

  return Array.from(tagCount.entries())
    .filter(([name]) => name)
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
