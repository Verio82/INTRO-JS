//Crea una funcion declara que reciba un numero y devuelva si es par o impar
function esPar(numero) {
    let resultado = numero % 2 === 0 ? "par" : "impar";
    return `El numero ${numero} es ${resultado}.`;
}
   