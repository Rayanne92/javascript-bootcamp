"use strict";

// ----- addEventListener("action", fonction) -----
// Dans l'ordre :
// 1) Je séléctionne ma cible
// 2) Je créé ma (ou mes) fonction qui se lancera à l'action de la souris
// 3) Je met en place mon (ou mes) addEventListener (click, contextmenu, etc.) qui est un lien entre
// l'action de la souris et la fonction à lancer



// ----- [Action sur le bouton] -----
// 1) Selectionner la cible de l'action
let actionButton = document.getElementById("btn");
// 2) Je créé ma fonction
function getClick(actionDeEvent) {
    console.log(`L'évènement est : ${actionDeEvent.type}`);
    // alert permet de faire une alerte
    alert(`L'évènement est : ${actionDeEvent.type}`);
}
// 3) Faire l'action au clic
actionButton.addEventListener('click', getClick);



// ----- [Action sur l'image] -----
// 1) Selectionner la cible de l'action
let actionImg = document.getElementById("img-luffy");
// 2) Je créé ma fonction
function getClick02(actionDeEvent) {
    // ----- preventDefault() permet d'arrêter l'action/évènement
    // Annuler le clic droit sur l'élément (pas de fenêtre d'option)
    actionDeEvent.preventDefault();
}
// 3) Faire l'action sur le contextmenu
actionImg.addEventListener(`contextmenu`, getClick02);



// ----- [Action sur le logo Apple] -----
// 1) Selectionner la cible de l'action
let actionApple = document.getElementById("img-apple");
// 2) Je créé ma fonction
function getClick03(actionDeEvent) {
    console.log(`L'évènement est : ${actionDeEvent.type}`);
    window.open("https://www.apple.com", '_blank');
}
// 3) Action au double-clic
actionApple.addEventListener(`dblclick`, getClick03);



// ----- [Actions sur la div bleu Apple] -----
// 1) Selectionner la cible de l'action
let actionDiv01 = document.getElementById("div-test-01");
// 2) Je créé mes fonctions
function getClick04(actionDeEvent) {
    console.log(`L'évènement est : ${actionDeEvent.type}`);
    actionDiv01.setAttribute("class", "green");
}

function getClick05(actionDeEvent) {
    console.log(`L'évènement est : ${actionDeEvent.type}`);
    actionDiv01.setAttribute("class", "blue");
}
// 3) Action au passage sur l'élement (fonctionne aussi avec mouseenter)
// ET Action en sortant d'un élément avec la souris (fonctionne aussi avec mouseleave)
actionDiv01.addEventListener(`mouseover`, getClick04);
actionDiv01.addEventListener(`mouseout`, getClick05);



// ----- [Actions sur la div noir Apple] -----
// 1) Selectionner la cible de l'action
let actionDiv02 = document.getElementById("div-test-02");
// 2) Je créé mes fonctions
function getClick06(actionDeEvent) {
    console.log(`L'évènement est : ${actionDeEvent.type}`);
    actionDiv02.style.color="white";
}

function getClick07(actionDeEvent) {
    console.log(`L'évènement est : ${actionDeEvent.type}`);
    actionDiv02.style.color="blue";
}

function getClick08(actionDeEvent) {
    console.log(`L'évènement est : ${actionDeEvent.type}`);
    actionDiv02.style.color="black";
}
// 3) Action quand le clic gauche ou droit est appuyé sur l'élément
// ET Action quand le clic gauche ou droit est relaché sur l'élément
// ET Action quand on bouge la souris sur l'élément
actionDiv02.addEventListener(`mousedown`, getClick06);
actionDiv02.addEventListener(`mouseup`, getClick07);
actionDiv02.addEventListener(`mousemove`, getClick08);

