const prompt = require("prompt-sync")();
//Pide al usuario que ingrese las longitudes de los tres lados de un triangulo
let lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del triangulo: "));
let lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del triangulo: "));
let lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado del triangulo: "));
//Determinar si el triangulo es equilatero, isosceles o escaleno
if (lado1 == lado2 && lado1 == lado3){console.log("El triangulo es equilatero");

} else if (lado1 == lado2 && lado1 != lado3 || lado1 != lado2 && lado1 == lado3 || lado2 == lado3 && lado2 != lado1){console.log("El triangulo es isosceles");

} else {console.log("El triangulo es escaleno.")};
