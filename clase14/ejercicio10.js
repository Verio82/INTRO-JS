//Escribe un programa para contar cuántas veces el usuario menciona sus flores favoritas
// Paso 1: Inicializa un array vacío para las flores favoritas
let floresFavoritas = [];
const prompt = require("prompt-sync")();

// Paso 2: Pedir al usuario que ingrese sus 3 flores favoritas (sin usar push)
floresFavoritas[0] = prompt("Ingresa tu primera flor favorita:");
floresFavoritas[1] = prompt("Ingresa tu segunda flor favorita:");
floresFavoritas[2] = prompt("Ingresa tu tercera flor favorita:");

// Paso 3: Pregunta al usuario por una flor específica
let florBuscada = prompt("¿Qué flor querés buscar en tu lista de favoritas?");

// Paso 4: Verificar cuántas veces se mencionó la flor buscada manualmente
let contador = 0;

for (let i = 0; i < floresFavoritas.length; i++) {
  if (floresFavoritas[i].toLowerCase() === florBuscada.toLowerCase()) {
    contador++;
  }
}

// Mostrar resultado
if (contador > 0) {
  console.log(`La flor "${florBuscada}" fue mencionada ${contador} vez/veces en tus favoritas.`);
} else {
  console.log(`La flor "${florBuscada}" no está entre tus favoritas.`);
}