// 2. TIPOS DE VARIABLES

// 2.1. Variable con VAR (no se usa) - No es bueno redeclarar una variable
var colorTaza ="Gris"

// Se puede Re-Asignar (cambiar el valor de una variable)
colorTaza = "rojo"  

// Se puede Re-declarar la misma variable)
var colorTaza = "Azul"

console.log(colorTaza)

// 2.2 --> Variable con LET. Es usaa para cambiar valor de una variable
let puntaje =0

//Se puede Re-Asignar
puntaje=puntaje=10
puntaje=puntaje=25
console.log(puntaje)

// No se puede RE-declarar
// let puntaje=40
// console.log(puntaje) -->  SyntaxError: Identifier 'puntaje' has already been declared

// 2.3 --> CONSTANTES
const miNombre = "Gustavo Ariel Artola"
console.log(miNombre)

//No se puede Re-Asignar
// miNombre = "Diego Sanzhez" --> TypeError: Assignment to constant variable.

//No se puede Re-Declarar
// const miNombre ="Diego Sanxhez" --> SyntaxError: Identifier 'miNombre' has already been declared

//Excepcion a la regla --> Constante en array
const nombres=["Gustavo", "Pedro", "Marta"]
console.log(nombres)

//Incorporo un dato al arraay (no lo estoy reasignano)
nombres.push("Javier")
console.log(nombres)

// Saber de que tipo es una variable - tipeof
console.log(typeof puntaje)  //Retorna number

//2.5 Contcatenación
const nombre = "Ana";
const edad = 30;
// ❌ Forma vieja (Incómoda):
console.log("Hola, me llamo " + nombre + " y tengo " + edad + "años.");

// ✅ Forma moderna (Template Literals):
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);

// 2.6 Operadores Basicos
let suma = 5 + 5; // El resultado guardado es 10
let resta = 20 - 5; // El resultado guardado es 15
let multiplicacion = 2 * 3; // Usa el asterisco. Resultado: 6
let division = 10 / 2; // Usa la barra. Resultado: 5
let resto = 10 % 3; // Se llama 'Módulo'. Devuelve lo que sobra de la división (1)

// 2.7 Operadores Basicos - Abreviados
suma += 5  // El resultado guardado es 10 + 5 = 15
resta -=5  // El resultado guardado es 15 - 5 = 10
multiplicacion *=2 // El resultado guardado es 6 * 2 = 12
division /=2 // El resultado guardado es 5 * 2 = 2.5 

console.log(division)