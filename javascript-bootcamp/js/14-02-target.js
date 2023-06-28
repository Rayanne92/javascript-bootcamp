"use strict";

// -----.target récupère l'élèment où a lieu l'event -----

// 1) Selectionner la cible de l'action
let actionBody = document.getElementById("le-body");

// 2) Je créé la fonction
function utilisationTarget(actionDeEvent) {
    // .target récupère les informations de balise l'élément
    let laTarget = actionDeEvent.target;
    // .target récupère l'id de l'élément
    let laTargetId = actionDeEvent.target.id;
    // .target récupère la classe de l'élément
    let laTargetClassName = actionDeEvent.target.className;
    // .target récupère la valeur de l'élément (fonctionne que pour les éléments de formulaires)
    let laTargetValue = actionDeEvent.target.value;
    // .target récupère le contexte contenu de l'élément
    let laTargetText = actionDeEvent.target.innerText;
    // Je vais afficher les valeurs dans le paragraphe "résultat-clic"
    document.getElementById("resultat-clic").innerHTML = `Balise : ${laTarget}<br>
    id : ${laTargetId}<br>
    class : ${laTargetClassName}<br>
    value :  ${laTargetValue}<br>
    texte :  ${laTargetText}`
}

// 3) Je vais lancer une fonction qui va se lancer au clic
// sur n'importe quel élément du Body
actionBody.addEventListener('click', utilisationTarget);