const prompt = require("prompt-sync")();
//Pide al usuario que ingrese un numero 
let numero = parseFloat(prompt("Ingrese un numero: "));
//Determina si el numero es par o impar
if (numero % 2 === 0) {
    console.log("El numero " + numero + " es un numero par ya que es divisible por 2.");
}
else {
    console.log("El numero " + numero + " es un numero impar ya que no es divisible por 2.");
}
