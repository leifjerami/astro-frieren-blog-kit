import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkReadingTime from "remark-reading-time";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-frieren-blog-kit.netlify.app/", // Update this to your site URL if needed
  markdown: {
    syntaxHighlight: false, // Disable built-in syntax highlighting from Astro
    remarkPlugins: [remarkReadingTime], // Removed rehypePrettyCode
  },
  integrations: [tailwind(), react(), sitemap()],
  output: "static", // This is fine for a static site
});
