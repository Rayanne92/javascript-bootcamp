'use strict';

let num01, num02, numNegatif, numVirgule;
num01 = 10;
num02 = 4;
numNegatif = -2;
numVirgule = 2.5;

// Addition 
let somme = num01 + num02;
console.log(somme);

// Soustraction
let difference = num01 - num02;
console.log(difference);

// Produit
let produit = numNegatif * numVirgule;
console.log(produit);

// Quotient
let quotient = num01 / numNegatif;
console.log(quotient);

// Modulo (le reste d'une division euclidienne)
let modulo = num01 % numNegatif;
console.log(modulo);


// Méthodes mathématiques //
let PI = Math.PI;
console.log(PI);

// Arrondir un chiffre
// Arrondir en dessous si >= à x,4
// Arrondir au dessus si <= à x,5
let arrondir = Math.round(2.41);
console.log(arrondir);
arrondir = Math.round(numVirgule);
console.log(arrondir);

// Méthode 02 : Math.floor(x) arrondir à l'entier inférieur
let arrondirBas = Math.floor(numVirgule);
console.log(arrondirBas);

// Méthode 03 : Math.ceil(x) arrondir à l'entier supérieur
let arrondirHaut = Math.ceil(numVirgule);
console.log(arrondirHaut);

// Racine carrée : Math.sqrt(x)
let racineCarre = Math.sqrt(num02);
console.log(racineCarre);

// Valeur absolue : Math.abs(x);
let valAbsolue = Math.abs(numNegatif);
console.log(valAbsolue);

// Puissance : Math.pow(chiffre, puissance)
let puissance = Math.pow(10, 5);
console.log(puissance);
puissance = Math.pow(num02, 2);
console.log(puissance);

// Valeur minimum d'une suite
let valMinSuite = Math.min(1, 2, 3, 4, 5);
console.log(valMinSuite);
valMinSuite = Math.min(1, 2, 3, 4, 5, "test");
console.log(valMinSuite);

// Valeur maximum d'une suite
let valMaxSuite = Math.max(1, 2, 3, 4, 5);
console.log(valMaxSuite);

// Arrondir à x chiffre après la virgule x.toFixed(2) pour arrondir 2 chiffres après la virgule
let numLong = 2.124654;
let arrondirChiffre = numLong.toFixed(2);
console.log(arrondirChiffre);

// Convertir un nombre en chaîne de caractère
let convertString = String(num01);
console.log(convertString);

// Convertir une chaîne de caractère en nombre
let convertNum = Number("10");
console.log(convertNum);