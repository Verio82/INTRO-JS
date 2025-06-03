const prompt = require("prompt-sync")();
//Pide al usuario que ingrese el precio original y el porcentaje de descuento
let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto: "));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));
//Calcula el precio con descuento
let montoDescuento = (precioOriginal * porcentajeDescuento) / 100;
let precioConDescuento = precioOriginal - montoDescuento;
//Muestra el precio con descuento
console.log(`El precio con descuento es: $${precioConDescuento.toFixed(2)}`);
