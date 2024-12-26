![blog-logo](https://github.com/user-attachments/assets/abe6f530-723e-4d4d-8924-2b6d40cd58c8)

# Share It Blog 🚀

Bienvenido a **Share It**. Un rincón para compartir los conocimientos y recursos que me han guiado y ayudado, tanto a mí como a otros desarrolladores, en nuestro recorrido. En mi camino, he aprendido lo fundamental que es la tecnología en nuestras vidas diarias y cómo puede realmente transformar vidas. 🌟

## 🛠️ Funcionalidades

- 📝 Publicación de artículos y recursos.
- 🏷️ Categorías y etiquetas para organizar el contenido.
- 🔍 Búsqueda de artículos y recursos.

## 💻 Instalación

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

5. Abre tu navegador y ve a `http://localhost:4321` para ver el blog en funcionamiento. 🌐

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! 🎉 Si deseas contribuir a este proyecto, sigue estos pasos:

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

## 📄 Añadir Artículos y Recursos

Para añadir nuevos artículos y recursos al blog, sigue estos pasos:

1. Crea un nuevo archivo Markdown en el directorio `src/content/articles/` o `src/content/resources` con la siguiente estructura:

   ```typescript
   ---
   title: 'Título del Artículo'
   description: 'Descripción del articulo o recurso'
   date: 'YYYY-MM-DD'
   author: 'Nombre del Autor'
   tags: 'etiqueta'
   ---
   Contenido del artículo en formato Markdown.

   ```

2. Guarda el archivo y el nuevo artículo aparecerá automáticamente en el blog. ✨

## 👥 Añadir Colaboradores

Para aparecer en la sección de colaboradores, añade tus datos dentro de los archivos Markdown de artículos o recursos (`src/content/articles/` o `src/content/resources`). Asegúrate de incluir la información del autor en el siguiente formato:

```markdown
---
author:
  name: 'Nombre del Autor'
  avatar: 'URL del Avatar'
  role: 'Rol del Autor'
  github: 'URL de GitHub'
  linkedin: 'URL de LinkedIn'
---
```

¡Gracias por visitar Share it! 🙌

## 🗂️ Estructura del Proyecto

Dentro de tu proyecto Astro, verás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── articles/
│   │   └── resources/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Para aprender más sobre la estructura de carpetas de un proyecto Astro, consulta [nuestra guía sobre la estructura del proyecto](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                                      |
| :------------------------ | :---------------------------------------------------------- |
| `npm install`             | Instala las dependencias                                    |
| `npm run dev`             | Inicia el servidor de desarrollo local en `localhost:4321`  |
| `npm run build`           | Construye tu sitio de producción en `./dist/`               |
| `npm run preview`         | Previsualiza tu construcción localmente, antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check`        |
| `npm run astro -- --help` | Obtén ayuda usando el CLI de Astro                          |

## 👀 ¿Quieres aprender más?

No dudes en consultar [Astro](https://docs.astro.build)
