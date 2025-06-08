const prompt = require("prompt-sync")();
//Pide al usuario que ingrese un numero entero
let numero = parseInt(prompt("Ingrese un numero entero: "));
//Muestra todos los multiplos del numero ingresado entre 1 y 100
for (let i = 1; i <= 100; i++) {
    if (i % numero === 0) {
        console.log(i);
    }
}