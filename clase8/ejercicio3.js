const prompt = require("prompt-sync")();

//Solicitar al usuario que ingrese dos numeros
let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));
//Calcular la suma de ambos numeros
let resultado = numero1 + numero2;
//Mostrar el resultado en la consola
console.log("La suma de los numeros ingresados es: " ,(resultado));