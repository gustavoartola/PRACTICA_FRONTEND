// 01 - Concepto de Destructuración - utilización al concepto de estados en REACT

const { useState } = require("react");

// Concepto Destructuración
// Que sea constante tiene un doble proposito
// 1. que no sea modificado su valor directamente.
// 2. que el estado no pierda referencia que pertenece useState
const [num1, setNum1] = useState()

const persona = ["Ana", 25];

// Usando Destructuración
const [nombre, edad] = persona;

console.log(persona);
console.log(nombre, edad);

// Se podria hacer lo mismo,  accediendo directamente al elemnento del array por su indice (pero no es mas engorroso si hay muchos parametros)

// const nombre = persona[0]
// const edad = persona[1]
// console.log(persona);
// console.log(nombre, edad);

function coordenadas() {
  return [10, 5, 7, 13];
}

// Utilizo destructuración
// Saco valores del array en dos constantes x e y
// En este caso el tercer y cuarto elemento del array es ignorado porque no lo extraigo en ninguna constante
const [x, y] = coordenadas();

console.log(coordenadas());
console.log(x, y);

//Otra forma similar de obtener lo mismo, pero no eficiente
// const resultado = coordenadas()
// const x = resultado[0]
// const y = resultado[1]

// console.log(coordenadas());
// console.log(x, y);

// Tambien podria omitir algunos elementos intermedios (tomo 1er y 3er elemento del array)
// const [x, , z] = coordenadas();
// console.log(coordenadas());
// console.log(x, z);

//Seria similar a:
// const resultado = coordenadas()
// const x = resultado[0]
// const z = resultado[2]

// console.log(coordenadas());
// console.log(x, z);

// Otro ejemplo de algunos elementos omitidos (tomo 2er y 4er elemento del array)
// const [, y, , w] = coordenadas();
// console.log(coordenadas());
// console.log(y, w);

// Seria similar a:
// const resultado = coordenadas()
// const y = resultado[1]
// const w = resultado[3]
// console.log(coordenadas());
// console.log(y, w);


// La destructuración extre los elementos del array, pero genera variables por valor, no por referencia.
const auto = ["uno", "fiat"];

// Usando Destructuración
let [modelo, marca] = auto;

// Si modifico una de las constantes, los elementos del array original no son afectados.
modelo = "qubo";

console.log(auto);
console.log(modelo, marca);
