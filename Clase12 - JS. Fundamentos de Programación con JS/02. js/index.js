//1. Ejecuciòn en terminal

const { useActionState } = require("react")

//  console log permite visualizar en terminal resultado de ejecuciòn
console.log("Hola Mundo!")
console.log(2+2)

// 1. VARIABLES - CICLO DE VIDA

// 1.1 Inicializaciòn de Variables 
let nombreAlumno
console.log(nombreAlumno)   //undefined  (sin valor y tipo de datos)

// 1.2 Seteo de Valor a una variable
nombreAlumno="Gustavo Ariel Artola"
console.log(nombreAlumno)   //Gustavo Ariel Artola (tipo de datos string)

nombreAlumno=516
console.log(nombreAlumno)  //516 (tipo de datos number) -->  Tipado dinamico, debilmente tipado.  El tipo de dato de una variable puede cambiar

// 1.3.  Inicializzación (declaraciòn ) de variable y seteo (asignamos) un valor --> atajo
let edadAlumno=48          //48 (tipo de datos munber)
console.log(edadAlumno)

// 1.4. Operaciones con Variales
console.log(edadAlumno*20)   //Multiplico valor de edadAlumno(48) * 20 = 960

edadAlumno=edadAlumno+1     //asigna a edadAlumno = 48 + 1 = 49
console.log(edadAlumno)

nombreAlumno="Juan"
console.log(nombreAlumno*20)  //error al multiplicar un string por un numero --> NaN (Error NOT a NUMBER)

