import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://atelier-du-mur.fr",
  integrations: [sitemap()],
  trailingSlash: "never",
  build: { format: "file" },
});
