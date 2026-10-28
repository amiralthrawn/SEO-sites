// Sélection « lampe de chevet tactile ». Seules les infos lisibles sur la fiche Amazon (titre, note) sont reprises.
// Pas de prix : pas d'API produits Amazon. Notes relevées à la main le 27-28/10/2026.
import type { Pick } from "./lampes-abordables";

export const touchLamps: Pick[] = [
  {
    id: "tactile-zafferano-angelina",
    name: "Zafferano Angelina, tête pivotante",
    type: "Lampe de table rechargeable, contrôle tactile",
    rating: "4,6/5",
    pitch: "La mieux notée de la sélection. Rechargeable, à contrôle tactile et à tête pivotante : on dirige la lumière sur le livre sans la déplacer.",
    asin: "B0F3DP2KJF",
  },
  {
    id: "tactile-zafferano-push-up",
    name: "Zafferano, lampe de table push up",
    type: "Lampe de table rechargeable, contrôle tactile",
    rating: "4,5/5",
    pitch: "Une lampe rechargeable à contrôle tactile, utilisable aussi à l'extérieur d'après la fiche. Pratique si vous la déplacez du chevet à la terrasse.",
    asin: "B0CVXCR9HV",
  },
  {
    id: "tactile-petite-laiton",
    name: "Petite lampe de chevet tactile, laiton",
    type: "Lampe de chevet, contrôle tactile",
    rating: "4,4/5",
    pitch: "Un petit format à finition laiton, qui prend peu de place sur une table de chevet étroite.",
    asin: "B0DP8GMM1Q",
  },
  {
    id: "tactile-preeotti",
    name: "PreeOtti, lampe à cordon avec abat-jour",
    type: "Lampe de table, intensité variable, contrôle tactile",
    rating: "4,4/5",
    pitch: "Une lampe à abat-jour et à cordon, avec une intensité variable au toucher. Elle ressemble à une lampe de chevet classique.",
    asin: "B0FSZ41TVR",
  },
  {
    id: "tactile-rinweey",
    name: "Rinweey, lampe de table en métal",
    type: "Lampe de table, contrôle tactile",
    rating: "4,3/5",
    pitch: "Une lampe en métal au style élégant et moderne, avec contrôle tactile. La note est un peu plus basse : lisez les avis récents avant de choisir.",
    asin: "B0FH6GPNMX",
  },
];
