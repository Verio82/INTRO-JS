const prompt = require("prompt-sync")();
//Declara dos variables: edad y peso
let edad = prompt("Ingrese su edad: ");
let peso = prompt("Ingrese su peso: ");
//Pide al usuario que ingrese su nombre, su edad y su peso
let nombre = prompt("Ingrese su nombre: ");
//Muestra un mensaje personalizado
console.log(`Hola, ${nombre}. Tienes ${edad} años y pesas ${peso} kg.`);
