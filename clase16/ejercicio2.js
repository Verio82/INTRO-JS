//Filtra los números pares de una lista 

let numeros = [1, 2, 3, 4, 5, 6];
let pares = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  }
}

console.log(pares);