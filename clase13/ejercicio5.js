//Crea una funcion que reciba dos nombres y devuelva el nombre completo concatenado
const prompt = require("prompt-sync")();


// Solicita al usuario que ingrese dos nombres
let nombre = prompt("Ingrese el nombre: ");
let apellido = prompt("Ingrese el apellido: ");

function concatenarNombres(nombre, apellido) {
    let nombreCompleto = `${nombre} ${apellido}`;
    return nombreCompleto;
}

console.log(`El nombre completo es: ${concatenarNombres(nombre, apellido)}`);
