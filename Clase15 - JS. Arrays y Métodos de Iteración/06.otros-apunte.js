// 06. OTROS METODOS DEL APUNTE

const sintetizadores80s = [
  { id: 1, marca: 'Yamaha', modelo: 'DX7', año: 1983, precioEstimado: 850000, moneda: 'ARS' },
  { id: 2, marca: 'Roland', modelo: 'Juno-106', año: 1984, precioEstimado: 1200000, moneda: 'ARS' },
  { id: 3, marca: 'Korg', modelo: 'M1', año: 1988, precioEstimado: 750000, moneda: 'ARS' },
  { id: 4, marca: 'Roland', modelo: 'D-50', año: 1987, precioEstimado: 680000, moneda: 'ARS' },
  { id: 5, marca: 'Sequential Circuits', modelo: 'Prophet-VS', año: 1986, precioEstimado: 2500000, moneda: 'ARS' },
  { id: 6, marca: 'E-mu', modelo: 'Emulator II', año: 1984, precioEstimado: 3100000, moneda: 'ARS' },
  { id: 7, marca: 'Oberheim', modelo: 'OB-8', año: 1983, precioEstimado: 3800000, moneda: 'ARS' },
  { id: 8, marca: 'Casio', modelo: 'CZ-101', año: 1984, precioEstimado: 320000, moneda: 'ARS' },
  { id: 9, marca: 'Korg', modelo: 'Poly-800', año: 1983, precioEstimado: 410000, moneda: 'ARS' },
  { id: 10, marca: 'Roland', modelo: 'Jupiter-8', año: 1981, precioEstimado: 11000000, moneda: 'ARS' }
];

// 6.1. FIND
// Busca un elemento  (El primero que encuentra)
// Siempe se utiliza para conjunto reducido de datos
console.log(sintetizadores80s.find(sintetizador => sintetizador.id ===2));

// 6.2. FOREACH
// Efecuta por cada elemento
sintetizadores80s.forEach(sintetizador => console.log(`Marca: ${sintetizador.marca}, Modelo: ${sintetizador.modelo} `));


// 6.3. SOME
// Almenos uno comple ??
console.log("Algun sintetizador es Korg? ", sintetizadores80s.some(sintetizador => sintetizador.marca==="Korg"));


// 6.4. EVERY
// Todos complen ??
console.log("Todos los sintetizadores son Korg? ", sintetizadores80s.every(sintetizador => sintetizador.marca==="Korg"));


// 6.5 REDUCE
// El método .reduce() sirve para tomar todos los elementos de un array y "reducirlos" a un solo valor (un número, un objeto, otro array, etc.).
// Un caso de uso práctico y muy común en desarrollo web es calcular el total de un carrito de compras, aplicando filtros o manipulando objetos dentro del array.

// Ejemplo: Total de un Carrito de Compras
// Imagina que tienes una lista de productos en un carrito y quieres calcular el monto total a pagar:

const carrito = [
  { producto: 'Laptop', precio: 1000, cantidad: 1 },
  { producto: 'Mouse', precio: 25, cantidad: 2 },
  { producto: 'Teclado', precio: 50, cantidad: 1 }
];
console.log("Mi inventario es: ", carrito)

const totalPagar = carrito.reduce((acumulador, itemActual) => {
  return acumulador + (itemActual.precio * itemActual.cantidad);
}, 0);

console.log(`El monto total del inventario es: ${totalPagar}`); // Resultado: 1100