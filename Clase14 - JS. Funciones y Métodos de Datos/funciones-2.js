//1. FUINCIONES flecha

const edadUsuario =15
const nombreUsuario = "Lucas"

// 1.1 DECLARAR UNA FUNCION

let esMayor = (edad, nombre) => {
// Esta funcion te valida si un usuario es o no mayor de edad
    if (edad>=18){
        console.log(`${nombre}: Acceso concedido`)         
    } else {
        console.log(`${nombre}: Acceso denegado`) 
    }
}

console.log(esMayor(edadUsuario, nombreUsuario))
