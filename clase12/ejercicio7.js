let matriz = [
    [1, 6, 8, 10, 25],
    [2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21]    
];
//Sumar todos los números de la matriz
let sumaTotal = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        sumaTotal += matriz[i][j];
    }
}
console.log(`La suma total de todos los números de la matriz es: ${sumaTotal}`);
