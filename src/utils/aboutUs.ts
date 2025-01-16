import GithubIcon from '@icons/GithubIcon.astro'
import WhatsappIcon from '@icons/WhatsappIcon.astro'

export const socialLinks = [
  {
    title: 'GitHub de la comunidad',
    description: 'Repositorio de GitHub',
    url: 'https://github.com/eliasvelazquezdev/share-it-resources',
    icon: GithubIcon,
  },
  {
    title: 'WhatsApp de la comunidad',
    description: 'Únete a la comunidad',
    url: 'https://chat.whatsapp.com/LlbgQpQ7EB1Hy5Rq4WhJd6',
    icon: WhatsappIcon,
  },
]

export const groups = [
  {
    title: '🗣️ General:',
    description:
      'El grupo donde nos presentamos y hablamos de cualquier tema que nos interese.',
    size: 'sm:col-span-1 sm:row-span-1',
  },
  {
    title: '💻🖊️ Proyectos:',
    description:
      'Si necesitas ayuda con un proyecto personal, o estás buscando equipo para construir tu próxima app, este es el lugar indicado.',
    size: 'sm:col-span-1 sm:row-span-1',
  },
  {
    title: '🌎📝 Networking y CV:',
    description:
      'El espacio ideal para que compartas tus redes sociales y conozcas a otros profesionales de la industria. También vas a poder solicitar una revisión de tu CV para poder mejorarlo y aumentar tus probabilidades de encontrar ese ansiado empleo.',
    size: 'sm:col-span-1 sm:row-span-1',
  },
  {
    title: '📚🆘 Recursos y Ayuda:',
    description:
      'En este grupo compartimos aquellos recursos (videos, blog posts, enlaces, etc) que nos permitan mejorar nuestros conocimientos y resolver aquellos problemas cuando Google, GPT o StackOverflow no tienen la respuesta.',
    size: 'sm:col-span-1 sm:row-span-1',
  },
  {
    title: '💼🤝🏻 Ofertas Laborales:',
    description:
      'Tal como el nombre lo indica, este grupo es utilizado para compartir ofertas laborales orientadas al sector tecnológico. ¿Y si tu próximo destino laboral está en SHARE IT?',
    size: 'sm:col-span-1 sm:row-span-1',
  },
  {
    title: '☕💧 La Llorería:',
    description:
      'A veces necesitamos hacer catarsis de ese compañero que no nos escucha en el trabajo, de aquel profesor que pide cosas imposibles o cuando te ghostean en un proceso laboral. ¡Acá tenés el lugar indicado para descargarte!',
    size: 'sm:col-span-1 sm:row-span-1',
  },
  {
    title: '🇺🇸 English Practice:',
    description:
      '¿Te gustaría aprender/practicar/refinar tu inglés? En este espacio vas a poder enviar mensajes de texto y/o voz e interactuar con otras personas que comparten el mismo objetivo, que es dominar el idioma más utilizado a nivel mundial. También desde este lugar organizamos llamadas semanales en nuestro servidor de Discord para tener charlas en tiempo real.',
    size: 'sm:col-span-2 sm:row-span-2',
  },
]

export const admins = [
  {
    name: 'Elias Velázquez (Kani)',
    about: 'Fundador de la Comunidad',
    role: 'Data Engineer',
    avatar:
      'https://gravatar.com/avatar/44079e250daad3785cc515371c72bde6?s=400&d=robohash&r=x',
    github: 'https://github.com/eliasvelazquezdev',
    linkedin: 'https://linkedin.com/in/eliassvelazquez',
    website: 'http://evelazquez.dev/',
  },
  {
    name: 'Natalia Quevedo (Brooke)',
    about: 'Admin',
    role: 'UX/UI Designer',
    avatar: '/images/naty-avatar.jpg',
    linkedin: 'https://www.linkedin.com/in/natalia-a-quevedo/',
  },
  {
    name: 'Eros Benitez (Shinigamy)',
    about: 'Admin',
    role: 'Diseñador Multimedia',
    avatar:
      'https://gravatar.com/avatar/d946fa871e8fc6f41ad01a2107533ee5?s=400&d=robohash&r=x',
    github: 'https://github.com/Shinigamy19',
    linkedin: 'https://www.linkedin.com/in/eros-benitez/',
    website: 'https://www.behance.net/shinigamy19',
  },
  {
    name: 'Ani',
    about: 'Admin',
    role: 'lorem',
    avatar:
      'https://gravatar.com/avatar/7e6d12de6c0ebb3b57e0b0b8a23ce0dc?s=400&d=robohash&r=x',
    github: 'aaa',
    linkedin: 'aaa',
    website: 'aaa',
  },
  {
    name: 'Jean Roa (Drak)',
    about: 'Admin',
    role: 'Software Developer',
    avatar:
      'https://gravatar.com/avatar/c0dfea241b7ea688c3845b62c81d813e?s=400&d=robohash&r=x',
    github: 'https://github.com/jeanroadev',
    linkedin: 'https://www.linkedin.com/in/jeanmra/',
    website: 'https://jeanroa.dev/',
  },
  {
    name: 'Claudia Metz',
    about: 'Admin',
    role: ' Data Scientist',
    avatar:
      'https://robohash.org/40cc5b01aede2babf25f44b94b3998cf?set=set4&bgset=&size=400x400',
    linkedin: 'https://www.linkedin.com/in/claudia-metz/',
  },
  {
    name: 'Nicolás Cruz (Nico)',
    about: 'Admin',
    role: 'Fullstack Developer',
    avatar:
      'https://gravatar.com/avatar/4fea93acfb1ca5bf17ee1c719a8c1cb3?s=400&d=robohash&r=x',
    github: 'https://github.com/NicoFJCruz',
    linkedin: 'https://www.linkedin.com/in/nicofj-cruz',
    website: 'http://nicolascruz.jovinet.com/',
  },
  {
    name: 'Virginia García',
    about: 'Admin',
    role: 'Analista Funcional',
    avatar:
      'https://gravatar.com/avatar/491e02043692650e16f31cb3dce7b405?s=400&d=robohash&r=x',
    github: 'https://github.com/virginia-garcia',
    linkedin: 'https://www.linkedin.com/in/garcia-virginia/',
  },
  {
    name: 'Fernando Cardozo',
    about: 'Admin',
    role: 'Professional Fisherman',
    avatar: '/images/fernando-avatar.jpeg',
    github: 'a',
    linkedin: 'a',
    website: 'a',
  },
  {
    name: 'Victor Quiñones',
    about: 'Admin',
    role: 'Frontend Developer',
    avatar: 'https://i.ibb.co/Dzd33xD/profile-perfil.jpg',
    github: 'a',
    linkedin: 'a',
    website: 'a',
  },
]
