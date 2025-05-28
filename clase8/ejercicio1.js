const prompt = require("prompt-sync")();
//Calcular el doble de un numero
//Solicitar al usuario que ingrese un numero
let numero = parseFloat(prompt("Ingrese un numero: "));
//Calcular el doble
let resultado = numero * 2;
//Mostrar el resultado en la consola
console.log("El doble del numero ingresado es: " ,(resultado));