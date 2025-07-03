//Cuenta la cantidad total de letras en una lista de palabras

let palabras = ['sol', 'luna', 'estrella'];

let totalLetras = palabras.reduce((acum, palabra) => acum + palabra.length, 0);
console.log("Total de letras:", totalLetras);
