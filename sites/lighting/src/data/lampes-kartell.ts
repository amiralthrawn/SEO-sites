// Sélection « lampe Kartell ». Seules les infos lisibles sur la fiche Amazon (titre, note) sont reprises.
// Pas de prix : pas d'API produits Amazon. Notes relevées à la main le 27/10/2026.
import type { Pick } from "./lampes-abordables";

export const kartellLamps: Pick[] = [
  {
    id: "kartell-battery-cristal",
    name: "Kartell Battery, cristal",
    type: "Lampe de table sans fil, rechargeable",
    rating: "4,6/5",
    pitch: "La version transparente de la lampe à batterie : on la déplace de la table du salon à la terrasse sans câble. Le plus simple pour entrer dans l'univers Kartell.",
    asin: "B00SC1Y7T4",
  },
  {
    id: "kartell-battery-couleur",
    name: "Kartell Battery, menthe ou orange",
    type: "Lampe de table sans fil, rechargeable",
    rating: "4,6/5",
    pitch: "La même lampe à batterie en couleur, pour une touche vive sur une console ou un chevet. Vérifiez la teinte choisie dans la liste déroulante de la fiche.",
    asin: "B0FGKM6GVH",
  },
  {
    id: "kartell-bourgie",
    name: "Kartell Bourgie, cristal dimmable",
    type: "Lampe de table, version dimmable",
    rating: "4,5/5",
    pitch: "Le grand classique baroque de la marque, en plastique transparent, ici avec variateur. C'est le modèle qui colle le mieux à un décor ancien type appartement haussmannien.",
    asin: "B0017OUOK4",
  },
  {
    id: "kartell-space",
    name: "Kartell Space, chromé",
    type: "Lampe de table, finition chromée",
    rating: "4,4/5",
    pitch: "Une finition chromée plus graphique et plus contemporaine. Elle contraste bien avec du mobilier ancien et du bois foncé.",
    asin: "B07J5C8LGH",
  },
  {
    id: "kartell-mini-planet",
    name: "Kartell Mini Planet, cristal",
    type: "Lampe de table, format mini",
    rating: "4/5",
    pitch: "Le plus petit format de la sélection, pour une table de chevet ou une étagère. Sa note est un peu plus basse : lisez les avis récents avant de choisir.",
    asin: "B0C8VHZQ78",
  },
];
