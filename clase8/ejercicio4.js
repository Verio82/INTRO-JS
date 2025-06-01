const prompt = require("prompt-sync")();
//Determinar si un numero es par o impar
//Solicitar al usuario que ingrese un numero
let numero = parseInt(prompt("Ingrese un numero entero: "));
//Calcular si es par o impar
if (numero % 2 == 0) {
    console.log(" El numero es par");
    } else {
        console.log("El numero es impar")
    }