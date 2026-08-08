//1. FUINCIONES

const edadUsuario =15
const nombreUsuario = "Lucas"

// 1.1 DECLARAR UNA FUNCION

function esMayor (edad, nombre){  
// Esta funcion te valida si un usuario es o no mayor de edad
// Tiene dos PARAMETROS, edad y nombre
    if (edad>=18){
        console.log(`${nombre}: Acceso concedido`)         
        return true  
    } else {
        console.log(`${nombre}: Acceso denegado`)
        return false           
    }
}

// 1.2 EJECUTAR (LLAMAR) UNA FUNCION
// Al invocar la funcion, se pasan como "ARGUMENTO" los valores
esMayor(22, "Ana")
esMayor(15, "Lucas")

let resultado = esMayor(edadUsuario, nombreUsuario)
console.log(resultado)

