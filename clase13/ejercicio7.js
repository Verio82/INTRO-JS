//Declara una variable global llamada horaActual. 
let horaActual = 11;

function mostrarSaludo() {
  if (horaActual < 12) {
    console.log("Buenos días");
  } else if (horaActual < 18) {
    console.log("Buenas tardes");
  } else {
    console.log("Buenas noches");
  }
}

// Llamamos a la función para mostrar el saludo
mostrarSaludo();