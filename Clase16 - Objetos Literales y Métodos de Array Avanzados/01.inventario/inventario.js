// ==========================================================
// SISTEMA DE INVENTARIO — funciones a completar
// Correr con:  node index.js
// ==========================================================

const { productos } = require("./datos");

// ----------------------------------------------------------
// 1. listarProductos(lista)
//    Recorre el array e imprime cada producto con forEach.
//    Formato: "parlante -> $120000 (stock: 4)"
//    No retorna nada.
// ----------------------------------------------------------
//  { nombre: "parlante", precio: 120000, stock: 4 },

function listarProductos(lista) {
    // TU CÓDIGO ACÁ
    lista.forEach(producto => {
        console.log(`${producto.nombre} -> ${producto.precio} (stock: ${producto.stock})`);
    });
}


// ----------------------------------------------------------
// 2. agregarProducto(lista, nuevoProducto)
//    Agrega nuevoProducto al final del array con push.
//    Retorna la lista modificada.
// ----------------------------------------------------------
function agregarProducto(lista, nuevoProducto) {

    if (!Array.isArray(lista)) {
    // valido que el parametro a manejar sea del tipo que espero
        console.error("ERROR!: El parametro Lista debe ser array");
        return null
    }

    lista.push(nuevoProducto)
    return lista
}


// ----------------------------------------------------------
// 3. reemplazarProducto(lista, nombre, nuevoProducto)
//    Encuentra el índice del producto con ese nombre (findIndex)
//    y lo reemplaza usando splice.
//    Retorna la lista modificada.

// Producto a Reemplazar -> { nombre: "laptop", precio: 800000, stock: 0 },
// Nuevo Producto --> { nombre: "laptop pro", precio: 950000, stock: 2 }
// ----------------------------------------------------------
function reemplazarProducto(lista, nombre, nuevoProducto) {
    // TU CÓDIGO ACÁ

    if (!Array.isArray(lista)) {
    // valido que el parametro a manejar sea del tipo que espero
        console.error("ERROR!: El parametro Lista debe ser array");
        return null
    }

    // findIndex retorna el n° del indice o -1 si no lo encuentra
    const indice =  lista.findIndex(producto => producto.nombre===nombre)

    if (indice!==-1) {
    //   valido si lo encontro 
        lista.splice(indice, 1, nuevoProducto)
        return lista

    } else {
        console.error(`INFO: El producto ${nuevoProducto} no existe`);
        return mull
    }
   
}


// ----------------------------------------------------------
// 4. obtenerDisponibles(lista)
//    Retorna un array NUEVO con los productos que tienen stock > 0.
//    Usar filter.
// ----------------------------------------------------------
// { nombre: "parlante", precio: 120000, stock: 4 }
function obtenerDisponibles(lista) {

    if (!Array.isArray(lista)) {
    // valido que el parametro a manejar sea del tipo que espero
        console.error("ERROR!: El parametro Lista debe ser array");
        return null
    }   

    // LFiltro listado de productos con stock disponibles
    const disponibles = lista.filter(producto => producto.stock>0)
    return disponibles

}


// ----------------------------------------------------------
// 5. aplicarDescuento(lista, porcentaje)
//    Retorna un array NUEVO con cada producto con el precio
//    reducido según el porcentaje recibido (0 a 100).
//    El array original NO debe cambiar.
//    Usar map.
//    Ejemplo: aplicarDescuento(lista, 10) → precios con 10% menos
// ----------------------------------------------------------
// Aplica el descuento restando el % de descuento
function aplicarDescuento3(lista, porcentaje) {

   const listaDescuento = lista.map(producto => {
        const montoDescuento = producto.precio*porcentaje/100
        const precioFinal = producto.precio - montoDescuento

        return {
        // Vamos a reemplazar el precio original por el precio con el descuento
        // spread operator, abre el dato y permite modificar alguna o varios valores de las claves
        ...producto,
        precio: precioFinal
        }

    })
   return listaDescuento
}


// Aplica el descuento retornando el % restante (si es 15% el descuento, entonces retorna 85%)
// Fomra mas resumida
function aplicarDescuento(lista, porcentaje) {
    const factor = 1 - porcentaje/100
    return lista.map(producto => ({...producto, precio: producto.precio*factor}))
}


// ----------------------------------------------------------
// 6. buscarPorNombre(lista, nombre)
//    Retorna el objeto completo del producto con ese nombre.
//    Si no existe, retorna undefined.
//    Usar find.
// ----------------------------------------------------------
function buscarPorNombre(lista, nombre) {
  const productoBuscado =lista.find(producto => producto.nombre===nombre)
  return productoBuscado
}

// ----------------------------------------------------------
// 7. todosConStock(lista)
//    Retorna true si TODOS los productos tienen stock > 0.
//    Usar every.
// ----------------------------------------------------------
function todosConStock(lista) {
    return lista.every(producto => producto.stock>0)
}

// ----------------------------------------------------------
// 8. algunoConStock(lista)
//    Retorna true si AL MENOS UN producto tiene stock > 0.
//    Usar some.
// ----------------------------------------------------------
function algunoConStock(lista) {
    return lista.some(producto => producto.stock>0)
}


// ----------------------------------------------------------
// 9. calcularValorTotal(lista)
//    Calcula y retorna el valor total del inventario.
//    Valor de cada producto = precio * stock.
//    Usar reduce.
// ----------------------------------------------------------
function calcularValorTotal(lista) {
    return lista.reduce((total, producto)=>total+ producto.precio*producto.stock,0)
}


// ----------------------------------------------------------
// 10. ordenarPorPrecio(lista)
//     Retorna un array NUEVO con los productos ordenados
//     de más barato a más caro.
//     El array original NO debe cambiar.
//     Usar sort con una copia: [...lista]
// IMPORTANTE: Consideración Importante (Mutabilidad)
// El método sort() modifica (muta) el array original. Si necesitas preservar el array original sin alterarlo, crea una copia antes usando el operador spread [...array] o utiliza el método moderno toSorted():
// JavaScript
//   Opción 1: Crear una copia previa
//      const copiaOrdenada = [...original].sort((a, b) => a - b);
//   Opción 2: Usar toSorted() (retorna un array nuevo sin mutar el original)
//      const copiaOrdenada = original.toSorted((a, b) => a - b);
// ----------------------------------------------------------
function ordenarPorPrecio(lista) {
    // TU CÓDIGO ACÁ
    const copiaOrdenada = [...lista].sort((a, b) => a.precio - b.precio);
    return copiaOrdenada
}




// ----------------------------------------------------------
// 11. obtenerNombresConStock(lista)   ← DESAFÍO
//     Retorna un STRING con los nombres de los productos
//     que tienen stock, separados por coma.
//     Ejemplo: "parlante, mouse, teclado"
//     Usar filter + map + join en una sola línea.
// ----------------------------------------------------------

function obtenerNombresConStock(lista) {
    // TU CÓDIGO ACÁ
    return lista.filter(producto=>producto.stock>0).map(producto=>producto.nombre)
}

// module.exports -> permite acceder a estos elementos desde otros archivos
module.exports = {
    listarProductos,
    agregarProducto,
    reemplazarProducto,
    obtenerDisponibles,
    aplicarDescuento,
    buscarPorNombre,
    todosConStock,
    algunoConStock,
    calcularValorTotal,
    ordenarPorPrecio,
    obtenerNombresConStock,
}
