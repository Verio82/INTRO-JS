const prompt = require("prompt-sync")();
//Pide al usuario que ingrese dos numeros enteros
let inicio = parseInt(prompt("Ingrese el primer numero entero: ")); 
let fin = parseInt(prompt("Ingrese el segundo numero entero: "));
//Mostrar todos los numeros pares entre el primer y el segundo numero ingresado

inicio >= fin ? console.log("Los valores son invalidos. El segundo numero debe ser mayor al primero.") : " ";

for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
        
    
