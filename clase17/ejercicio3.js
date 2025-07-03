//Gestión Compleja de Arrays 

let productos = [
  { nombre: "Camisa", precio: 30 },
  { nombre: "Pantalón", precio: 45 },
  { nombre: "Zapatos", precio: 60 },
  { nombre: "Gorra", precio: 20 }
];

function gestionarProductos(arrayProductos, nuevoProducto, nombreBuscado) {
  // 1. Añadir un nuevo producto al array
  arrayProductos.push(nuevoProducto);

  // 2. Eliminar el último producto del array
  arrayProductos.pop();

  // 3. Encontrar el índice de un producto específico por nombre
  let indiceProducto = arrayProductos.findIndex(producto => producto.nombre === nombreBuscado);

  // 4. Verificar si existe un producto con precio mayor a 50
  let existePrecioMayor50 = arrayProductos.some(producto => producto.precio > 50);

  // 5. Devolver una cadena con los nombres de productos separados por comas
  let nombresProductos = arrayProductos.map(producto => producto.nombre).join(", ");

  // Retornar un objeto con toda la info requerida
  return {
    indiceProducto: indiceProducto,
    existePrecioMayor50: existePrecioMayor50,
    nombresProductos: nombresProductos
  };
}

// Ejemplo de uso
let nuevoProducto = { nombre: "Bufanda", precio: 25 };
let nombreBuscado = "Zapatos";

let resultado = gestionarProductos(productos, nuevoProducto, nombreBuscado);

console.log("Índice del producto buscado:", resultado.indiceProducto);
console.log("¿Existe algún producto con precio mayor a 50?", resultado.existePrecioMayor50);
console.log("Nombres de productos:", resultado.nombresProductos);