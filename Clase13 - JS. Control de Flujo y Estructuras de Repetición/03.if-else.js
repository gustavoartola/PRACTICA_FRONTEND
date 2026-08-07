// 1. CONDICIONAL - IF-ELSE
// IF --> Se se cumple la condición, entonces,se ejecuta el bloque de sentencias.
// ELSE --> Dar una alternativa si todas las condiciones fallaron (FALLBACK)


// 1.1. Ejemplo 1
const hora =14 

if (hora <12){
    console.log("Buen Día")
} else if (hora <20) {
    console.log("Buenas Tardes")
} else {
    console.log("Buenas Noches")
}
 
// 1.2. Ejemplo 2
let frio=true
let temperatura=10

if (frio) {
    console.log("Me abrigo")
} else {
    console.log("No me abrigo")
}

if (temperatura<=10) {
    console.log("Me pongo campera")
} else if(temperatura<=20) {
    console.log("Me pongo swueter")
} else {
    console.log("No me abrigo")
}

// 2. IF TERNARIO - Condicional de bolsillo (IF reducido)
// ? --> if | : --> else
frio ? console.log("Me abrigo") : console.log("No me abrigo")

// ? --> if | : --> else if  | : --> else
temperatura<=10 ? console.log("Me pongo campera") : 
temperatura<=20 ? console.log("Me pongo sweter"): console.log("No me abrigo")

// Ejemplo con negaciòn
!frio ? console.log("Me abrigo") : console.log("no me abrigo")

// 3. EMULACION TERNARIA
// 3.1 ● Valores Falsy (El núcleo del mal): Existen 6 valores concretos en JS que,
// al ser forzados, se evalúan matemáticamente como false. Memorízalos: 
// 0
// "" (texto totalmente vacío)
// null
// undefined
// NaN
// y por supuesto, false.

// 3.2 ● Valores Truthy (El resto del universo): Absolutamente cualquier otro valor
// se evalúa como true. 
// Cadenas de texto ("Hola").  ¡Cuidado! Incluso un espacio en blanco " "
// numero distino a cero (-5,  100, etc)
// objeto vacío {}
// Array vacio
