// Sélection « applique murale chambre ». Seules les infos lisibles sur la fiche Amazon (titre, note) sont reprises.
// Pas de prix : pas d'API produits Amazon. Notes relevées à la main le 04/11/2026.
import type { Pick } from "./lampes-abordables";

export const bedroomSconces: Pick[] = [
  {
    id: "chambre-tiffany-plafonnier",
    name: "Plafonnier / applique murale style Tiffany",
    type: "Luminaire mixte plafond ou mur, style Tiffany vitrail",
    rating: "4,8/5",
    pitch: "La mieux notée de la sélection. Elle se fixe au mur comme au plafond d'après le titre, et son verre coloré style Tiffany donne une lumière chaude et décorative, idéale avec des tons bordeaux ou vert foncé.",
    asin: "B0795W2156",
  },
  {
    id: "chambre-idegu-lot-de-2",
    name: "Lot de 2 appliques murales industrielles iDEGU",
    type: "Appliques réglables, style industriel, vendues par deux",
    rating: "4,6/5",
    pitch: "Très bien notées. Elles se vendent par deux, ce qui permet de symétriser de chaque côté du lit, et leur bras est ajustable d'après la fiche.",
    asin: "B09X12VGCF",
  },
  {
    id: "chambre-doree-globe",
    name: "Applique murale dorée avec globe en verre",
    type: "Applique intérieure, style nordique moderne",
    rating: "4,2/5",
    pitch: "Une applique dorée à globe de verre, plus décorative : elle fait un point lumineux doux au-dessus d'un lit ou d'une commode.",
    asin: "B09VDFMLH7",
  },
  {
    id: "chambre-lune-oowoks",
    name: "Applique murale Lune OOWOKS",
    type: "Applique décorative avec télécommande",
    rating: "4,1/5",
    pitch: "Une applique en forme de lune, avec télécommande et plusieurs températures de couleur d'après le titre. Plus originale, mais la note est un peu plus basse : lisez les avis récents.",
    asin: "B0GJL5R3Z5",
  },
];
