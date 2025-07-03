//Ejercicio extra

let list = [12, 3, 5, 7, 1, 22, 47, 100];

// Función Bubble Sort para ordenar la lista de menor a mayor
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Intercambiar
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    n--; // Optimización: cada pasada finaliza el mayor al final
  } while (swapped);
  
  return arr;
}

// Función búsqueda binaria (igual que antes)
function busquedaBinaria(array, objetivo) {
  let izquierda = 0;
  let derecha = array.length - 1;

  while (izquierda <= derecha) {
    let medio = Math.floor((izquierda + derecha) / 2);

    if (array[medio] === objetivo) {
      return medio;
    } else if (array[medio] < objetivo) {
      izquierda = medio + 1;
    } else {
      derecha = medio - 1;
    }
  }

  return -1;
}

// Ordenar la lista primero
let listaOrdenada = bubbleSort(list.slice()); // Usamos slice() para no modificar el original

console.log("Lista ordenada:", listaOrdenada);

// Números a buscar
let numerosABuscar = [12, 5, 22, 100];

// Buscar e imprimir resultados
numerosABuscar.forEach(num => {
  let posicion = busquedaBinaria(listaOrdenada, num);
  if (posicion !== -1) {
    console.log(`El número ${num} está en la posición: ${posicion}`);
  } else {
    console.log(`El número ${num} no se encontró en la lista.`);
  }
});