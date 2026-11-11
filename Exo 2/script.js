"use strict"; 

const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

const etudiant = {nom: "John", prenom: "DOE", age: 30}

const etudiantsOBJ = [
    {nom: "nom1", prenom: "prenom1", age:21},
    {nom: "nom2", prenom: "prenom2", age:22},
    {nom: "nom3", prenom: "prenom3", age:23},
];

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

document.getElementById("btn1").addEventListener("click", f1);
document.getElementById("btn2").addEventListener("click", f2);
document.getElementById("btn3").addEventListener("click", f3);