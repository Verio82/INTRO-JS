const prompt = require("prompt-sync")();
//Declara dos variables booleanas
let condicion1 = false;
let condicion2 = false;
//Pide al usuario que ingrese dos valores booleanos
condicion1 = prompt("Ingrese el valor de la primera condicion (true/false): ").toLowerCase() === 'true';
condicion2 = prompt("Ingrese el valor de la segunda condicion (true/false): ").toLowerCase() === 'true';
//Muestra el resultado de diversas combinaciones logicas
console.log("Condicion 1: " + condicion1 + " || Condicion 2: " + condicion2 + " => " + (condicion1 || condicion2));
console.log("Condicion 1: " + condicion1 + " && Condicion 2: " + condicion2 + " => " + (condicion1 && condicion2));


