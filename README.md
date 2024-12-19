# Blog VicDev

## Descripción

Blog VicDev es un proyecto de blog personal donde comparto artículos sobre desarrollo de software, tecnología y temas relacionados. Además, otros desarrolladores también son bienvenidos a compartir sus artículos y recursos. El objetivo es proporcionar contenido útil y educativo para la comunidad de desarrolladores.

## Funcionalidades

- Publicación de artículos
- Categorías y etiquetas para organizar el contenido
- Búsqueda de artículos

## Instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/blog-vicdev.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd blog-vicdev
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm start
   ```

5. Abre tu navegador y ve a `http://localhost:3000` para ver el blog en funcionamiento.

## Añadir Artículos y Recursos

Para añadir nuevos artículos y recursos al blog, sigue estos pasos:

1. Crea un nuevo archivo Markdown en el directorio `src/content/articles/` o `src/content/resources` con la siguiente estructura:

   ```markdown
   ---
   title: 'Título del Artículo'
   date: 'YYYY-MM-DD'
   author: 'Nombre del Autor'
   tags: ['etiqueta1', 'etiqueta2']
   ---

   Contenido del artículo en formato Markdown.
   ```

2. Guarda el archivo y el nuevo artículo aparecerá automáticamente en el blog.

## Añadir Colaboradores

Para añadir nuevos colaboradores, edita el archivo `src/data/collaborators.ts` y añade un nuevo objeto al array `collaborators` con la siguiente estructura:
`typescript
    {
      name: 'Nombre del Colaborador',
      role: 'Rol del Colaborador',
      image: 'URL de la Imagen',
      github: 'URL de GitHub',
      linkedin: 'URL de LinkedIn',
      website: 'URL del Sitio Web',
    }
    `

## Contribuir

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección de errores:

   ```bash
   git checkout -b nombre-de-tu-rama
   ```

3. Realiza tus cambios y haz commit:

   ```bash
   git commit -m "Descripción de tus cambios"
   ```

4. Sube tus cambios a tu repositorio fork:

   ```bash
   git push origin nombre-de-tu-rama
   ```

5. Abre un Pull Request en GitHub y describe los cambios que has realizado.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de [tu-email@example.com](mailto:tu-email@example.com).

¡Gracias por visitar Blog VicDev!

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
