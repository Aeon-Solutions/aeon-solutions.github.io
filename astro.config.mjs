// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages publica a partir da branch `gh-pages` na raiz do domínio.
export default defineConfig({
  site: 'https://aeon-solutions.github.io',
  base: '/',
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});