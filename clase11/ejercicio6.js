const prompt = require("prompt-sync")();
//Pide al usuario que ingrese un numero

let numero = parseFloat(prompt("Ingrese un numero: ")); 
//Imprima la tabla de multiplicar del 1 al 10 del numero ingresado
console.log(`Tabla de multiplicar del ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
