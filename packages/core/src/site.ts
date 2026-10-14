export interface SiteConfig {
  name: string;
  url: string;
  tagline: string;
  locale: string;
  accent: string;
  /** Identifiant Partenaires Amazon (ex. atelierlampes-21) ; absent = pas de liens Amazon sur ce site. */
  amazonTag?: string;
}

/** Lien produit Amazon.fr avec l'identifiant partenaire du site. */
export function amazonUrl(asin: string, tag: string): string {
  return `https://www.amazon.fr/dp/${encodeURIComponent(asin)}?tag=${encodeURIComponent(tag)}`;
}

export const AMAZON_DISCLOSURE = "En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises.";

export function canonical(site: SiteConfig, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return new URL(clean, site.url).toString();
}

export function orgSchema(site: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
  };
}
