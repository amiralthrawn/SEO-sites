// Sélection « lampe de banquier ». Seules les infos lisibles sur la fiche Amazon (titre, note) sont reprises.
// Pas de prix : pas d'API produits Amazon. Notes relevées à la main le 27/10/2026.
import type { Pick } from "./lampes-abordables";

export const bankerLamps: Pick[] = [
  {
    id: "banquier-favorite",
    name: "Lampe de bureau de banquier",
    type: "Lampe de bureau",
    rating: "4,7/5",
    pitch: "La mieux notée de notre sélection. Une valeur sûre pour un bureau ou une console si vous voulez le look classique sans prendre de risque.",
    asin: "B0CKHLHJG1",
  },
  {
    id: "banquier-barcelona-led",
    name: "Lampe de banquier vintage BARCELONA LED",
    type: "Lampe de bureau, LED, orientable",
    rating: "4,6/5",
    pitch: "Un modèle classique en version LED, annoncé orientable sur la fiche. Pratique si vous voulez une lampe de travail et pas seulement un objet déco.",
    asin: "B07S83462G",
  },
  {
    id: "banquier-tiffany-fumat",
    name: "Lampe de banquier Tiffany FUMAT",
    type: "Lampe de bureau, style Tiffany, interrupteur",
    rating: "4,5/5",
    pitch: "Un abat-jour de style Tiffany plutôt que le vert uni : plus décoratif et plus coloré, il fait lampe d'ambiance autant que lampe de bureau.",
    asin: "B09L4FQLZ9",
  },
  {
    id: "banquier-piano-bronze",
    name: "Lampe des Banquiers piano, bronze antique",
    type: "Lampe de bureau, intensité réglable",
    rating: "4/5",
    pitch: "Une finition bronze antique et une intensité réglable d'après la fiche. La note est plus modeste : lisez les avis récents avant de choisir.",
    asin: "B0F9FRYSWH",
  },
];
