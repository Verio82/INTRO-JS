const prompt = require("prompt-sync")();

//Pedirle al usuario que ingrese la cantidad de horas

let entrada = prompt("Ingrese la cantidad de horas: ");

let horas = parseFloat(entrada); // Convertir la entrada a número

function convertirHorasAMinutos(horas) {
  return horas * 60;
}
// Validar que el valor ingresado sea un número válido
if (!isNaN(horas)) {
  let minutos = convertirHorasAMinutos(horas);
  console.log(horas + " horas son " + minutos + " minutos.");
} else {
  console.log("Entrada no válida. Por favor ingrese un número.");
}