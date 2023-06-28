'use strict';

let heros = ["Naruto", "Ichigo", "Izuku", "Tanjiro", "Itadori", "Luffy", "Goku", "Kenshiro", "Ranma", "Seiya", "Mob", "Saitama"];

function versus() {

    document.getElementById("affichage").innerHTML += `<span>${heros} vs. ${heros}</span>`;

}
