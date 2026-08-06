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
    