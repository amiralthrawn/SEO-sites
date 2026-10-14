// Catalogue du configurateur d'ambiance.
// PRIX INDICATIFS, NON VÉRIFIÉS : ordres de grandeur pour faire tourner l'outil.
// À remplacer par le flux produits Awin (prix, stock, lien affilié) avant la mise en ligne.
// Amazon : renseigner `asin` (vérifié sur amazon.fr) pour afficher le bouton ; sans ASIN, pas de bouton.
// Règle Amazon : un prix affiché doit venir de leur API (mise à jour < 24 h), pas d'un relevé à la main.
// Tags de style : japandi, scandinave, contemporain, industriel, boheme.
// Tags d'ambiance : chaleureuse, tamisee, lumineuse, luxueuse. Autres : sans-fil.
import type { Product } from "@seo/core/bundle";

export const catalogue: Product[] = [
  // Suspensions et plafonniers
  { id: "le-klint-101", name: "Le Klint 101 (papier plissé)", brand: "Le Klint", price: 260, slots: ["suspension"], tags: ["scandinave", "japandi", "chaleureuse", "tamisee"] },
  { id: "akari-45a", name: "Akari 45A", brand: "Vitra", price: 290, slots: ["suspension"], tags: ["japandi", "boheme", "tamisee", "chaleureuse"] },
  { id: "muuto-ambit", name: "Ambit", brand: "Muuto", price: 210, slots: ["suspension"], tags: ["scandinave", "contemporain", "industriel", "lumineuse"] },
  { id: "ph5", name: "PH 5", brand: "Louis Poulsen", price: 890, slots: ["suspension"], tags: ["scandinave", "contemporain", "luxueuse", "lumineuse"] },
  { id: "ic-s1", name: "IC Lights S1", brand: "Flos", price: 520, slots: ["suspension"], tags: ["contemporain", "luxueuse", "chaleureuse"] },
  { id: "gubi-semi", name: "Semi Pendant", brand: "Gubi", price: 480, slots: ["suspension"], tags: ["industriel", "contemporain", "lumineuse"] },
  { id: "java-rotin", name: "Java (rotin)", brand: "Good & Mojo", price: 140, slots: ["suspension"], tags: ["boheme", "chaleureuse", "tamisee"] },

  // Lampadaires
  { id: "akari-ufq", name: "Akari UF3-Q", brand: "Vitra", price: 560, slots: ["lampadaire"], tags: ["japandi", "tamisee", "chaleureuse"] },
  { id: "hay-matin-floor", name: "Matin Floor", brand: "HAY", price: 420, slots: ["lampadaire"], tags: ["scandinave", "japandi", "chaleureuse", "tamisee"] },
  { id: "tmm", name: "TMM", brand: "Santa & Cole", price: 590, slots: ["lampadaire"], tags: ["japandi", "boheme", "chaleureuse"] },
  { id: "grashoppa", name: "Gräshoppa", brand: "Gubi", price: 890, slots: ["lampadaire"], tags: ["contemporain", "industriel", "luxueuse"] },
  { id: "tolomeo-terra", name: "Tolomeo Lettura", brand: "Artemide", price: 450, slots: ["lampadaire"], tags: ["contemporain", "industriel", "lumineuse"] },
  { id: "lampadaire-rotin", name: "Lampadaire en rotin", brand: "Bloomingville", price: 230, slots: ["lampadaire"], tags: ["boheme", "chaleureuse", "tamisee"] },

  // Lampes à poser (ambiance, chevet)
  { id: "nessino", name: "Nessino", brand: "Artemide", price: 210, slots: ["lampe-table", "chevet"], tags: ["contemporain", "boheme", "chaleureuse"] },
  { id: "flowerpot-vp9", name: "Flowerpot VP9 (sans fil)", brand: "&Tradition", price: 270, slots: ["lampe-table", "chevet"], tags: ["scandinave", "contemporain", "sans-fil", "chaleureuse"] },
  { id: "panthella-mini", name: "Panthella Mini", brand: "Louis Poulsen", price: 470, slots: ["lampe-table", "chevet"], tags: ["scandinave", "contemporain", "luxueuse", "tamisee"] },
  { id: "hay-matin-table", name: "Matin Table", brand: "HAY", price: 190, slots: ["lampe-table", "chevet"], tags: ["scandinave", "japandi", "tamisee", "chaleureuse"] },
  { id: "akari-1a", name: "Akari 1A", brand: "Vitra", price: 220, slots: ["lampe-table", "chevet"], tags: ["japandi", "boheme", "tamisee"] },
  { id: "bellhop", name: "Bellhop (sans fil)", brand: "Flos", price: 190, slots: ["lampe-table", "chevet"], tags: ["contemporain", "industriel", "sans-fil", "lumineuse"] },
  { id: "atollo", name: "Atollo 238", brand: "Oluce", price: 790, slots: ["lampe-table"], tags: ["contemporain", "luxueuse", "chaleureuse"] },
  { id: "bestlite-bl1", name: "Bestlite BL1", brand: "Gubi", price: 560, slots: ["lampe-table", "bureau"], tags: ["industriel", "luxueuse"] },

  // Lampes de bureau
  { id: "tolomeo-micro", name: "Tolomeo Micro", brand: "Artemide", price: 260, slots: ["bureau"], tags: ["contemporain", "industriel", "lumineuse"] },
  { id: "type-75-mini", name: "Type 75 Mini", brand: "Anglepoise", price: 210, slots: ["bureau"], tags: ["industriel", "scandinave", "lumineuse"] },
  { id: "hay-pc", name: "PC Table Lamp", brand: "HAY", price: 190, slots: ["bureau", "chevet"], tags: ["scandinave", "japandi", "lumineuse"] },

  // Appliques
  { id: "lampe-gras-304", name: "Lampe Gras N°304", brand: "DCW éditions", price: 450, slots: ["applique"], tags: ["industriel", "contemporain", "luxueuse"] },
  { id: "ic-w1", name: "IC Lights W1", brand: "Flos", price: 390, slots: ["applique"], tags: ["contemporain", "luxueuse", "chaleureuse"] },
  { id: "tolomeo-parete", name: "Tolomeo Parete", brand: "Artemide", price: 240, slots: ["applique"], tags: ["contemporain", "industriel", "lumineuse"] },
  { id: "le-klint-applique", name: "Applique plissée 210", brand: "Le Klint", price: 230, slots: ["applique"], tags: ["scandinave", "japandi", "tamisee", "chaleureuse"] },
  { id: "applique-rotin", name: "Applique en rotin", brand: "Bloomingville", price: 90, slots: ["applique"], tags: ["boheme", "chaleureuse", "tamisee"] },
];
