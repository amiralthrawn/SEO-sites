// Sélection « lampe Tiffany ». Seules les infos lisibles sur la fiche Amazon (titre, note) sont reprises.
// Pas de prix : pas d'API produits Amazon. Notes relevées à la main le 27/10/2026.
import type { Pick } from "./lampes-abordables";

export const tiffanyLamps: Pick[] = [
  {
    id: "tiffany-fumat-vitrail-fleur",
    name: "Lampe Tiffany vintage en vitrail, motif fleur (FUMAT)",
    type: "Lampe de table, vitrail",
    rating: "4,8/5",
    pitch: "La mieux notée de la sélection. Un abat-jour en vitrail à motif de fleur, pour une pièce où la lampe doit être le centre de la déco.",
    asin: "B0CYBQ2LG5",
  },
  {
    id: "tiffany-bieye-verre",
    name: "Lampe de table en verre style Tiffany (Bieye)",
    type: "Lampe de table, chambre ou salon",
    rating: "4,7/5",
    pitch: "Une lampe de table en verre dans le style Tiffany, annoncée pour la chambre. Un bon choix pour un chevet ou une commode.",
    asin: "B09H4R13SM",
  },
  {
    id: "tiffany-kiphepi-vitral",
    name: "Lampe Tiffany en vitrail (KIPHEPI)",
    type: "Petite lampe décorative",
    rating: "4,6/5",
    pitch: "Une petite lampe en vitrail, plutôt décorative que fonctionnelle. Idéale en second éclairage, sur une étagère ou un buffet.",
    asin: "B0GKLJG1W1",
  },
  {
    id: "tiffany-banquier-fumat",
    name: "Lampe de banquier Tiffany (FUMAT)",
    type: "Lampe de bureau, style Tiffany, interrupteur",
    rating: "4,5/5",
    pitch: "Le style Tiffany sur un pied de lampe de banquier : à la fois lampe de bureau et pièce déco. Nous la présentons aussi dans notre guide de la lampe de banquier.",
    asin: "B09L4FQLZ9",
  },
];
