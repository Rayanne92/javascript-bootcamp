'use strict';

// Ajouter une classe ou/et un id à une balise qui n'en a pas. Attention si la balise en possède
// elles seront supprimées.
// 1) Récupérer la balise dans une variable

let recupH2 = document.querySelector("h2");
console.log(recupH2);

// 2) Ajouter les éléments setAttribute('nomAttribut', 'valeur')
recupH2.setAttribute('class', 'green');
recupH2.setAttribute('id', 'gros-titre');

// Supprimer un attribut removeAttribute("Nom de l'attribut")
recupH2.removeAttribute('id');

// Récupérer la valeur d'un attribut("Nom de l'attribut")
recupH2.getAttribute("class");
console.log(recupH2.getAttribute("class"));

// Vérifier la présence d'un attribut (retourne un booléen)
recupH2.hasAttribute("class", "nouvelle-classe");
console.log(recupH2.hasAttribute("class", "nouvelle-classe"));

// Récupérer la liste des classes sous forme de string className
let listeClassString = recupH2.className;
console.log(listeClassString);

// Récupérer la liste des classes sous forme de tableau classList
let ListeClassTab = recupH2.classList;
console.log(ListeClassTab);

// Ajouter une classe à une balise qui en possède déjà
recupH2.classList.add("nouvelle-classe");

// Retirer une classe remove("Nom de la classe")
recupH2.classList.remove("green");