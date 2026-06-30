import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: replace with the real production domain before launch.
// This URL is used for canonical tags, sitemap, robots.txt and Open Graph image URLs.
const SITE = 'https://www.dhengineering.in';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Allow remote optimisation off; we use local assets via astro:assets.
  },
  vite: {
    server: {
      allowedHosts: [
        "gag-operable-fidgeting.ngrok-free.dev",
      ],
    },
  },
});
