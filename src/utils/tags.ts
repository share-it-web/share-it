interface Tag {
  name: string
  count: number
}

export function getAllTags(resources: any[]): Tag[] {
  const tagCount = new Map<string, number>()

  resources.forEach((resource) => {
    const category = resource.data.category
    tagCount.set(category, (tagCount.get(category) || 0) + 1)
  })

  return Array.from(tagCount.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name))
}
