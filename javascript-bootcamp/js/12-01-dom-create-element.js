'use strict';

// Ajouter des attributs à une balise (ici le 1er h1 du code HTML)

// 1) Récuperer la balise dans une varaible
let main = document.querySelector("h1");
console.log(main);
// Ou
let main02 = document.getElementsByTagName("h1");
console.log(main02[0]);

// 2) Ajouter les éléments
main.setAttribute('class', 'green');
main.setAttribute('id', 'gros-titre');

// Ajouter une balise dans le main
// 1) Récupérer la balise du conteneur dans une variable
let lePrincipal = document.getElementsByTagName('main');
console.log(lePrincipal[0]);

// 2) Ajouter la nouvelle balise
let newH3 = document.createElement("h3");

// 3) Ajouter des attributs à la nouvelle balise si besoin
newH3.setAttribute('id', 'blue');
console.log(newH3);

// 4) Ajouter la nouvelle balise au main
lePrincipal[0].appendChild(newH3);



// --- --- --- --- --- Ajouter une balise a un endroit précis
// 1) Créer une nouvelle balise et y
// Ajouter des attributs à la nouvelle balise si besoin
let newH4 = document.createElement("h4");
newH4.setAttribute('id', 'yellow');
console.log(newH4);

// 2) Récuperer la balise qui la suivra et transformer en parentNode

let suivant = document.getElementById("second-h2");
console.log(suivant);
let transfoNode = suivant.parentNode
console.log(transfoNode);

// 3) Ajouter la nouvelle balise au main avant le 2ème H2
transfoNode.insertBefore(newH4, suivant);