import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sebastiancastaneda.dev',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) => !/\/events\/?$/.test(page),
    }),
    icon({
      include: {
        ph: ['*'],
      },
    }),
  ],
});
