import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kaira-timecrawler.github.io',
  base: '/timecrawler-web-dev',
  output: 'static',
  integrations: [
    tailwind(),
    // sitemap() - Temporalmente deshabilitado por error con i18n
    // Ver SITEMAP_FIX.md para más detalles
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
