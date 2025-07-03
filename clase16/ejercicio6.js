//Agrega un prefijo y un sufijo a cada palabra 

let palabras = ['hola', 'mundo', 'javascript'];
let palabrasTransformadas = [];

for (let i = 0; i < palabras.length; i++) {
  palabrasTransformadas[i] = "¡" + palabras[i] + "!";
}

console.log(palabrasTransformadas);