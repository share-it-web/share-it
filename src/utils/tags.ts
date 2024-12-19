interface Tag {
  name: string
  count: number
}

export function getAllTags(resources: any[]): Tag[] {
  // Create a map to count occurrences of each category
  const tagCount = new Map<string, number>()

  resources.forEach((resource) => {
    const category = resource.data.category
    tagCount.set(category, (tagCount.get(category) || 0) + 1)
  })

  // Convert map to array of Tag objects and sort by name
  return Array.from(tagCount.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name))
}
