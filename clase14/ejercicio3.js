//Solicita al usuario una edad
const prompt = require ("prompt-sync")();
let edad = parseInt(prompt("Ingrese su edad: "));
//Usa una funcion flecha para clasificarla
const clasificarEdad = (edad) => {
    if (edad < 0) {
        return "Edad no válida";
    } else if (edad >= 0 && edad <= 12) {
        return "Niño";
    } else if (edad >= 13 && edad <= 20) {
        return "Adolescente";
    } else if (edad >= 21 && edad <= 65) {
        return "Adulto";
    } else {
        return "Adulto mayor";
    }
}; 

let clasificacion = clasificarEdad(edad);
//Muestra la clasificación por consola
console.log(`La clasificación de la edad es: ${clasificacion}`);
