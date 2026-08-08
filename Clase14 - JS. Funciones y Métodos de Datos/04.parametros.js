// 4.1. PARAMETROS POR DEFECTO: El plan B
function prepararCafe(tipoCafe = "Expreso") {
    //Puedo definir un parametro sin necesidad de que sea obligatorio pasar un argumento(valor).
    //Puedo definir un valor por defencto
    console.log(`Preparando un buen cafe ${tipoCafe}`);
}

// Escenario 1: Solicito un cafe especifico
let pedidoCafe = "Capuchino"
prepararCafe (pedidoCafe)

// Escenario 2: Solicito un cafe, me da igual el tipo de cafe
prepararCafe ()


// 4.2. OPERADOR REST(...): La bolsa de sobras
function sumarTicket(...precios) {
// 'precios' ya no es un número suelto, ¡ahora es una Lista/Array matemático!
    console.log(`Ejemplo de uso de un Operador REST en una funcion:  Imprimo todos los valores que recibo: ${precios}.`);
}
sumarTicket(10, 50, 99, 120); // Consola imprimirá: [10, 50, 99, 120]