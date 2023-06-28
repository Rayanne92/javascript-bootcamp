'use strict';

// --- --- --- --- Boucle for
for (let i = 0; i < 10; i++) {
    console.log(`Je suis l'index ${i}`);
}

// Conditions dans une boucle

// Continue indique à la boucle de continuer
// Même quand la condition est respectée
// Continue est facultatif et de base dans la boucle
for (let i = 0; i < 10; i++) {
    if (i == 2) {
        console.log(`Je m'inscruste`);
        continue;
    } else console.log(`Je suis l'index ${i}`);
}

// Break indique à la boucle de s'arrêter
// Quand la condition est respectée
for (let i = 0; i < 10; i++) {
    if (i == 2) {
        console.log(`Je m'inscruste`);
        break;
    } else console.log(`Je suis l'index ${i}`);
}

// Autres exemples de boucles et conditions
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} est pair.`);
    } else console.log(`${i} est impair.`);
}

// Incrémenter de plus qu'un
for (let i = 0; i < 10; i = i + 2) {
    console.log(`Je suis l'index ${i}`);
}

// --- --- --- --- Boucle While
let i = 0;
while (i < 10) {
    console.log("Hello");
    i = i + 1;
}

let tab = ['pomme', 'cerise', 'poire']
let x = 0;
while (x < tab.lenght) {
    console.log(tab[x]);
    x = x + 1;
}

// --- --- --- --- Boucle Do While
let y = 0
do {
    console.log(`Je suis l'élément ${y}`);
    y++;
} while (y < 10)

// --- --- --- --- Boucle For Each
// (Utilisable qu'avec les tableaux)
let tabHeros = ["batman", "superman", "spiderman"]

tabHeros.forEach(function (element) {
    console.log(element);
});

tabHeros.forEach(function (element, position) {
    console.log(`${element} ${position}`);
});
// ou
tabHeros.forEach((element, position) => {
    console.log(`${element} ${position}`);
});

// --- --- --- --- Boucle Map
// (Utiliser pour transformer un tableau d'objet en tableau)
let tabObjetcar = [
    {
        id: 1,
        marque: "Bentley",
        model: "Continental GT"
    },

    {
        id: 2,
        marque: "Land Rover",
        model: "Evoque"
    },

    {
        id: 3,
        marque: "Rolls Royce",
        model: "Phantom"
    },
]

// Renvoie le tableau d'objet
let infosCar = tabObjetcar.map(function (item) {
    return item;
});
console.log(infosCar);

// Renvoyer les valeurs
infosCar = tabObjetcar.map(function (item) {
    return item.marque;
});
console.log(infosCar);

// Renvoyer plusieurs valeurs
infosCar = tabObjetcar.map(function (item) {
    return `${item.marque} ${item.model}`;
});
console.log(infosCar);

// --- --- --- --- Boucle Objet
let automobile = {
    id: 1,
    brand: "Bentley",
    model: "Continental",
    year: 2019,
    doors: 4,
    speed: "Turbo"
};

for (let key in automobile) {
    console.log(`${key} : ${automobile[key]}`)
};