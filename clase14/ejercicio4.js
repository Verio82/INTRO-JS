//Solicita al usuario la cantidad de productos comprados y el precio unitario
const prompt = require("prompt-sync")();
let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos comprados: "));
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto: "));
//Usa una funcion flecha para calcular el total con descuento segun la cantidad
const calcularTotalConDescuento = (cantidad, precio) => {
    let total = cantidad * precio;
    if (cantidad >= 10 && cantidad <= 20) {
        total *= 0.9; // 10% de descuento
    } else if (cantidad > 20) {
        total *= 0.8; // 20% de descuento
    }
    return total;
};
//Muestra el total con descuento por consola
console.log(`El total a pagar con descuento es: ${calcularTotalConDescuento(cantidadProductos, precioUnitario).toFixed(2)}`);
