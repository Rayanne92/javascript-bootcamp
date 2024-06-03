'use strict';

// Nous allons remplacer le second li de la liste présente dans le HTML
// 1) Créer un nouvel élément
let newElement = document.createElement('li');

// 2) Lui insérer un texte element.textContent
newElement.textContent = `Coucou je m'inscruste`;

// 3) Je récupère l'élément parent (le conteneur)
let recupLi = document.getElementById('liste-perso');
// console.log(recupLi);

// 4) Je cible l'enfant que je souhaite remplacer (le second li)
let oldElement = recupLi.children[1];
// console.log(oldElement);

// 5) Je remplace le Li visé au point 4
recupLi.replaceChild(newElement, oldElement);