const prompt = require("prompt-sync")();
//Declara dos constantes: edadMinima y edadMaxima
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;
//Pide al usuario que ingrese su edad
let edad = parseInt(prompt("Ingrese su edad: "));
//Comprueba si la edad ingresada está dentro del rango permitido y muestra un mensaje
if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA) {
    console.log(`Edad válida: ${edad} años.`);
} else {
    console.log(`Edad inválida: ${edad} años. Debe estar entre ${EDAD_MINIMA} y ${EDAD_MAXIMA} años.`);
};
