'use strict';

// let mot = document.getElementById("resultat").innerHTML+=`<span>Mot :</span><br>`;
// let alenvers = document.getElementById("resultat").innerHTML+=`<span>À l'envers :</span><br>`;
// let palindrone = document.getElementById("resultat").innerHTML+=`<span>Le mot n'est/est palindrome.</span>`;

function palindrome() {
    let bodyTarget = document.getElementById("id-mot-saisi").value;
    // Recupérer les mots
    document.getElementById("resultat").innerHTML += `<span>Mot : ${bodyTarget}</span><br>`;
    
    function inverse(inverseMots) {
        return inverseMots.split("").reverse().join("");
    }

    var resultInverseMots = inverse(`${bodyTarget}`)
    document.getElementById("resultat").innerHTML += `<span>A l'envers : ${resultInverseMots}</span><br>`;

    if (bodyTarget.split("").reverse("").join("") === bodyTarget) {
        document.getElementById("resultat").innerHTML += `<span>Ce mot est un palindrome.</span><br>`;
    }
    else document.getElementById("resultat").innerHTML += `<span>Ce mot n'est pas un palindrome !</span><br>`;
}


// Mot :
// A l'envers :
// Le mot est/n'est pas palindrome :