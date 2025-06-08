const prompt = require("prompt-sync")();
//Pide al usuario que ingrese dos numeros y una operacion matematica a realizar
let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));
let operacion = prompt("Ingrese la operacion a realizar (suma, resta, multiplicacion, division): ").toLowerCase();
//Realiza la operacion matematica indicada por el usuario
switch (operacion) {
    case "suma":
        console.log("El resultado de la suma es: " + (numero1 + numero2));
        break;
    case "resta":
        console.log("El resultado de la resta es: " + (numero1 - numero2));
        break;
    case "multiplicacion":
        console.log("El resultado de la multiplicacion es: " + (numero1 * numero2));
        break;
    case "division":
        if (numero2 !== 0) {
            console.log("El resultado de la division es: " + (numero1 / numero2));
        } else {
            console.log("Error: Division por cero no permitida.");
        }
        break;
    default:
        console.log("Operacion no reconocida. Por favor, ingrese una operacion valida.");
}