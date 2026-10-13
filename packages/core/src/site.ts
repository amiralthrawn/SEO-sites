export interface SiteConfig {
  name: string;
  url: string;
  tagline: string;
  locale: string;
  accent: string;
}

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
