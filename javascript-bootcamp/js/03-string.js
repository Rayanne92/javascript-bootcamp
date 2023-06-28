'use strict';

let firstname = "Rayanne";
console.log(firstname);

// Déclaration de chaîne de caractère
let delcarationGuillemet = "Bonjour "+ firstname +" , c'est super";
console.log(delcarationGuillemet)

let delcarationApostrophe = 'Bonjour ' + firstname +' c\'est super';
console.log(delcarationApostrophe)

let delcarationBacktick = `Bonjour ${firstname}, c'est super`;
console.log(delcarationBacktick)

let insertionMot = `Bonjour ${firstname} et bienvenue au cours de JS !`
console.log(insertionMot);

// Concaténation, c'est le fait de mettre bout à bout au minimum 2 chaînes de caractères.
// Solution 01 (avec des +)
let heros = 'Gojo';
let herosPref = 'Mon personnage de manga préféré est ' + heros;
console.log(herosPref)

// Solution 02
let story
story = 'Hier j\'ai vu un film au cinéma';
story += ', aujourd\'hui je serai sur Amazon Prime';
story += ', demain je lirai';
console.log(story);

// Attention avec les chiffres
let exempleChiffreNumber = 1
console.log(exempleChiffreNumber);
let exempleChiffreString = '1';
console.log(exempleChiffreString);


let chiffre = 1;
chiffre += 1;
console.log(chiffre);

let stringChiffreOk = "Un";
stringChiffreOk += 1;
console.log(stringChiffreOk);

// NaN, c'est normal car tu ne peux multiplier des mots par 2
let stringChiffreNok = "Deux"
stringChiffreNok = stringChiffreNok * 2;
console.log(stringChiffreNok);

let chiffreString = "1";
chiffreString += "1";
console.log(chiffreString);

let concatene=('10' + 20);
console.log(concatene);
let multiple=('10' * 20);
console.log(multiple);
let soustrait=('10' - 20);
console.log(soustrait);
let divise=('10' / 20);
console.log(divise);

// toUpperCase() permet de mettre en majuscule
let testMaj = "Je veux être en majuscule.";
let majuscule = testMaj.toUpperCase();
console.log(majuscule);

// toLowerCase() permet de mettre en miniscule
let testMin = "JE VEUX ÊTRE EN MINISCULE."
let miniscule = testMin.toLowerCase();
console.log(miniscule);

// indexOf('Caractère') fonction qui permet de connaître la position d'un caractère
// dans la chaîne de caractère, attention nous commençons à compter à partir de 0.
let phraseIndex = "monmail@gmail.com"
let position = phraseIndex.indexOf("@")
console.log(position);

// lenght fonction qui permet de connaître la longueur d'une chaîne de caractère
let longueur = phraseIndex.length
console.log(longueur);

// substring(point de départ, point d'arrivée) permet de récupérer une partie d'une chaîne de caractère
let recuperation = phraseIndex.substring(0,7);
console.log(recuperation);

recuperation = phraseIndex.substring(8, phraseIndex.length-1);

recuperation = phraseIndex.substring(8);
console.log(recuperation);

// Possible d'utiliser plusieurs fonction
recuperation = phraseIndex.substring(phraseIndex.indexOf("@"))
console.log(recuperation);

// slice(val début, val fin) fonctionne comme substring
let decoupage = phraseIndex.slice(0,7);
console.log(decoupage);

// split permet de transformer une chaîne de caractère en tableau ou en liste
let passageListe = ("Hello World !").split(" ");
console.log(passageListe);
let listePerso = "Naruto, Goku, Luffy, Eren, Mob";
let transfolistePerso = listePerso.split(", ");
console.log(transfolistePerso);

// replace(chaîne de caractère) qui permet de modifier un élément d'une chaîne de caractère
let replaceHeros = listePerso.replace("Luffy", "Saïtama")
console.log(replaceHeros);

//  Attention, le .replace ne remplace que la 1ère redondance
let replaceVirgule = listePerso.replace(",", " /")
console.log(replaceVirgule);