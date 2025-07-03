//Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba 
//una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit. 
const convertirCelsiusAFahrenheit = function(celsius) {
  return (celsius * 9/5) + 32;
};

// Solicita al usuario que ingrese una temperatura en grados Celsius
const prompt = require("prompt-sync")();
let entrada = prompt("Ingrese la temperatura en grados Celsius: ");
let celsius = parseFloat(entrada); // Convertir la entrada a número

let temperaturaFahrenheit = convertirCelsiusAFahrenheit(celsius);
console.log(celsius + "°C son " + temperaturaFahrenheit + "°F");