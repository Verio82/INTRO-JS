//Definir el objeto deportista
const prompt = require("prompt-sync")();

let deportista = {
    nombre: prompt("Ingrese el nombre del deportista: "),
    energia: parseFloat(prompt("Ingrese la energia del deportista (0-100): ")),
    experiencia: parseFloat(prompt("Ingrese la experiencia del deportista (0-100): ")),

    entrenarHoras: function(horas) {
        this.energia -= horas * 5;
        this.experiencia += horas * 2;
    }
};

deportista.entrenarHoras(3);

//Mostrar por consola el nombre, energia y experiencia del deportista
console.log(`Nombre: ${deportista.nombre}`);
console.log(`Energia: ${deportista.energia}`);  
console.log(`Experiencia: ${deportista.experiencia}`);
