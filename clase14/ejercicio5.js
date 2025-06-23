//Solicita al usuario ingresar una marca de auto
const prompt = require("prompt-sync")();
let marcaAuto = prompt("Ingrese la marca del auto: ");
//Verifica si el auto es de origen nacional o importado
const verificarOrigen = (marca) => {
    const marcasNacionales = ["chevrolet", "ford", "fiat"];
    if (marcasNacionales.includes(marca.toLowerCase())) {
        return "El auto es de origen nacional.";
    } else {
        return "El auto es importado.";
    }
};
//Muestra el resultado por consola
console.log(verificarOrigen(marcaAuto));
