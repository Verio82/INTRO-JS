//Convierte una temperatura de grados Celsius a Fahrenheit
const prompt = require("prompt-sync")();
//Pide al usuario que ingrese una temperatura en grados Celsius
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
//Convierte la temperatura a Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;
//Muestra la temperatura en grados Fahrenheit
console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);
