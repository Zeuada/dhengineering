import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// IMPORTANT: replace with the real production domain before launch.
// This URL is used for canonical tags, sitemap, robots.txt and Open Graph image URLs.
const SITE = 'https://dhengineering.co.in';

export default defineConfig({
  site: SITE,
  output: "hybrid",
  trailingSlash: 'always',
  integrations: [sitemap()],

  build: {
    inlineStylesheets: 'auto',
  },

  image: {
    // Allow remote optimisation off; we use local assets via astro:assets.
  },

  adapter: cloudflare()
});
1