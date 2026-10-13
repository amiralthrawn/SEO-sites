# seo-sites

Plateforme commune de micro-sites SEO (déco, affiliation). Un moteur partagé (`packages/core`), un dossier par site (`sites/*`).

- `packages/core` : layout, balises SEO, schema.org, helpers communs
- `sites/lighting` : atelier-des-lampes.fr (éclairage)
- `sites/wall` : atelier-du-mur.fr (mur)
- `sites/acoustic` : atelier-acoustique.fr (acoustique)

Build d'un site : `npm run build:lighting`. Déploiement : Cloudflare Pages (dossier `sites/lighting`, sortie `dist`).
