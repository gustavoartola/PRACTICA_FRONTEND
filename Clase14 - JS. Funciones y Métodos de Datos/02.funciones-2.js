// 2.1 HOISTING
// Eleva las definiciones de las funciones al inicio del archivo.
// Puedo EJECUTAR las funciones y mas abajo dejar la DECLARACION de las funciones

// Primero EJECUTO 
saludarUsuario("Ana")

// Luego DECLARO funciones
function saludarUsuario(user) {
    console.log(`Hola, ${user}`)
}

//2.2. FUINCIONES flecha

// Misma utilidad que una funcion tradicional
// Difiere en la forma de escribir la funcion
// No tiene la palabra function
// Requiere incorporar un retrun explicito
// No tiene Hoisting (o sea si trato de ejecutarla antes de declarar, se produce un error)

const edadUsuario =15
const nombreUsuario = "Lucas"

let esMayor = (edad, nombre) => {
    if (edad>=18){
        console.log(`${nombre}: Acceso concedido`)         
        return  true
    } else {
        console.log(`${nombre}: Acceso denegado`) 
        return false
    }
}

console.log(esMayor(edadUsuario, nombreUsuario))

// 2.3. FUINCIONES flecha Version minimslidys
// Modo Minimalista de 1 sola línea (El "Return" es automático, no se usan // llaves {})

/* Es ideal para cálculos matemáticos rápidos */
const calcularDoble = numero => numero * 2


// 2.4. Repaso. Las tres formas de escribir una funcion

// 2.4.1. Funcion clasica
let usuario1 = "Gustavo"    
function saludaUssuario1(usuario1) {
   return `Hola, ${usuario1}!`
}
console.log(saludaUssuario1(usuario1))

// 2.4.2. Funcion Flecha con llaves
// Requiere tener un retorno explicito
let usuario2 = "Roman"    
const saludaUssuario2 = usuario2 => {
    return `Hola, ${usuario2}!`
}
console.log(saludaUssuario2(usuario2))

// 2.4.3. Funcion fecka sin llaves
// NO Requiere tener un retorno explicito
let usuario3 = "Marina"
const saludaUsuario3 = usuario3 => `Hola. ${usuario3}!`
console.log(saludaUsuario3(usuario3))