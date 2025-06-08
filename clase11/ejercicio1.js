const prompt = require("prompt-sync")();
//Pide al usuario que ingrese un numero cualquiera
let numero = parseFloat(prompt("Ingrese un numero: "));
//Determina si el numero es positivo, negativo o cero
if (numero > 0) {
    console.log("El numero " + numero + " es positivo.");
} else if (numero < 0) {
    console.log("El numero " + numero + " es negativo.");
} else {
    console.log("El numero es cero.");
}
