const prompt = require("prompt-sync")();
//Pide al usuario que ingrese su edad
let edad = parseInt(prompt("Por favor ingrese su edad: "));
//Verificar si es mayor o menor de edad y mostrar un mensaje segun el caso
if (edad >= 18){console.log("Acceso permitido");

} else {console.log("No se permite el acceso a menores de edad.");

}