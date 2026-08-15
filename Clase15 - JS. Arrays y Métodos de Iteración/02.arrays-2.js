// 02. Repaso
// 2.1. Resignación por indice
let colores = ["Rojo", "Verde", "Azul"]
console.log(colores);
colores[0] = "Bordo"
console.log(colores);

// 2.2. Desstructuración
const numeros = [1, 2, 3, 4, 5, 6]
console.log(`Array original: ${numeros}` )

// Como hago para extraer valores de una variable y extraerlo a otro
const primero= numeros[0]
console.log(`Extraigo el primero: ${primero}`);

const [a, b] = numeros 
console.log(`Extraigo los dos numeros del array y los asigna a dos constantes independientes: ${a} y ${b}`);

const [,segundo]=numeros 
console.log(`Toma solo el s egundo item del array y los asigna la constante "segundo" ${segundo}`);

const [, segundo2, tercero]=numeros
console.log(`Extraigo el segundo y tercer elemento del array y los asigna a dos constantes independientes ${segundo2} y ${tercero}`);

// Que es desestructuracion de array
// En programación, desestructurar un arreglo (o array) es una sintaxis que permite extraer sus elementos ordenados y asignarlos a variables individuales en una sola línea, sin necesidad de acceder a cada posición por su índice (arreglo[0], arreglo[1]).

// Donde se usa? --> React(state)