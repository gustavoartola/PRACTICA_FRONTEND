// 3.1. GLOBAL SCOPE
// Ámbito Global (La Calle Pública): Si declaras let iva = 0.21; suelta al
// inicio de tu archivo, todo el mundo (cualquier función) puede leerla y
// modificarla.

var globalVar = "Soy Global, tipo VAR"
let globalLet = "Soy Global, tipo LET"
const globalConst = "Soy Global, tipo CONST"

console.log("3.1. GLOBAL SCOPE")

console.log("3.1.1. Intento acceder a la variable en en ambito GLOBAL (dentro del Archivo).")
// Las variables GLOBALES son visibles desde ambito global (archivo, funciones y bloques
console.log (globalVar)
console.log (globalLet)
console.log (globalConst)

function probarGlobal() {
    console.log("3.1.2. Intento acceder a la variable dentro de la FUNCION")
    // Las variables GLOBALES son visibles desde ambito global (archivo, funciones y bloques
    console.log (globalVar)
    console.log (globalLet)
    console.log (globalConst) 
}
probarGlobal()

if(true){
    console.log("3.1.3. Intento acceder a la variable dentro un bloque como un IF")
    // Las variables GLOBALES son visibles desde ambito global (archivo, funciones y bloques
    console.log (globalVar)
    console.log (globalLet)
    console.log (globalConst)     
}



// 3.2. FUNCTION SCOPE (Local Scope - Dentro de una Funcion)
// Ámbito Local (El Cuarto Privado): Si declaras una variable dentro de las
// llaves { } de una función, esa variable nace y muere allí mismo. Ninguna
// otra función puede verla. Esto es vital por seguridad, para no "contaminar"
// el archivo general con variables temporales.


console.log("3.2. LOCAL FUNCTION SCOPE")

function probarLocalFunction() {
    console.log("3.2.1 Intento acceder a la variable dentro de la FUNCION")

    var localFuncionVar = "Soy Local Funcion, tipo VAR"
    let localFuncionLet = "Soy Local Funcion, tipo LET"
    const localFuncionConst = "Soy Local Funcion, tipo CONST"

    console.log (localFuncionVar)
    console.log (localFuncionLet)
    console.log (localFuncionConst)
    // Las variables LOCALES son visibles desde ambito de la funcion
}
probarLocalFunction()


console.log("3.2.2 Intento acceder a la variable en en ambito GLOBAL (dentro del Archivo).")
// Las variables LOCALES no son visibles desde ambito GLOBAL. Genera error
console.log (localFuncionVar)
console.log (localFuncionLet)
console.log (localFuncionConst)

if(true){
    console.log("3.2.3 Intento acceder a la variable dentro un bloque como un IF")
    // Las variables LOCALES no son visibles desde ambito de un bloque if, fuera de la funcion. Genera error
    console.log (localFuncionVar)
    console.log (localFuncionLet)
    console.log (localFuncionConst)
}



// 3.3. BLOCK SCOPE (Local Scope - Dentro de un bloque)

console.log("3.3. LOCAL BLOCK SCOPE")


if(true){

    var localBlockVar = "Soy Local Block, tipo VAR"
    let localBlockLet = "Soy Local Block, tipo LET"
    const localBlockConst = "Soy Local Block, tipo CONST"

    console.log("3.2.1 Intento acceder a la variable Block dentro un bloque como un IF")
    // Las variables LOCALES de BLOQUE son visibles desde ambito de un bloque if.
    console.log (localBlockVar)
    console.log (localBlockLet)
    console.log (localBlockConst)

}


function probarLocalbLock() {
    console.log("3.3.2 Intento acceder a la variable Block dentro de la FUNCION")
    // Las variables LOCALES de BLOQUE NO son visibles fuera del bloque donde son declaradas. Genera error
    console.log (localBlockVar)
    console.log (localBlockLet)
    console.log (localBlockConst)
}

probarLocalbLock()


console.log("3.2.3 Intento acceder a la variable en en ambito GLOBAL (dentro del Archivo).")
// Las variables LOCALES de BLOQUE NO son visibles fuera del bloque donde son declaradas. Genera error
console.log (localBlockVar)
console.log (localBlockLet)
console.log (localBlockConst)
