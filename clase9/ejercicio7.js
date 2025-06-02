const prompt = require("prompt-sync")();
//Pide al usuario que ingrese su peso en kilogramos
let pesokg = parseFloat(prompt("Ingrese su peso en kilogramos: "));
//Convertirlo a libras y mostrarlo en un mensaje
let resultado = pesokg * 2.20462;
console.log("Su peso en libras es: " + (resultado));
