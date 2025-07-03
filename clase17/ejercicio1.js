// Manipulación Completa de un Objeto Literal y Arrays

let estudiante = {
  nombre: "Verónica",
  edad: 25,
  notas: [7, 8, 9, 6, 10]
};

// Función que procesa el estudiante según lo pedido
function procesarEstudiante(est) {
  // 1. Agregar una nueva nota (ejemplo: 8)
  est.notas.push(8);

  // 2. Eliminar la primera nota del array
  est.notas.shift();

  // 3. Calcular el promedio de las notas restantes
  let suma = 0;
  for (let i = 0; i < est.notas.length; i++) {
    suma += est.notas[i];
  }
  let promedio = suma / est.notas.length;

  // 4. Convertir el nombre a mayúsculas
  let nombreMayusculas = est.nombre.toUpperCase();

  // 5. Devolver un objeto con el nombre en mayúsculas y el promedio
  return {
    nombre: nombreMayusculas,
    promedio: promedio
  };
}

// Usamos la función y mostramos el resultado
let resultado = procesarEstudiante(estudiante);
console.log(resultado);