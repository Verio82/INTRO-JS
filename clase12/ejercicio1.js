//Solicita al usuario que ingrese un numerocontinuamente hasta que ingrese un numero negativo

const prompt = require("prompt-sync")(); 
let suma = 0; // Inicializa la variable suma en 0
let numero = 0;
// Solicita al usuario que ingrese un numero
//Mientras el numero sea positivo, solicita un nuevo numero
while (numero >= 0) {
        numero = parseFloat(prompt("Ingrese un numero: "));
        if (numero >= 0) {
            suma += numero; // Suma el numero ingresado a la variable suma  
}}
//mostrar la suma de todos los numeros ingresados
console.log("La suma total de los numeros ingresados es: " + suma);
