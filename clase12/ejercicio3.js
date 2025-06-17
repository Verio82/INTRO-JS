//Contar la cantidad de numeros impares desde al cero hasta un numero ingresado por el usuario
const prompt = require("prompt-sync")();
const numeroIngresado = parseInt(prompt("Por favor, ingresa un número: "));
let contadorImpares = 0;
for (let i = 0; i <= numeroIngresado; i++) {
    if (i % 2 !== 0) {
        contadorImpares++;
    }
} console.log(`La cantidad de números impares desde 0 hasta ${numeroIngresado} es: ${contadorImpares}`);