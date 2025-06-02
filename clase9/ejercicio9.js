const prompt = require("prompt-sync")();
//Define una constante PI
const PI = 3.14159
// Pide al usuario que ingrese el radio de un circulo
let radio = parseFloat(prompt("Ingrese la longitud del radio del circulo: "));
//Calcular el area y perimetro 
let area = PI * (radio * radio);
let perimetro = PI * (radio * 2);
console.log("El area del circulo es " + area + " y el perimetro es " + perimetro);
