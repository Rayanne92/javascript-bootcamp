'use strict';

// Récuperer le conteneur correspondant
// à l'ID et tous les éléments du DOM qui y sont présents
// document.getElementById("id")
let test01 = document.getElementById("test-01");
console.log(test01);

// Récuperer une collection de balise
// (renvoie un tableau)
let recupH2 = document.getElementsByTagName('h2');
console.log(recupH2);

// Récuperer une collection de balise par rapport
// à leur classe (renvoie un tableau)
let recupClasse = document.getElementsByClassName('autres-h2');
console.log(recupClasse);

// Récuperer une collection de balise par rapport àleur attribut name (renvoie un tableau
// NodeList qui siginifie que toutes les modifications du DOM seront prises en compte dans
// le résultat)


let recupNom = document.getElementsByName('courage');
console.log(recupNom);

// Récupère le DOM d'une balise, classe, id. Attention, dans le cas de balises ou de classe
// qui se répètent, querySelector ne renvoie que le 1er résultat


let myQuerySelectr01 = document.querySelector("h2");
console.log(myQuerySelectr01);

// Comme en CSS il est possible d'utiliser un selecteur

let myQuerySelectr02 = document.querySelector("div .autres-h2");
console.log(myQuerySelectr02);

// Récupère le DOM d'une balise, classe, id. Attention, dans le cas de balises ou de classe
// qui se répètent, querySelectorAll renvoie tous les résultats mais sous forme de tableau
// NodeList

let multipleResultSelector = document.querySelectorAll("h2");
console.log(multipleResultSelector);

// Afficher le contenu d'une page (2 méthodes)
// Méthode 01 : innerText
let methode01 = document.getElementById("first-h2").innerText;
console.log(methode01);
// Méthode 02 : innerHTML
let methode02 = document.getElementById("first-h2").innerHTML;
console.log(methode02);

// Remplacer le contenu d'un élément dans le HTML (2 méthodes)
// Méthode 01 : remplacer uniquement le contenu
//   let modif01 = document.getElementById("first-h2").innerText="Gambaru Sasuke";

// Méthode 02 : remplacer le contenu et la structure du DOM
//   let modif02 = document.getElementById("test-02").innerHTML=`<h2 id=remplacement>Je préfère Naruto</h2>`;


// Ajouter du contenu dans le HTML (2 méthodes)
// Méthode 01 : Ajouter uniquement le contenu

let modif03 = document.getElementById("first-h2").innerText+=" et Sasuke";

// Méthode 02 : Ajouter du contenu et la structure du DOM
let modif04 = document.getElementById("test-02").innerHTML+=`<h2 id=remplacement>Je préfère SNK</h2>`;