// 1. COERSION IMPLICIA
//(El comportamiento automático y peligroso): Ocurre
// cuando JS, en un intento desesperado por ayudarte a que el código no
// explote, cambia los tipos de datos por debajo de la mesa sin avisarte.
// ● Si haces 5 + "5", JS convierte el primer 5 a texto y el resultado es "55".
// ● Pero si haces 5 - "5", JS convierte el texto a número y el resultado es
// 0. ¡Una locura matemática!

console.log(5 + "5") // Resultado = 55 --> Concatena, el "+"" se utiliza para armar string
console.log(5 - "5") // Resultado = 0, el "-" solo se utilziza como operador Mateático. 

// 2. COERSION EXPLICITA
// (Lo correcto y profesional): Ocurre cuando TÚ 
// // como programador le das la orden estricta a JS de transformar el
// dato, tomando el control absoluto.
// ● Number("5") + 5 = Devuelve matemáticamente 10.
// ● String(5) + "5" = Devuelve el texto concatenado "55".

console.log(Number("5")+ 5) // Resultado 10
console.log(String(5) + 5)  // resultado 55
    
// 2. Formas de controlar 
// 2.1 Si quiero realizar SUMA
console.log("Sumo 5 + 5: ", 5 + Number("5"))
// Si quiero realizar CONCTENACIÒN
console.log("Concateno + 5 y 5 con uso del '+': ",5 + "5")
console.log("Concateno + 5 y 5 con uso de la ',': ",5,"5")
console.log("Suma Concatenacion con coersion explicita: ", String(5) + "5")  // MAS USADA

let digito = "5" 
console.log(`Concateno con Bastick: ${digito}${digito}`)


// 3. COMPARATIVA DEBIL
// == (Dos iguales) Igualdad Débil. Compara Valor pero no el tipo de dato (NO USAR)
console.log(5=="5")  

// 4. COMPARATIVA FUERTE
// === (Tres iguales) Igualdad Estricta. Compara Valor y Tipo de datos (USAR SIEMPRE)
console.log(5==="5")