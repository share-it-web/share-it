export interface Collaborator {
  name: string
  role: string
  image: string
  github?: string
  linkedin?: string
  website?: string
}

export const collaborators: Collaborator[] = [
  {
    name: 'Ana García',
    role: 'Frontend Developer',
    image: 'https://i.pravatar.cc/300?img=1',
    github: 'https://github.com/anagarcia',
    linkedin: 'https://linkedin.com/in/anagarcia',
    website: 'https://anagarcia.dev',
  },
  {
    name: 'Carlos Ruiz',
    role: 'Backend Developer',
    image: 'https://i.pravatar.cc/300?img=8',
    github: 'https://github.com/carlosruiz',
    linkedin: 'https://linkedin.com/in/carlosruiz',
  },
  // Add more collaborators here
]
