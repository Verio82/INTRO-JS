//Análisis y Modificación de Cadenas de Texto

const prompt = require('prompt-sync')(); // Para poder usar prompt en Node.js

function procesarOracion(oracion) {
  // 1. Quitar espacios al inicio y al final
  let oracionTrimmed = oracion.trim();

  // 2. Dividir la oración en palabras
  let palabras = oracionTrimmed.split(" ");

  // 3. Reemplazar todas las 'a' por '@' en cada palabra
  let palabrasReemplazadas = palabras.map(palabra => palabra.replace(/a/g, "@"));

  // 4. Encontrar la posición de la primera aparición de "javascript" (ignorando mayúsculas/minúsculas)
  let posicion = -1;
  for (let i = 0; i < palabrasReemplazadas.length; i++) {
    // Comparamos en minúsculas y sin reemplazos para no falsear la búsqueda
    if (palabras[i].toLowerCase() === "javascript") {
      posicion = i;
      break;
    }
  }

  // 5. Convertir la oración a una cadena de palabras separadas por guiones
  let oracionConGuiones = palabrasReemplazadas.join("-");

  // Devolver resultados en un objeto
  return {
    oracionConGuiones: oracionConGuiones,
    posicionJavascript: posicion
  };
}

// Pedir al usuario que ingrese la oración
let oracionUsuario = prompt("Ingrese una oración:");

let resultado = procesarOracion(oracionUsuario);

console.log("Oración con guiones y vocales reemplazadas:", resultado.oracionConGuiones);
console.log("Posición de 'javascript':", resultado.posicionJavascript);