// Moteur commun « ensemble de produits sous un budget ».
// Sert au configurateur d'éclairage, au simulateur de mur, à l'estimateur acoustique
// et au futur « recréer cette ambiance pour X € » : chaque site fournit son catalogue
// et la liste des emplacements à remplir, le moteur choisit la meilleure combinaison.

export interface Product {
  id: string;
  name: string;
  brand: string;
  /** Prix unitaire en euros (indicatif tant que le flux marchand n'est pas branché). */
  price: number;
  /** Emplacements que ce produit peut occuper (ex. "suspension", "chevet"). */
  slots: string[];
  /** Mots-clés de style, d'ambiance ou de contrainte (ex. "japandi", "sans-percage"). */
  tags: string[];
  merchant?: string;
  /** Lien affilié ; vide tant que le programme n'est pas validé. */
  url?: string;
  note?: string;
}

export interface Slot {
  id: string;
  label: string;
  /** Rôle affiché à l'utilisateur (« lumière générale », « accent »…). */
  role: string;
  required: boolean;
  /** Nombre d'exemplaires du même produit (ex. 2 lampes de chevet). */
  qty?: number;
}

export interface BundleRequest {
  slots: Slot[];
  budget: number;
  /** Tags recherchés, avec leur poids (ex. { japandi: 3, chaleureuse: 1 }). */
  prefer: Record<string, number>;
  /** Tags obligatoires : un produit sans eux est exclu (ex. "sans-percage"). */
  require?: string[];
}

export interface Pick {
  slot: Slot;
  product: Product;
  qty: number;
  subtotal: number;
}

export interface Bundle {
  picks: Pick[];
  total: number;
  score: number;
  overBudget: boolean;
  /** Emplacements obligatoires sans aucun produit compatible. */
  missing: Slot[];
}

const PER_SLOT = 8;
// Un produit n'entre dans un emplacement facultatif que s'il colle vraiment aux préférences
// (score supérieur à ce seuil) ; les emplacements obligatoires sont remplis quoi qu'il arrive.
const PICK_COST = 1.5;

export function scoreProduct(p: Product, prefer: Record<string, number>): number {
  return p.tags.reduce((s, t) => s + (prefer[t] ?? 0), 0);
}

function candidates(products: Product[], slot: Slot, req: BundleRequest): Product[] {
  return products
    .filter((p) => p.slots.includes(slot.id) && (req.require ?? []).every((t) => p.tags.includes(t)))
    .sort((a, b) => scoreProduct(b, req.prefer) - scoreProduct(a, req.prefer) || a.price - b.price)
    .slice(0, PER_SLOT);
}

/**
 * Énumère les combinaisons (un produit ou rien par emplacement, chaque produit une seule fois)
 * et renvoie toutes celles qui remplissent les emplacements obligatoires.
 */
function combos(products: Product[], req: BundleRequest): { bundles: Bundle[]; missing: Slot[] } {
  const lists = req.slots.map((s) => candidates(products, s, req));
  const missing = req.slots.filter((s, i) => s.required && lists[i].length === 0);
  const bundles: Bundle[] = [];
  const current: Pick[] = [];
  const used = new Set<string>();

  function walk(i: number) {
    if (i === req.slots.length) {
      const total = current.reduce((s, p) => s + p.subtotal, 0);
      const score = current.reduce((s, p) => s + scoreProduct(p.product, req.prefer) - PICK_COST, 0);
      bundles.push({ picks: [...current], total, score, overBudget: total > req.budget, missing });
      return;
    }
    const slot = req.slots[i];
    for (const product of lists[i]) {
      if (used.has(product.id)) continue;
      const qty = slot.qty ?? 1;
      used.add(product.id);
      current.push({ slot, product, qty, subtotal: product.price * qty });
      walk(i + 1);
      current.pop();
      used.delete(product.id);
    }
    if (!slot.required || lists[i].length === 0) walk(i + 1);
  }
  walk(0);
  return { bundles: bundles.filter((b) => b.picks.length > 0), missing };
}

/**
 * Meilleur ensemble sous le budget : le plus de points de style, puis le budget le mieux utilisé.
 * Si rien ne tient dans le budget, renvoie l'ensemble obligatoire le moins cher (overBudget = true).
 */
export function bestBundle(products: Product[], req: BundleRequest): Bundle | null {
  const { bundles } = combos(products, req);
  const fit = bundles.filter((b) => !b.overBudget);
  if (fit.length) return fit.sort((a, b) => b.score - a.score || b.total - a.total)[0];
  return bundles.sort((a, b) => a.total - b.total)[0] ?? null;
}

/**
 * Variante économique : l'ensemble le moins cher qui garde au moins `keep` (par défaut 70 %)
 * du score du meilleur, et coûte au moins 15 % de moins que lui.
 */
export function budgetBundle(products: Product[], req: BundleRequest, best: Bundle, keep = 0.7): Bundle | null {
  const { bundles } = combos(products, req);
  return (
    bundles
      .filter((b) => b.score >= best.score * keep && b.total <= best.total * 0.85)
      .sort((a, b) => a.total - b.total || b.score - a.score)[0] ?? null
  );
}

export function euros(n: number): string {
  return `${Math.round(n).toLocaleString("fr-FR")} €`;
}
