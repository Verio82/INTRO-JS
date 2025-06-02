const prompt = require("prompt-sync")();
//Pide al usuario que ingrese dos numeros y muestra cual es mayor o si son iguales
let numero1 = parseFloat(prompt("Ingrese numero uno: "));
let numero2 = parseFloat(prompt("Ingrese numero dos: "));
if (numero1 > numero2){console.log(numero1, "es mayor que", numero2)}
else if (numero2 > numero1){console.log(numero2, "es mayor que", numero1)}
else if (numero1 = numero2)(console.log("Son iguales"));