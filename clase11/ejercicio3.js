const prompt = require("prompt-sync")();
//Pide al usuario que ingrese un numero positivo
let numero = parseFloat(prompt("Ingrese un numero: "));
//Contar desde 1 hasta el numero ingresado
for (let i = 1; i <= numero; i++) {
    console.log(i);
}