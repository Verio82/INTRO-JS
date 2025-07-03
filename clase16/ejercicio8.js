//Busca un nombre específico 

let nombres = ['Carlos', 'Daniel', 'aura', 'Ana'];
let nombreBuscado = nombres.find(nombre => nombre === 'Laura');

if (nombreBuscado) {
  console.log(`El nombre "${nombreBuscado}" está presente en la lista.`);
} else {
  console.log('El nombre "Laura" no está en la lista.');
}