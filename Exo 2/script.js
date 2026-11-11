"use strict"; 

// Variables et Constantes Les Types Complexes 38
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

const etudiant = {nom: "John", prenom: "DOE", age: 30}

const etudiantsOBJ = [
    {nom: "nom1", prenom: "prenom1", age:21},
    {nom: "nom2", prenom: "prenom2", age:22},
    {nom: "nom3", prenom: "prenom3", age:23},
];

// Fonctions et affichage dans la console slide 46,47 et 34 
// Boucle for 44
function f1() { 
    for(const e of etudiants){
        console.log(e);
    }
}

function f2(){
    console.log(etudiant);
}

function f3(){
    for(const e of etudiantsOBJ){
        console.log(e.nom + "-" + e.prenom + "-" + e.age);
    }
}

// Retrouver un élément HTML Par identifiant 61 EventListener 139
document.getElementById("btn1").addEventListener("click", f1);
document.getElementById("btn2").addEventListener("click", f2);
document.getElementById("btn3").addEventListener("click", f3);