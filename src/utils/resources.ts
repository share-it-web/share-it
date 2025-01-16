interface Resource {
  title: string
  description: string
  slug: string
  date: Date
  category: string
}

export const resources: Resource[] = [
  {
    title: 'Java',
    description:
      'Guías, tutoriales, libros y todo recurso para aprender y mejorar con Java',
    slug: 'https://github.com/eliasvelazquezdev/share-it-resources/tree/main/lenguajes/java',
    date: new Date('2025-01-14'),
    category: 'Java',
  },
  {
    title: 'CSS',
    description:
      'Guías, tutoriales, libros y todo recurso para aprender y mejorar en CSS.',
    slug: 'https://github.com/eliasvelazquezdev/share-it-resources/tree/main/lenguajes/css',
    date: new Date('2025-01-15'),
    category: 'CSS',
  },
  {
    title: 'JavaScript',
    description:
      'Descubre proyectos, tutoriales y recursos para aprender JavaScript.',
    slug: 'https://github.com/eliasvelazquezdev/share-it-resources/tree/main/lenguajes/javascript',
    date: new Date('2024-12-12'),
    category: 'JavaScript',
  },
  {
    title: 'Python',
    description:
      'Descubre proyectos, tutoriales y recursos para aprender Python.',
    slug: 'https://github.com/eliasvelazquezdev/share-it-resources/tree/main/lenguajes/python',
    date: new Date('2024-12-10'),
    category: 'Python',
  },
]
