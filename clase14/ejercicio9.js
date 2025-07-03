//Implementa una función llamada ultimaAparicionModeloAuto(modelo) que 
//encuentre y muestre la última posición en la lista donde aparece el modelo 
//específico de auto dado por modelo.
// Array con modelos de autos (algunos repetidos)
let modelosAutos = ["Toyota", "Ford", "Chevrolet", "Fiat", "Ford", "Honda", "Toyota", "Renault"];

// Función para encontrar la última aparición de un modelo
function ultimaAparicionModeloAuto(modelo) {
  let ultimaPosicion = -1;

  for (let i = 0; i < modelosAutos.length; i++) {
    if (modelosAutos[i].toLowerCase() === modelo.toLowerCase()) {
      ultimaPosicion = i;
    }
  }

  if (ultimaPosicion !== -1) {
    console.log(`El modelo "${modelo}" aparece por última vez en la posición ${ultimaPosicion + 1}.`);
  } else {
    console.log(`El modelo "${modelo}" no está presente en la lista.`);
  }
}


ultimaAparicionModeloAuto("Ford");     // Posición 5 (índice 4)
ultimaAparicionModeloAuto("Toyota");   // Posición 7 (índice 6)
ultimaAparicionModeloAuto("BMW"); // No está presente en la lista
