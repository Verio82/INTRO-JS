const prompt = require("prompt-sync")();
//Definir minimo y maximo
const RANGO_MINIMO = 88;
const RANGO_MAXIMO = 1589;
//Pedir al usuario que ingrese un numero y verificar si esta dentro del rango
let VALOR = parseFloat(prompt("Ingrese un valor: "));
if (VALOR >= RANGO_MINIMO && VALOR <= RANGO_MAXIMO){console.log("El numero " + VALOR + " esta dentro del rango.")
} else {
    console.log("El numero " + VALOR + " no se encuentra dentro del rango.")
}
