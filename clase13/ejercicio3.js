//Declara una variable global
let saludoGlobal = "Hola desde el scope global";

//Crea una funcion que declare una variable local
function mostrarMensaje() {
    let saludoLocal = "Hola desde el scope local";
    
    console.log(saludoGlobal)
    console.log(saludoLocal);
}
mostrarMensaje();