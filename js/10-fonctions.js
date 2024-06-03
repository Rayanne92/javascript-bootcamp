'use strict';

// --- --- --- --- Fonctions
// 1) Déclarer la fonction
function sayHello() {
    console.log("Hello World !");
}

// 2) Appeler la fonction
sayHello();

// --- --- --- --- Autre fonction
function verif(prenom, nom) {
    if (prenom === "Naruto" && nom === "Uzumaki") {
        console.log("Bienvenue Monsieur Uzumaki");
    }
    else console.log("Accès refusé");
}

verif("Kakashi", "Hatake");

// Fonction avec return
function addition(number01, number02) {
    let result = number01 + number02
    return result;
}

addition(3, 5);
console.log(addition(3, 5));

// Fonction IIFE (Immediately Invoked Function Expression)
// Expression de Fonction Inovquée Immédiatement
// Utilisation de fonctione anonyme

(function () {
    console.log("Je suis une IFFE");
})();

let fonctionAnonyme = (function () {
    let name = "Gojo";
    return name;
})();

console.log(fonctionAnonyme);

(function (variable01) {
    console.log(`Première IIFE dit : Coucou ${variable01} IIFE`);
    (function (variable02) {
        // setTimeout permet de lancer une fonction en retard
        setTimeout(function () {
            console.log(`Très bien et ${variable02} IIFE et toi ?`);
        }, 5000);
    })('1er');
})('2ème');

// Mixer fonction classique et IIFE
function essai01(param01) {
    console.log(`V2 Première IIFE dit : Coucou ${param01} IIFE`);
    (function (param02) {
        setTimeout(console.log(`V2 Très bien et ${param02} IIFE et toi ?`), 5000);
    })("1er");
}
essai01("2ème");


// --- --- --- --- Fonction dans des objets

const myPlayList = {
    singer : function (singer) {
        console.log(`Mon chanteur(se) du moment est : ${singer}`)
    },
    song : function (song) {
        console.log(`avec sa chanson : ${song}`)
    },
}

myPlayList.singer('MJ');
myPlayList.song("Smooth Criminal");

// --- --- --- --- Arrow
param01 => param01 * 10;
// Ou
param01 => {return param01 * 10};
// Ou
(param01) => param01*10;
// Ou
(param01) => {param01 * 10};
// Équivaut à
function multipleDix(param01) {
    let resultat = param01 * 10
    return resultat;
}

console.log(multipleDix(15));