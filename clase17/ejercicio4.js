// Transformación y Análisis de Cadenas 

const prompt = require('prompt-sync')();

function transformarYAnalizarNombres(listaNombres) {
  // 1. Quitar espacios en blanco alrededor de cada nombre
  let nombresLimpios = listaNombres.map(nombre => nombre.trim());

  // 2. Verificar si existe el nombre "Juan"
  let existeJuan = nombresLimpios.includes("Juan");

  // 3. Reemplazar todos los nombres "Maria" por "Ana" (considerando mayúsculas y acentos)
  nombresLimpios = nombresLimpios.map(nombre => {
    // Para mayor robustez, ignoramos mayúsculas y acentos en la comparación
    let nombreMinuscula = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (nombreMinuscula === "maria") {
      return "Ana";
    }
    return nombre;
  });

  // 4. Encontrar el índice del nombre "Pedro"
  let indicePedro = nombresLimpios.indexOf("Pedro");

  // 5. Devolver una cadena de nombres en orden alfabético separados por puntos
  let nombresOrdenados = nombresLimpios.sort();
  let cadenaFinal = nombresOrdenados.join(".");

  // Retornamos un objeto con los resultados
  return {
    nombresLimpios,
    existeJuan,
    indicePedro,
    cadenaFinal
  };
}

// Pedir al usuario que ingrese la lista de nombres separados por comas
let entradaUsuario = prompt("Ingrese los nombres separados por comas (Ej: Julian, Maria, Malena, Andrea, Pablo, Pedro):");

// Convertimos el string en un array
let listaNombres = entradaUsuario.split(",");

// Procesamos la lista con la función
let resultado = transformarYAnalizarNombres(listaNombres);

// Mostrar resultados por consola
console.log("Nombres limpiados:", resultado.nombresLimpios);
console.log("¿Existe el nombre 'Juan'? ", resultado.existeJuan);
console.log("Índice de 'Pedro':", resultado.indicePedro);
console.log("Cadena final ordenada y separada por puntos:", resultado.cadenaFinal);