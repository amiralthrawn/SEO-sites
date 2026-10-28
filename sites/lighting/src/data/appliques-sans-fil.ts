// Sélection « applique murale sans fil ». Seules les infos lisibles sur la fiche Amazon (titre, note) sont reprises.
// Pas de prix : pas d'API produits Amazon. Notes relevées à la main le 28/10/2026.
import type { Pick } from "./lampes-abordables";

export const wirelessSconces: Pick[] = [
  {
    id: "applique-ketom",
    name: "Applique murale intérieure sans fil Ketom",
    type: "Applique rechargeable, télécommande",
    rating: "4,6/5",
    pitch: "La mieux notée de la sélection. Rechargeable, avec télécommande et plusieurs températures de couleur d'après le titre de la fiche : idéale pour un mur où l'on ne veut pas tirer de câble.",
    asin: "B0FNW4PKPF",
  },
  {
    id: "applique-detarzin",
    name: "Applique murale rechargeable DetarZinLED",
    type: "Applique rechargeable, télécommande",
    rating: "4,5/5",
    pitch: "Une applique rechargeable avec télécommande et réglage de la température de couleur, d'après la fiche. Le même principe que la Ketom, dans un autre design.",
    asin: "B0FRGD1T23",
  },
  {
    id: "applique-ledmo",
    name: "Applique murale intérieur et extérieur ledmo",
    type: "Applique réglable, noire, intérieur ou extérieur",
    rating: "4,5/5",
    pitch: "Une applique noire réglable, annoncée pour l'intérieur comme pour l'extérieur : utile si vous voulez la même lampe sur une terrasse et dans une entrée.",
    asin: "B0CFDV1KYL",
  },
  {
    id: "applique-vintage-rustique",
    name: "Applique vintage réglable, style rustique",
    type: "Applique réglable, style vintage",
    rating: "4,5/5",
    pitch: "Une applique vintage de style rustique, avec un bras réglable. Elle convient à un décor ancien, avec du bois ou des murs profonds.",
    asin: "B07LCBXKPH",
  },
];
