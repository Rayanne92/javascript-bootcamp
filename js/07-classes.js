'use strict';
// Une classe permet de créer des objets

// Déclaration d'une classe
class Personne {
    // Déclaration des paramètres de la classe
    constructor(nom, prenom, age) {
        this.leNom = nom;
        this.lePrenom = prenom;
        this.leAge = age;
    }
}

// Déclaration d'objets (2 méthodes)
// Méthode 01
let methode01 = new Personne()
methode01.leNom = "Uzumaki";
methode01.lePrenom = "Naruto";
methode01.leAge = 18;
console.log(methode01);

// Méthode 02
let methode02 = new Personne ("Uchiwa", "Sasuke", 18);
console.log(methode02);