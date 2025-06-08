//¡Estás a cargo de organizar un desfile! Tenés que decidir cuántos personajes van a participar y qué emoji representa a tu equipo. Usando un bucle for, mostrá cómo desfilan uno a uno por la pasarela.
const prompt = require("prompt-sync")();
let cantidadPersonajes = parseInt(prompt("Ingrese la cantidad de personajes que van a participar del desfile: "));
let equipo = prompt("Ingresá tus emojis favoritos para el desfile (ej: 🐶🐱)");


for (let i = 1; i <= cantidadPersonajes; i++) {
    console.log( i + ". " + equipo + " desfilando por la pasarela.");   
  }
console.log("¡Bienvenidos al desfile de personajes! 🎉");