//Solicitar al usuario 5 calificaciones y calcular el promedio
const prompt = require("prompt-sync")();
let calificaciones = [];
for (let i = 0; i < 5; i++) {
    let calificacion = parseFloat(prompt(`Ingrese la calificación ${i + 1}: `));
    calificaciones.push(calificacion);
}
//Usa una funcion flecha para calcular el promedio
let promedio = (calificaciones) => {
    if (calificaciones.length === 0) return 0;
}
let suma = calificaciones.reduce((acumulador, numero) => acumulador + numero, 0);
let promedioFinal = suma / calificaciones.length;
//Muestra el promedio por consola
console.log(`El promedio de las calificaciones es: ${promedioFinal.toFixed(2)}`);
