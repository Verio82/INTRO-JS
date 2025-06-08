//Pide al usuario ingresar un color del semaforo
const prompt = require("prompt-sync")();
let color = prompt("Ingrese un color del semaforo (rojo, amarillo, verde): ").toLowerCase();
//Dependiendo del color ingresado, muestra un mensaje diferente
switch (color) {
    case "rojo": console.log("Alto, no puedes avanzar.");
         break;
    case "amarillo": console.log("Precaución, preparate para avanzar.");
        break;
    case "verde": console.log("Avanza con seguridad.");    
        break;
    default: console.log("Color no reconocido. Ingresa rojo, amarillo o verde.");
        
}