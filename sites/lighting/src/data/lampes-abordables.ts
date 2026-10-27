// Alternatives abordables vendues sur Amazon. Seules les infos visibles sur la fiche (titre, note) sont reprises.
// Prix volontairement absents : on n'a pas l'API produits Amazon, et un prix affiché périmé est interdit.
export interface Pick {
  id: string;
  name: string;
  type: string;
  rating: string;
  pitch: string;
  asin: string;
}

const tag = "atelierlampes-21";
export const amazonUrl = (asin: string) => `https://www.amazon.fr/dp/${asin}?tag=${tag}`;

export const picks: Pick[] = [
  {
    id: "champignon-red-sol",
    name: "Lampe de sol champignon RED",
    type: "Lampe de sol, variateur",
    rating: "4/5",
    pitch: "Un champignon rouge à poser à côté d'un fauteuil ou d'un canapé : la touche de couleur de la pièce, avec une intensité réglable.",
    asin: "B0FCYJ9NPV",
  },
  {
    id: "champignon-metal-bamyum",
    name: "Lampe de chevet champignon en métal",
    type: "Lampe de chevet, style vintage",
    rating: "3,9/5",
    pitch: "Une lampe de chevet au chapeau en métal, dans l'esprit des années 70. Bamyum est la seule marque connue de notre sélection.",
    asin: "B0BR5X476V",
  },
  {
    id: "champignon-marbre",
    name: "Lampe champignon en marbre",
    type: "Lampe de chevet, aspect pierre",
    rating: "pas encore d'avis",
    pitch: "Une lampe champignon à l'aspect marbre, pour un chevet ou une console plus sobre. Elle est trop récente pour avoir des avis : regardez les photos et les retours avant d'acheter.",
    asin: "B0HLJXXSFV",
  },
];
