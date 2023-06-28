'use strict';

// Un objet est une collection de données
// (Sorte de BDD) composée de clés (à gauche) et de valeurs (à droite)

// Déclarer un objet
let personne = { // Afficher en ordre alphabétique
    prenom: "Rayanne",
    nom: "Mtimet",
    age: 20,
    adresse: {
        cp: 92230,
        ville: "Gennevilliers",
    },
    loisirs: ["Rigoler", "Plaisir", "Voyage"]
}

// Afficher l'objet : nomObjet
console.log(personne);

// Afficher une clé et sa valeur (2 méthodes)
// Méthode 01 : nomObjet.cle
console.log(personne.prenom);
// Méthode 02 : nomObjet["cle"]
console.log(personne['prenom']);

// Afficher une clé de type tableau et sa valeur
// (2 méthodes)
// Méthode 01 : nomObjet.cle[position-valeur]
console.log(personne.loisirs[0]);
// Méthode 02 : nomObjet["cle"][position]
console.log(personne["loisirs"][0]);

// Afficher plusieurs niveau d'objets (2 méthodes)
// Méthode 01 : nomObjet.cle01.cle02
console.log(personne.adresse.cp);
// Méthode 02 : nomObjet["cle01"]["cle02"]
console.log(personne["adresse"]["cp"]);

// Tableau d'objet
let tabObjet = [
    {
        prenom: "Naruto",
        nom: "Uzumaki",
        age: 16,
        adresse: {
            cp: 92230,
            ville: "Konoha",
        },
        loisirs: ["Famille", "Sport", "Jeux Vidéo"],
    },

    {
        prenom: "Sasuke",
        nom: "Uchiwa",
        age: 18,
        adresse: {
            cp: 92230,
            ville: "Konoha",
        },
        loisirs: ["Famille", "Sport", "Jeux Vidéo"],
    },

    {
        prenom: "Do-flamingo",
        nom: "Uchiwa",
        age: 18,
        adresse: {
            cp: 92230,
            ville: "Konoha",
        },
        loisirs: ["Famille", "Sport", "Jeux Vidéo"],
    },
]

console.log(tabObjet);

// Afficher un élément du tableau
console.log(tabObjet[1]);

// Afficher une valeur d'une clé du tableau
console.log(tabObjet[1].adresse.cp);

// Afficher tous les prénoms du tableau
for (let i = 0; i <= tabObjet.length-1; i++) {
    console.log(tabObjet[i].prenom)
}
