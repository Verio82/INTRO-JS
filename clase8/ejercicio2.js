const prompt = require("prompt-sync")()

//Solicitar al usuario que ingrese un numero
let numero = parseFloat(prompt("Ingrese un numero: "));
let mensaje = " "

if (numero > 0) {
    mensaje = "el numero es positivo";
} else if (numero < 0) {
    mensaje = "el numero es negativo";
} else {
    mensaje = "el numero es cero"
}
//Mostrar el resultado en la consola
console.log(mensaje);