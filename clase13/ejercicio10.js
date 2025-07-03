//Crea una función expresada llamada calcularFactorial que reciba un número 
//y devuelva su factorial. 

const calcularFactorial = function(numero) {
  if (numero < 0) {
    return "El factorial no está definido para números negativos.";
  }
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
}
let resultado = calcularFactorial(5);
console.log("El factorial de 5 es: " + resultado);