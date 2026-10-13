// Sélection « lampe champignon ». Données à revérifier sur la fiche marchand avant ajout du lien affilié.
// url : lien affilié, vide tant que le programme n'est pas validé (le bouton est alors masqué).
export type Usage = "chevet" | "salon" | "bureau" | "exterieur";
export type Budget = "moyen" | "premium";

export interface Lamp {
  id: string;
  name: string;
  brand: string;
  designer: string;
  year: number;
  material: string;
  height: string;
  cordless: boolean;
  budget: Budget;
  usages: Usage[];
  pitch: string;
  url: string;
}

export const lamps: Lamp[] = [
  {
    id: "nessino",
    name: "Nessino",
    brand: "Artemide",
    designer: "Giancarlo Mattioli",
    year: 1967,
    material: "Polycarbonate coloré, translucide",
    height: "env. 22 cm",
    cordless: false,
    budget: "moyen",
    usages: ["chevet", "bureau"],
    pitch: "La plus accessible des icônes. Son chapeau translucide colore toute la pièce : parfaite sur une table de chevet ou une étagère.",
    url: "",
  },
  {
    id: "flowerpot-vp9",
    name: "Flowerpot VP9",
    brand: "&Tradition",
    designer: "Verner Panton",
    year: 1968,
    material: "Aluminium laqué",
    height: "env. 30 cm",
    cordless: true,
    budget: "moyen",
    usages: ["chevet", "salon", "exterieur"],
    pitch: "Version sans fil et rechargeable du célèbre Flowerpot. Elle passe de la table du salon à la terrasse le soir.",
    url: "",
  },
  {
    id: "panthella-mini",
    name: "Panthella Mini",
    brand: "Louis Poulsen",
    designer: "Verner Panton",
    year: 1971,
    material: "Acrylique opale ou métal",
    height: "env. 34 cm",
    cordless: false,
    budget: "premium",
    usages: ["chevet", "salon", "bureau"],
    pitch: "Lumière très douce, sans éblouissement : le pied en trompette renvoie la lumière vers le bas. Existe en version Portable sans fil.",
    url: "",
  },
  {
    id: "atollo",
    name: "Atollo",
    brand: "Oluce",
    designer: "Vico Magistretti",
    year: 1977,
    material: "Aluminium laqué ou verre soufflé",
    height: "35, 50 ou 70 cm selon le modèle",
    cordless: false,
    budget: "premium",
    usages: ["salon", "bureau"],
    pitch: "Le dessin le plus pur : un cylindre, un cône, une demi-sphère. Compasso d'Oro 1979. Une pièce de collection pour une console ou un buffet.",
    url: "",
  },
  {
    id: "pipistrello",
    name: "Pipistrello",
    brand: "Martinelli Luce",
    designer: "Gae Aulenti",
    year: 1965,
    material: "Méthacrylate opalin et métal",
    height: "réglable (pied télescopique)",
    cordless: false,
    budget: "premium",
    usages: ["salon"],
    pitch: "Le chapeau en ailes de chauve-souris et le pied télescopique en font une lampe de sol ou de table. Existe en Mini sans fil.",
    url: "",
  },
];
