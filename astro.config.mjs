// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://gacomirez.dev.ar',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
    fallback: {
      en: 'es',
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US',
        },
      },
      filter: (page) =>
        page !== 'https://gacomirez.dev.ar/' &&
        page !== 'https://gacomirez.dev.ar/index.html',
    }),
  ],
});
