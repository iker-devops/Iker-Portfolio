## ✏️ Cómo añadir contenido

### Un nuevo post del blog

Crea un archivo Markdown en `src/content/posts/`:

Con este frontmatter:

```yaml
---
title: "Título del post"
description: "Resumen corto que aparece en los listados y SEO."
pubDate: 2026-05-04
tags: ["devops", "docker"]
draft: false                     # true = no se publica
---

Contenido del blog
```

### Un nuevo proyecto

Crea un archivo Markdown en `src/content/proyectos/`:

```yaml
---
title: "Mi proyecto"
description: "Descripción corta que aparece en la tarjeta."
year: 2026
stack: ["Astro", "TypeScript"]
repo: "https://github.com/tu-usuario/proyecto"
demo: "https://proyecto.dev"
featured: true                   # true = aparece en la home
order: 100                       # mayor número = aparece antes
---

Contenido del proyecto
```
