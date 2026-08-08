//1. La clásica: Crea una función tradicional llamada saludar que reciba un
// parámetro nombre. Dentro de las llaves { }, haz que imprima
// console.log("¡Bienvenido, " + nombre + "!");.

function saludar(nombre) {
    console.log(`Bienvenido, ${nombre}`);  
}


// 2. Llama a la acción: Ejecuta esa función pasándole tu propio nombre como
// argumento. Comprueba tu consola F12 en Chrome.
saludar("Gustavo Ariel Artola");

// 3. Conversión a Arrow: Crea una Arrow Function => en una sola línea (Return
// implícito) llamada esMitad. Debe recibir un numero y devolver el resultado de
// dividirlo por 2.
let esMitad = numero => numero/2;
console.log(esMitad(24));

// 4. Cachando Retornos: Guarda el resultado de esMitad(100) dentro de una
// nueva variable llamada resultadoFinal, y luego imprímela en consola para
// asegurar qua entree el return te haygado la "taza de café" correcta.

let resultadoFinal= esMitad(100);
console.log(resultadoFinal);


// 5. Prueba de Scope: Crea una variable dentro de esMitad e intenta imprimirla
// con console.log en la línea 1 de tu archivo. Observa cómo JavaScript
// destruye tu ejecución con un error de ReferenceError

// console.log(variableFuncion);  // genera un error dado que esta declarada en forma local dentro de una funcion.

function esMitad2(numero) {
    let variableFuncion = "Hola Soy una varialble local dentro de la funciÓn"
    console.log(variableFuncion);
    return numero/=2    
}
esMitad2(100);

//6. El Detective de Strings: Crea una función que reciba una URL en texto
// (por ejemplo, "https://miweb.com/admin/panel"). Usa el método
// .includes() para verificar si contiene la palabra "admin" e imprime en
// consola si el usuario tiene permisos o no.

let textoIngresado ="https://miweb.com/admin/panel"
validarString(textoIngresado);

function validarString(textoValidar) {
    
    textoValidar.includes("admin") ? console.log(`Usuario con Permiso`): console.log(`Usuario sin Permiso`)
    
}


// 7. El Extractor de Numbers: Crea una variable con el texto "45.99px".
// Utiliza parseFloat() para extraer el número limpio, multiplícalo por 2 para
// simular un aumento y muestra el resultado final en la consola.

let medida = "45.99px";
let numeroLimpio = parseFloat(medida)
let resultadoAumento = numeroLimpio * 2;

console.log(resultadoAumento); // Muestra: 91.98