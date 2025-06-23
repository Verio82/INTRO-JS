//Solicitar al usuario el precio de un producto y el porcentaje de IVA
const prompt = require("prompt-sync")();
let precioProducto = parseFloat(prompt("Ingrese el precio del producto: "));
let porcentajeIva = parseFloat(prompt("Ingrese el porcentaje de IVA: "));
//Usa una funcion flecha para calcular el precio final 
const calcularPrecioFinal = (precioProducto, porcentajeIva) => {
    let precioFinal = precioProducto + (precioProducto * porcentajeIva / 100);
    return precioFinal;
};  
//Muestra el precio final por consola
console.log(`El precio final del producto es: ${calcularPrecioFinal(precioProducto, porcentajeIva)}`);

