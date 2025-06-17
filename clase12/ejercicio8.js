let matriz = [];

let contador = 1;
// Crea una matriz de 10x10 y llena con números del 1 al 100
for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
        matriz[i][j] = contador;
        contador++;
    }
}
console.table(matriz); // Muestra la matriz en la consola

let diagonalRoja = 0;
let diagonalVerde = 0;

for (let i = 0; i < 10; i++) {   
    diagonalRoja += matriz[i][i]; // Suma de la diagonal roja (de arriba a abajo)
    diagonalVerde += matriz[i][9 - i]; // Suma de la diagonal verde (de abajo a arriba)
};

console.log(`La suma de la diagonal roja es: ${diagonalRoja}`);
console.log(`La suma de la diagonal verde es: ${diagonalVerde}`);
