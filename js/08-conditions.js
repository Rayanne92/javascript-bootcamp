'use strict';

// En JS il y'a 3 façons de faire une condition

// ---+--- Méthode 01 : if... else ---+---
const iLoveJs = true;
if (iLoveJs) {
    console.log('Tu aime JS');
} else {
    console.log('Tu detestes JS');
}

// Équivaut à
if (iLoveJs === true) {
    console.log('Tu aime JS');
} else {
    console.log('Tu detestes JS');
}

// Spécifications avec les nombres
const theNumber = 1000
// == Vérifie uniquement la valeur
if (theNumber == '1000') {
    console.log(`C'est égal à 1000`);
} else {
    console.log(`Ce n'est pas égal à 1000`);
}

// == Vérifie la valeur et le type
if (theNumber === '1000') {
    console.log(`C'est égal à 1000`);
} else {
    console.log(`Ce n'est pas égal à 1000`);
}

// Différent de
if (theNumber !== 1000) {
    console.log(`Ce n'est pas égal à 1000`);
} else {
    console.log(`C'est égal à 1000`);
}

// Comparer une chaîne de caractère
const chaineCara = 'Coucou';
if (chaineCara === "Hello") {
    console.log(`OK`);
} else {
    console.log(`NOK`);
}

// Vérifier si une variable contient un tableau
const tab = [0, 1, 2];
if (Array.isArray(tab)) {
    console.log(`OK`);
} else {
    console.log(`NOK`);
}

// Équivaut à
if (Array.isArray(tab)===true) {
    console.log(`OK`);
} else {
    console.log(`NOK`);
}

// Vérifier la valeur  d'un tableau
if (tab[1] === 3) {
    console.log(`OK`);
} else {
    console.log(`NOK`);
}

// Faire plusieurs conditions
const timeIs = 19.30
if (timeIs >= 0 && timeIs <= 6) {
    console.log(`Il est ${timeIs}h, il est trop tôt.`);
} else if (timeIs > 6 && timeIs <= 12) {
    console.log(`Il est ${timeIs}h, c'est le matin.`);
} else if (timeIs > 12 && timeIs <= 19) {
    console.log(`Il est ${timeIs}h, c'est l'après-midi.`);
} else if (timeIs > 19 && timeIs <= 24) {
    console.log(`Il est ${timeIs}h, c'est le soir.`);
} else {
    console.log(`L'heure invalide !`)
}


// PLusieurs cas pour une condition
const comics = "Batman"
const mangas = "Berserk"

if (comics === "Batman" || mangas === "Berserk") {
    console.log("Tu es bien Dark");
} else console.log("Tu es cool");

// --- --- --- Méthode 02 : Opérateur ternaire
const iLovePhp = false;

let affichage = iLovePhp === true ? console.log(`Tu aimes PHP.`) : console.log(`Tu detestes.`);
// Équivaut à
if (iLovePhp) {
    console.log(`Tu aimes PHP.`);
} else {
    console.log(`Tu detestes PHP.`);
}

// --- --- --- Méthode 03 : Opérateur Switch(variable)

let sum = 100;
let paymentMethod = `espece`;

switch (paymentMethod) {
    case `espece`:
        console.log(`Vous souhaitez payer la somme de ${sum} euros en ${paymentMethod}`)
        break;
    case `carte`:
        console.log(`Vous souhaitez payer la somme de ${sum} euros en ${paymentMethod}`)
        break;
    case `cheque`:
        console.log(`Vous souhaitez payer la somme de ${sum} euros en ${paymentMethod}`)
        break;
    default:
        console.log(`Veuillez selectionner un mode de paiement s'il vous plaît.`)
        break;
}

// Possibilité de combiner if et switch
if (paymentMethod !== ``) {
    switch (paymentMethod) {
        case `espece`:
            console.log(`Vous souhaitez payer la somme de ${sum} euros en ${paymentMethod}`)
            break;
        case `carte`:
            console.log(`Vous souhaitez payer la somme de ${sum} euros en ${paymentMethod}`)
            break;
        case `cheque`:
            console.log(`Vous souhaitez payer la somme de ${sum} euros en ${paymentMethod}`)
            break;
    }
} else {
    console.log(`Veuillez sélectionner un mode de paiment s'il vous plaît.`);
}

