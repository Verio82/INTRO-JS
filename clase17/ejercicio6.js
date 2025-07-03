//Escribe una función "gestionarAutos" que realice las siguientes tareas

let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";

function gestionarAutos(cadenaMarcas) {
  // Convertir la cadena en array y limpiar espacios
  let marcas = cadenaMarcas.split(",").map(marca => marca.trim());

  // 1. Ya quitamos los espacios con .trim() arriba

  // 2. Verificar si existe la marca "Tesla"
  let existeTesla = marcas.includes("Tesla");

  // 3. Reemplazar todas las marcas "Ford" por "BMW"
  marcas = marcas.map(marca => (marca === "Ford" ? "BMW" : marca));

  // 4. Encontrar el índice de "Chevrolet"
  let indiceChevrolet = marcas.indexOf("Chevrolet");

  // 5. Devolver una cadena de marcas ordenadas alfabéticamente y separadas por puntos
  let marcasOrdenadas = marcas.sort();
  let cadenaFinal = marcasOrdenadas.join(".");

  // Devolver un objeto con los resultados
  return {
    existeTesla,
    indiceChevrolet,
    cadenaFinal
  };
}

// Uso de la función
let resultado = gestionarAutos(entrada);

console.log("¿Existe Tesla?", resultado.existeTesla);
console.log("Índice de Chevrolet:", resultado.indiceChevrolet);
console.log("Marcas ordenadas y separadas por puntos:", resultado.cadenaFinal);