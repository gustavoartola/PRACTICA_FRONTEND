// 9. METODOS CON NUMBER

// 9.1. Extracción de enteros: parseInt() -> Lee de izq. a der. e ignora letras del final
console.log(parseInt("42px")); // 42
console.log(parseInt("3.14")); // 3

// 9.2. Extracción de decimales: parseFloat() -> Mantiene el punto decimal
console.log(parseFloat("12.50€")); // 12.5

// 9.3. Conversión pura: Number() -> Da NaN si el texto tiene letras
console.log(Number("100")); // 100
console.log(Number("100px")); // NaN

// 9.4. Formateo: .toFixed(decimales) -> Redondea y limita decimales. ⚠️¡RETORNA UN STRING!
const precioOriginal = 19.9876;
console.log(precioOriginal.toFixed(2)); // "19.99"

// 9.5. Validación estricta: Number.isNaN() -> ¿La operación falló catastróficamente?
console.log(Number.isNaN(0 / 0)); // true (0 dividido 0 no existe)
console.log(Number.isNaN("hola")); // false (es un texto común, no un error matemático)

//9.6. METODO MATH
// Redondeos críticos
console.log(Math.round(4.5)); // 5 (Al entero más cercano)
console.log(Math.floor(4.9)); // 4 (Fuerza el redondeo hacia abajo)
console.log(Math.ceil(4.1)); // 5 (Fuerza el redondeo hacia arriba)
console.log(Math.trunc(4.9)); // 4 (Simplemente borra/mutila los decimales)

// Generar un número entero aleatorio entre 1 y 10
let min = 1;
let max = 10;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Tu número de la suerte es: ${numeroAleatorio}`);