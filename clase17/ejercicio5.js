//Manipulación de Arrays y Cadenas

const prompt = require('prompt-sync')();
let frases = [
  "El clima es MALO hoy",
  "Este libro es muy MALO",
  "El servicio aqui es MALO"
];

function procesarFrases(frases) {
  return frases.map(frase => {
    // 1. Convertir la frase a minúsculas
    let fraseMinusculas = frase.toLowerCase();

    // 2. Dividir en palabras
    let palabras = fraseMinusculas.split(" ");

    // 3. Reemplazar "malo" por "bueno"
    let palabrasModificadas = palabras.map(palabra =>
      palabra === "malo" ? "bueno" : palabra
    );

    // 4. Unir palabras en nueva frase
    return palabrasModificadas.join(" ");
  });
}

let resultado = procesarFrases(frases);
console.log(resultado);