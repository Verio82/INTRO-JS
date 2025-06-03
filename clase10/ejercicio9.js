const prompt = require("prompt-sync")();
//Pide al usuario que ingrese su peso y su altura
let peso = parseFloat(prompt("Ingrese su peso en kilogramos: "));
let altura = parseFloat(prompt("Ingrese su altura en metros: "));
//Calcula el IMC
let imc = peso / (altura * altura);
//Muestra el IMC 
console.log(`Su IMC es: ${imc.toFixed(2)}`);