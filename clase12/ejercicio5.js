//Solicita al usuario que ingrese 5 nombres y almacenalos en un array
const prompt = require("prompt-sync")();
let nombres = [];
for (let i = 0; i < 5; i++) {
    let nombre = prompt(`Ingrese el nombre ${i + 1}: `);
    nombres.push(nombre);
}
    //Solicita al usuario que ingrese un nombre a buscar en el array
let nombreABuscar = prompt("Ingrese el nombre a buscar: "); 
//Busca el nombre en el array y muestra un mensaje indicando si se encontró o no
if (nombres.includes(nombreABuscar)) {
    console.log(`El nombre ${nombreABuscar} se encuentra en la lista.`);
} else {
    console.log(`El nombre ${nombreABuscar} no se encuentra en la lista.`);
    
    
    }