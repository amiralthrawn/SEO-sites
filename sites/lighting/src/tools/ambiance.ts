// Règles du configurateur d'ambiance : pièce, surface, style, ambiance, budget
// -> besoin en lumens, emplacements à remplir, préférences pour le moteur commun.
import type { BundleRequest, Bundle, Slot } from "@seo/core/bundle";

export const rooms = {
  salon: "Salon",
  chambre: "Chambre",
  bureau: "Bureau",
  "salle-a-manger": "Salle à manger",
} as const;
export const styles = {
  japandi: "Japandi",
  scandinave: "Scandinave",
  contemporain: "Contemporain",
  industriel: "Industriel",
  boheme: "Bohème",
} as const;
export const moods = {
  chaleureuse: "Chaleureuse",
  tamisee: "Tamisée, cosy",
  lumineuse: "Lumineuse",
  luxueuse: "Luxueuse",
} as const;

export type Room = keyof typeof rooms;
export type Style = keyof typeof styles;
export type Mood = keyof typeof moods;

export interface Answers {
  room: Room;
  area: number;
  style: Style;
  mood: Mood;
  budget: number;
}

// Éclairement moyen conseillé pour la lumière d'ensemble (lux = lumens par m²).
const LUX: Record<Room, number> = { salon: 150, chambre: 100, bureau: 250, "salle-a-manger": 150 };
const MOOD_FACTOR: Record<Mood, number> = { chaleureuse: 1, tamisee: 0.7, lumineuse: 1.3, luxueuse: 1 };
const KELVIN: Record<Mood, string> = {
  chaleureuse: "2 700 K (blanc chaud)",
  tamisee: "2 200 à 2 700 K (blanc très chaud), sur variateur",
  lumineuse: "3 000 K (blanc neutre chaud)",
  luxueuse: "2 700 K, avec un IRC d'au moins 90 pour les matières",
};

// Flux conseillé par lampe pour les rôles d'appoint ; la lumière générale prend le reste.
const ROLE_LUMENS: Record<string, number> = { ambiance: 400, accent: 300, tache: 600 };
export const roleLabel: Record<string, string> = {
  general: "Lumière générale",
  ambiance: "Lumière d'ambiance",
  accent: "Lumière d'accent",
  tache: "Lumière de travail",
};

export function slotsFor(room: Room, area: number): Slot[] {
  const big = area > 25;
  switch (room) {
    case "salon":
      return [
        { id: "lampadaire", label: "Lampadaire", role: "general", required: true },
        { id: "lampe-table", label: "Lampe à poser", role: "ambiance", required: true },
        { id: "applique", label: big ? "Appliques" : "Applique", role: "accent", required: false, qty: big ? 2 : 1 },
        { id: "suspension", label: "Suspension", role: "general", required: big },
      ];
    case "chambre":
      return [
        { id: "chevet", label: "Lampes de chevet", role: "ambiance", required: true, qty: 2 },
        { id: "suspension", label: "Suspension", role: "general", required: false },
        { id: "applique", label: "Applique", role: "accent", required: false },
      ];
    case "bureau":
      return [
        { id: "bureau", label: "Lampe de bureau", role: "tache", required: true },
        { id: "suspension", label: "Suspension", role: "general", required: true },
        { id: "lampe-table", label: "Lampe d'ambiance", role: "ambiance", required: false },
      ];
    case "salle-a-manger":
      return [
        { id: "suspension", label: "Suspension au-dessus de la table", role: "general", required: true },
        { id: "applique", label: big ? "Appliques" : "Applique", role: "accent", required: false, qty: big ? 2 : 1 },
        { id: "lampe-table", label: "Lampe sur le buffet", role: "ambiance", required: false },
      ];
  }
}

export function lumensNeeded(a: Answers): number {
  return Math.round((a.area * LUX[a.room] * MOOD_FACTOR[a.mood]) / 50) * 50;
}

export function kelvinFor(mood: Mood): string {
  return KELVIN[mood];
}

export function request(a: Answers): BundleRequest {
  return {
    slots: slotsFor(a.room, a.area),
    budget: a.budget,
    prefer: { [a.style]: 3, [a.mood]: a.mood === "luxueuse" ? 2 : 1 },
  };
}

// Au-delà, une seule lampe éblouit : mieux vaut ajouter une source.
const MAX_GENERAL = 2500;

export interface LumenPlan {
  /** Lumens conseillés par ampoule, par id de produit. */
  bulbs: Map<string, number>;
  /** Lumens qui manquent pour atteindre l'objectif sans éblouir (0 si l'ensemble suffit). */
  shortfall: number;
}

/** Répartit le besoin en lumens entre les produits retenus, selon leur rôle. */
export function lumenPlan(bundle: Bundle, total: number, mood: Mood): LumenPlan {
  const round = (lm: number) => Math.max(150, Math.round(lm / 50) * 50);
  const bulbs = new Map<string, number>();
  const general = bundle.picks.filter((p) => p.slot.role === "general");
  const others = bundle.picks.filter((p) => p.slot.role !== "general");
  let used = 0;
  if (!general.length) {
    const n = others.reduce((s, p) => s + p.qty, 0);
    for (const p of others) bulbs.set(p.product.id, round(total / n));
    return { bulbs, shortfall: 0 };
  }
  for (const p of others) {
    const lm = round(ROLE_LUMENS[p.slot.role] * MOOD_FACTOR[mood]);
    bulbs.set(p.product.id, lm);
    used += lm * p.qty;
  }
  const n = general.reduce((s, p) => s + p.qty, 0);
  const each = Math.min(MAX_GENERAL, round(Math.max(400 * n, total - used) / n));
  for (const p of general) bulbs.set(p.product.id, each);
  used += each * n;
  const shortfall = total - used;
  return { bulbs, shortfall: shortfall > 300 ? Math.round(shortfall / 50) * 50 : 0 };
}

export function sourcesAdvice(area: number): number {
  return Math.max(3, 3 + Math.ceil((area - 20) / 10));
}
