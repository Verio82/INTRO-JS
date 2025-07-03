//Escribe una función "gestionarFloreria" que realice las siguientes tareas 

let entrada = "Rosa, Tulipan, Orquidea, Lirio";

function gestionarFloreria(cadenaFlores) {
  // 1. Convertir cadena en array y limpiar espacios
  let flores = cadenaFlores.split(",").map(flor => flor.trim());

  // 2. Verificar si existe "Margarita"
  if (flores.includes("Margarita")) {
    flores.push("Azucena");
  }

  // 3. Reemplazar todas las "Orquidea" por "Clavel"
  flores = flores.map(flor => (flor === "Orquidea" ? "Clavel" : flor));

  // 4. Encontrar índice de "Girasol"
  let indiceGirasol = flores.indexOf("Girasol");
  if (indiceGirasol === -1) {
    // Si no está, agregar al inicio
    flores.unshift("Girasol");
  }

  // 5. Devolver cadena ordenada alfabéticamente y separada por puntos
  flores.sort();
  return flores.join(".");
}

// Uso de la función
let resultado = gestionarFloreria(entrada);

console.log(resultado);