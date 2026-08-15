// 04. Metodos de Iteracion

// 4.1. MAP
// Es un metodo NO MUTABLE - No modifica el array sobre el que estamos trabajando
// Aplica una misma funciona a cada uno de los indices (elementos del array)
// Retorna un nuevo array con los nuevos resultados
const numeros = [1, 2, 3, 4, 55, 66, 67, 88, 98, 100];
console.log(`Array Original ${numeros}`);

let duplicadosMap = numeros.map(numero => numero * 2)  // Multiplico utilizando funcion flcha - forma mas simplificada
console.log(`Multiplicamos * 2 con MAP: ${duplicadosMap}`);
console.log(`Comprobamos que MAP no es un metodo mutable, porque no modifica la variable original.  El valor del array original sigue siendo: ${numeros}`);


// Mismo ejemplo realizado con PUSH con FOR
// Observar que se requiere mas lineas de codigo que MAP

// ❌ Forma antigua de for (Propensa a errores de índice y con mas codigo):
let duplicadosPush = []
for (let index = 0; index < numeros.length; index++) {
    duplicadosPush.push(numeros[index]*2)    
}
console.log(`Multiplicamos * 2 con PUSH: ${duplicadosPush}`);


// Volviendo al Ejemplo del MAP.  Realizo mismo ejemplo utilizando una Funcion - Seria la opciuon mas recomensable dado que modularizamos en un a funcion toda la logica que queremos realizar en cada iteracion dentro del MAP.

function duplicar(n) {
    return n*=2
}

let duplicadosMap2 = numeros.map(numero => duplicar(numero))
console.log(`Duplico array con map utilizando una funcion + MAP: ${duplicadosMap2}`);
console.log(`Observo que el array original no se modifica ${numeros}`);

// 4.2. FOREACH
// No tiene retorno como tal , y tampoco te arma un array nuevo como MAP
// No lo sugiere utilizar
let resultado = numeros.forEach(numero => duplicar(numero))
console.log(`Duplicando items de un array con foreach: ${resultado}`);

// 4.3 FILTER
// Sumilar a un filto de busqueda
// En metodo Filter, si la cnondicion (predicado) se cumple, se guarda el valor a un array.
console.log(`Array original: ${numeros}`);

let pares=numeros.filter(numero => numero%2===0)
console.log(`Filtro de mi array los numeros pares: ${pares}`);

// NOTA: Modulo "%" retorna resto de una division.  Si el resultado es 0 es par, sino impar.


// 4.3.1. EJEMPLO1: Listado "array" de 10 PRODUCTOS 
const productos = [
  { id: 1, nombre: 'Laptop Lenovo IdeaPad', precio: 650000 },
  { id: 2, nombre: 'Smartphone Samsung Galaxy', precio: 420000 },
  { id: 3, nombre: 'Auriculares Inalámbricos Sony', precio: 85000 },
  { id: 4, nombre: 'Monitor 24" LG Full HD', precio: 190000 },
  { id: 5, nombre: 'Teclado Mecánico Redragon', precio: 55000 },
  { id: 6, nombre: 'Mouse Óptico Logitech', precio: 28000 },
  { id: 7, nombre: 'Silla Gamer Ergonómica', precio: 210000 },
  { id: 8, nombre: 'Disco Sólido SSD 1TB Kingston', precio: 78000 },
  { id: 9, nombre: 'Webcam Logitech HD 1080p', precio: 62000 },
  { id: 10, nombre: 'Placa de Video NVIDIA RTX 3060', precio: 450000 }
];

// Quiero ver los productos mayores a $100.000

let productosMayores = productos.filter(producto => producto.precio>100000)
console.log("Filtro los productos con precio mayor a $100.000 con filter: ", productosMayores)

// Quiero discriminar - ver los productos iguales o menores a $100.000 (complemento)

let productosMenores = productos.filter(producto => producto.precio<=100000)
console.log("Filtro los productos con precio menores o igual a  $100.000 con filter: ", productosMenores)


// 4.3.2. EJEMPLO2: Listado "array" de SOCIOS
const socios = [
  { id: 1, nombre: 'Lucas', apellido: 'Martínez', cuotaAlDia: true },
  { id: 2, nombre: 'Camila', apellido: 'Gómez', cuotaAlDia: true },
  { id: 3, nombre: 'Mateo', apellido: 'Fernández', cuotaAlDia: false },
  { id: 4, nombre: 'Sofía', apellido: 'Álvarez', cuotaAlDia: true },
  { id: 5, nombre: 'Joaquín', apellido: 'Díaz', cuotaAlDia: false },
  { id: 6, nombre: 'Valentina', apellido: 'Romero', cuotaAlDia: true },
  { id: 7, nombre: 'Benjamín', apellido: 'Sosa', cuotaAlDia: false },
  { id: 8, nombre: 'Martina', apellido: 'Torres', cuotaAlDia: true }
];

// Ejemplo: Filtrar solo los socios que tienen la cuota al día
const sociosAlDia = socios.filter(socio => socio.cuotaAlDia);
console.log("Filtrar solo los socios que tienen la cuota al día ", sociosAlDia);

// Ejemplo: Filtrar solo los socios morosos
const sociosMorosos = socios.filter(socio => !socio.cuotaAlDia);
console.log("Filtrar solo los socios morosos ", sociosMorosos);
