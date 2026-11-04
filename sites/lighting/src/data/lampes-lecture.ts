// Sélection « lampe de lecture / liseuse ». Seules les infos lisibles sur la fiche Amazon (titre, note) sont reprises.
// Pas de prix : pas d'API produits Amazon. Notes relevées à la main le 04/11/2026.
import type { Pick } from "./lampes-abordables";

export const readingLamps: Pick[] = [
  {
    id: "lecture-gritin-liseuse",
    name: "Lampe de lecture rechargeable Gritin",
    type: "Lampe de lecture à pince, rechargeable, plusieurs couleurs de lumière",
    rating: "4,8/5",
    pitch: "La mieux notée de la sélection. Rechargeable, elle se fixe sur un livre ou un support et propose plusieurs couleurs de lumière d'après la fiche, ce qui évite d'éblouir quand on lit le soir.",
    asin: "B0C3BC4QG2",
  },
  {
    id: "lecture-tour-de-cou",
    name: "Liseuse lampe de lecture tour de cou rechargeable",
    type: "Lampe de lecture à porter autour du cou, rechargeable",
    rating: "4,6/5",
    pitch: "Elle se porte autour du cou et éclaire le livre sans lampe de chevet ni interrupteur à portée de main. Pratique au lit, en voyage ou si l'autre personne dort.",
    asin: "B0BX98DM61",
  },
  {
    id: "lecture-pince-livre",
    name: "Lampe de lecture à pince pour livres",
    type: "Mini lampe à pince pour livre",
    rating: "4,3/5",
    pitch: "Une petite lampe à pince, discrète, qui se glisse dans un sac. La note est un peu plus basse : lisez les avis récents avant de commander.",
    asin: "B0GJSFBBM6",
  },
];
