import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://atelier-des-lampes.fr",
  integrations: [sitemap()],
  trailingSlash: "never",
  build: { format: "file" },
});
