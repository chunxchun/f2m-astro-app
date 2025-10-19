// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// Development config without Cloudflare adapter
export default defineConfig({
  site: "https://www.find2meals.com",
  integrations: [mdx(), sitemap(), react()],

  // No adapter for development - use static output
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});