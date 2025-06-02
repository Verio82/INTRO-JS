const prompt = require("prompt-sync")();
//Declara una variable nombre y pide al usuario que ingrese su nombre
let nombre = prompt("Ingrese su nombre: ");
let miNombre = "Vero";
//Verifica si el nombre ingresado es igual a tu nombre
if (nombre === miNombre ) {console.log("Hay coincidencia")
} else {console.log("Los nombres no coinciden")
}