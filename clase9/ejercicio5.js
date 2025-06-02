const prompt = require("prompt-sync")();
//Pide al usuario que ingrese tres numeros
let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));
let numero3 = parseFloat(prompt("Ingrese el tercer numero: "));
//Determine cual es el mayor
if (numero1 > numero2 && numero1 > numero3){console.log("El primer numero es el mayor de todos")

} else if (numero2 > numero1 && numero2 > numero3){console.log("El segundo numero es el mayor de todos")

} else {console.log("El tercer numero es el mayor de todos")};
