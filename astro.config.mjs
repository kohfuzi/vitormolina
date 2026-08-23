// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/data/site.ts';

export default defineConfig({
  site: SITE.url,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pt-BR', locales: { 'pt-BR': 'pt-BR' } },
      changefreq: 'weekly',
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        // Prioridade por valor de busca: home e páginas foco primeiro.
        if (item.url === `${SITE.url}/`) item.priority = 1.0;
        else if (item.url.includes('/tratamentos/') && !item.url.endsWith('/tratamentos/'))
          item.priority = 0.9;
        else if (item.url.includes('/artigos/') && !item.url.endsWith('/artigos/'))
          item.priority = 0.7;
        else item.priority = 0.8;
        return item;
      },
    }),
  ],
});
