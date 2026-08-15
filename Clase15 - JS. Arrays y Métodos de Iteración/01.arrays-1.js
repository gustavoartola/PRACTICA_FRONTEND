// Array - Conceptos basico
// Declaracion y asignacion de un array
let aula=[
    {
        nombre:"Gustavo Ariel",
        apellido: "Artola"
    },
    {
        nombre:"Juan Jose",
        apellido: "Quiroga"
    },
    {
        nombre:"Lionel",
        apellido: "Gerbaudo"
    },
    {
        nombre:"Mariano",
        apellido: "Zerda"
    }
]

// Mostrar el contenido del array
console.log(aula)

// Cuantos elementos tengo en el array
console.log(aula.length)

// El indice del array permite acceder a cada elemento del array.  En JS sera Index=0 a aula.length
console.log(aula[0])
console.log(aula[1])
console.log(aula[2])
console.log(aula[3])

// Si quiero acceder a un determinado atributo. --> utilizo dot notation.
console.log(aula[0].nombre)
console.log(aula[0].apellido)

// Como accedo al ultimo elemento del Array
console.log("Acceso al ultimo elemento: " , aula[aula.length-1])

// iterando Array con bucle FOR
for (let index = 0; index < aula.length; index++) {
    console.log(aula[index], index);
}


