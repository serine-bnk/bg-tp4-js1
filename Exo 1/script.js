"use strict"; 

// Constantes : voir slide 38
const nom = "John";
const prenom = "Doe";
const age = 30;
const note = 15;
const pi = 3.14;

// Fonctions et affichage dans la console slide 46,47 et 34
function f1() { console.log(nom); }
function f2() { console.log(prenom); }
function f3() { console.log(nom + "-" + prenom); } 
function f4() { console.log(age); }
function f5() { console.log(note); }
function f6() { console.log(pi); }

// Retrouver un élément HTML Par identifiant 61 EventListener 139
document.getElementById("btn1").addEventListener("click", f1);
document.getElementById("btn2").addEventListener("click", f2);
document.getElementById("btn3").addEventListener("click", f3);
document.getElementById("btn4").addEventListener("click", f4);
document.getElementById("btn5").addEventListener("click", f5);
document.getElementById("btn6").addEventListener("click", f6);