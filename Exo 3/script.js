"use strict";

// Variables et Constantes Les Types Complexes 38
const Students = [
    {id: 1000, prenom: "JOHN", nom: "DOE", note: 14, num: 5},
    {id: 2000, prenom: "BOB", nom: "CARLTON", note: 7, num: 1},
    {id: 1000, prenom: "RAYANE", nom: "SMITH", note: 13, num: 3}
]

// Fonctions et affichage dans la console slide 46,47 et 34 
// Boucle for 44
function B(note){
    return note >= 10;
}

function A(){
    for(const e of Students){
        const resultat = B(e.note) ? "ADMIS" :"AJOURNE";
        console.log(e.id + ":" + resultat);
    }
}


// Retrouver un élément HTML Par identifiant 61 EventListener 139
document.getElementById("btn1").addEventListener("click", A);