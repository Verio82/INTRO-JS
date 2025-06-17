const prompt = require("prompt-sync")();
const contraseñaCorrecta = "1234";
let contraseñaIngresada = "    ";
// Solicita al usuario que ingrese una contraseña
do {
    contraseñaIngresada = prompt("Por favor, ingresa la contraseña: ");
    
    } while (contraseñaIngresada !== contraseñaCorrecta);
 
if (contraseñaIngresada === contraseñaCorrecta) {
    // Si la contraseña es correcta, muestra un mensaje de acceso concedido    
console.log("Contraseña correcta. Acceso concedido.");  
}
