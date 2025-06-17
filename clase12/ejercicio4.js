//Registra las notas de varios estudiantes usando arrays y mostrarlas por pantalla.
const prompt = require("prompt-sync")();
let cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes: ")); 
let notasEstudiantes = [];
for (let i = 0; i < cantidadEstudiantes; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota del estudiante ${i + 1}: `));
    notasEstudiantes.push(nota);
}
// Muestra las notas ingresadas
console.log("Notas de los estudiantes:");   
for (let i = 0; i < notasEstudiantes.length; i++) {
    console.log(`Estudiante ${i + 1}: ${notasEstudiantes[i]}`);
}
