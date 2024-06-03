'use strict';

// Déclaration - 2 façons de faire
let tableau01, tableau02;

tableau01 = [1, 2, 3, 4, 5, 6, 7];
console.log(tableau01);

tableau02 = new Array (8, 9, 10, 11, 12, 13);
console.log(tableau02);

// Connaître le nombre d'éléments d'un tableau
let longueurTab = tableau01.length;
console.log(longueurTab);

// Savoir si on a bien un tableau Array.isArray(variable)
let verifTab = Array.isArray(tableau01);
console.log(verifTab);

// Connaître la position d'un élément du tableau : nomTableau.indexOf("element")
let tableauHeros = ["Naruto", "Luffy", "Saïtama"];
let positionElement = tableauHeros.indexOf("Luffy")
console.log(positionElement);

// Remplacer un élément du tableau

// Méthode 01
tableauHeros[1] = "Goku"
console.log(tableauHeros);

// Méthode 02 : splice (position de départ, element à prendre en compte) affiche => Attention

tableauHeros.splice(1, 1,'Vegeta');
console.log(tableauHeros);

// Attention, splice peut également supprimer des valeurs d'un tableau
tableauHeros.splice(0,2);
console.log(tableauHeros);

// Vérifier la présence d'un élément dans le tableau (boleen)
let tabFruit = ["Fraise", "Banane", "Poire"];
let verifPresence = tabFruit.includes("Orange");
console.log(verifPresence);

// Ajouter un élément à la fin d'un tableau : tableau.push("valeur")
tabFruit.push("Tomate");
console.log(tabFruit);

// Retirer le dernier élément d'un tableau : tableau.pop("valeur")
tabFruit.pop();
console.log(tabFruit);

// Ajouter un élément au début du tableau : tableau.unshift("valeur")
tabFruit.unshift("Cerise");
console.log(tabFruit);

// Retirer un élément au début du tableau : tableau.shift()
tabFruit.shift();
console.log(tabFruit);