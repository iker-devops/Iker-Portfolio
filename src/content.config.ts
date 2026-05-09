// ============================================================================
// content.config.ts
// ============================================================================
// Configuración de las "Content Collections" de Astro.
//
// Una Content Collection es un grupo de archivos Markdown (o JSON, etc.) que
// comparten estructura. Aquí definimos DOS:
//   - posts:     entradas del blog (src/content/posts/*.md)
//   - proyectos: fichas de proyectos (src/content/proyectos/*.md)
//
// Cada colección tiene un SCHEMA con Zod que valida el frontmatter de los .md.
// Si añades un campo nuevo a un post, primero declaralo aquí.
//
// Para crear un POST nuevo:    crea src/content/posts/mi-post.md
// Para crear un PROYECTO nuevo: crea src/content/proyectos/mi-proyecto.md
// ============================================================================

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ----------------------------------------------------------------------------
// Colección: POSTS (blog)
// ----------------------------------------------------------------------------
const posts = defineCollection({
  // glob() lee todos los .md de la carpeta indicada
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),

  // Esquema del frontmatter de cada post
  schema: z.object({
    title: z.string(),                            // Título del post
    description: z.string(),                      // Resumen corto (para listados y SEO)
    pubDate: z.coerce.date(),                     // Fecha de publicación (YYYY-MM-DD)
    updatedDate: z.coerce.date().optional(),      // Fecha de última edición (opcional)
    tags: z.array(z.string()).default([]),        // Etiquetas (devops, docker, ci-cd...)
    draft: z.boolean().default(false),            // Si es true, no se publica
  }),
});

// ----------------------------------------------------------------------------
// Colección: PROYECTOS (works)
// ----------------------------------------------------------------------------
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),

  schema: z.object({
    title: z.string(),                            // Nombre del proyecto
    description: z.string(),                      // Descripción corta
    year: z.number(),                             // Año
    stack: z.array(z.string()).default([]),       // Tecnologías usadas
    repo: z.string().url().optional(),            // URL del repositorio
    demo: z.string().url().optional(),            // URL de la demo
    featured: z.boolean().default(false),         // Si aparece destacado en la home
    order: z.number().default(0),                 // Orden manual (mayor = antes)
  }),
});

// Exportamos las colecciones para que Astro las cargue
export const collections = { posts, proyectos };
