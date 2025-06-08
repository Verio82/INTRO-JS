//Computadora elige un numero al azar entre 1 y 10. Pide al usuario que adivine el numero y dale 3 intentos
const prompt = require("prompt-sync")();
// Genera un numero al azar entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 3;   
console.log("He elegido un numero entre 1 y 10. Tienes 3 intentos para adivinarlo.");
// Bucle para permitir al usuario adivinar el numero
for (let i = 0; i < intentos; i++) {
    let numeroUsuario = parseInt(prompt(`Intento ${i + 1}: Ingresa tu numero: `));
        if (numeroUsuario === numeroSecreto) {
        console.log("¡Felicidades! Has adivinado el numero.");
        break; 
    } else {
        console.log("No es correcto. Intenta de nuevo.");
    }
    
    if (i === intentos - 1) {
        console.log(`Ese era tu ultimo intento. El numero era: ${numeroSecreto}`);
    }
}