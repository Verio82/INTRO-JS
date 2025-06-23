//Definir dos objetos: libro 1 y libro 2
let libro1 = {
    titulo: "Queridos monstruos",
    autor: "Elsa Bornemann",
    anioPublicacion: "1991",
};

let libro2 = {
    titulo: "La Resistencia",
    autor: "Ernesto Sabato",
    anioPublicacion: "2006",
}; 
//Crear una funcion que muestre por consola la informacion de cada libro
function mostrarLibro(libros) {
  libros.forEach(function(libro, index) {
    console.log(`Libro ${index + 1}:`);
    console.log(`Título: ${libro.titulo}`);
    console.log(`Autor: ${libro.autor}`);
    console.log(`Año de publicación: ${libro.anioPublicacion}`);
    console.log("---------------------------");
  });
};
let biblioteca = [libro1, libro2];
mostrarLibro(biblioteca);

