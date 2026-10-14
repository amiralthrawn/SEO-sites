import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Pages en noindex (brouillons) : hors du sitemap.
const drafts = ["/configurateur-eclairage"];

export default defineConfig({
  site: "https://atelier-des-lampes.fr",
  integrations: [sitemap({ filter: (page) => !drafts.some((d) => page.includes(d)) })],
  trailingSlash: "never",
  build: { format: "file" },
});
