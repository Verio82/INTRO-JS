//Lugar y números 

let list = [1,2,3,4,5,6,7,8,9,10,11];

function busquedaBinaria(array, objetivo) {
  let izquierda = 0;
  let derecha = array.length - 1;

  while (izquierda <= derecha) {
    let medio = Math.floor((izquierda + derecha) / 2);

    if (array[medio] === objetivo) {
      return medio; // Encontrado, devolvemos índice
    } else if (array[medio] < objetivo) {
      izquierda = medio + 1; // Buscar en la mitad derecha
    } else {
      derecha = medio - 1; // Buscar en la mitad izquierda
    }
  }

  return -1; // No encontrado
}

// Números a buscar
let numerosABuscar = [1, 5, 6, 9, 11];

// Buscar y mostrar resultados
numerosABuscar.forEach(num => {
  let posicion = busquedaBinaria(list, num);
  if (posicion !== -1) {
    console.log(`El número ${num} está en la posición: ${posicion}`);
  } else {
    console.log(`El número ${num} no se encontró en la lista.`);
  }
});