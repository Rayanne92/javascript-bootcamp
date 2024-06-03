'use strict';

// Attention nommez vos variables en utilisation le camelcase
// exemple : camelCase
// Écrire des mots ou des phrases composés de telle sorte que chaque mot ou
// abréviation au milieu de la phrase commence par une majuscule sans espace
// ni ponctuation.


// Une vatriable déclarée en var peut être appelée n'importe ou dans le code.

// Étape 01 : Je défini ma varialbe
var monPrenom;
console.log(monPrenom);

// Étape 02 : Nous donnons une valeur à ma variable
monPrenom = 'Rayanne'
console.log(monPrenom);

var monNom = 'ennayaR';
console.log(monNom);
var monNom = 'ennayRa';
console.log(monNom);

// Une variable déclarée en "let" ne peut être utilisée que dans son SCOPE ou son enfant & elles ne peuvent être déclarée qu'une seule fois.
function essai() {
    let resultat;
    resultat = 5;
    console.log(resultat);
}
essai()

// Impossible d'appeler resultat car contenu dans le SCOPE de la fonction
// console.log(resultat);
let a = 3;
console.log(a)
a = 15;
console.log(a)

// Const fonctionne comme le let à l'exception qu'on ne peut pas changer la valeur
const myConst = 5;
console.log(myConst)
myConst = 3
console.log(myConst)