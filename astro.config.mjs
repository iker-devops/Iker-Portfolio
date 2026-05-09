// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://iker-devops.github.io',

  base: '/',

  output: 'static',

  outDir: './dist',

  trailingSlash: 'always',

  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});