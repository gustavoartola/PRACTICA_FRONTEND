// Callback: Es una función que tú le pasas a otra función como si fuera un
// ingrediente, con la promesa de que la "llame después".

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

// Array [] -> lista de datos
const usuarios = [
// Objeto {clave: valor} -> un dato unico // 
  { nombre: "Sofía", edad: 22 },
  { nombre: "Mateo", edad: 16 },
  { nombre: "Valentina", edad: 25 },
  { nombre: "Santiago", edad: 17 },
  { nombre: "Camila", edad: 30 },
  { nombre: "Lucas", edad: 15 },
  { nombre: "Isabella", edad: 19 },
  { nombre: "Benjamín", edad: 14 },
  { nombre: "Mariana", edad: 28 },
  { nombre: "Joaquín", edad: 18 },
  { nombre: "Martina", edad: 21 },
  { nombre: "Thiago", edad: 13 },
  { nombre: "Lucía", edad: 24 },
  { nombre: "Ezequiel", edad: 16 },
  { nombre: "Elena", edad: 31 },
  { nombre: "Bautista", edad: 17 },
  { nombre: "Victoria", edad: 20 },
  { nombre: "Felipe", edad: 12 },
  { nombre: "Daniela", edad: 26 },
  { nombre: "Tomás", edad: 19 },
  { nombre: "Emma", edad: 15 },
  { nombre: "Agustín", edad: 23 },
  { nombre: "Paula", edad: 18 },
  { nombre: "Gabriel", edad: 27 },
  { nombre: "Renata", edad: 14 },
  { nombre: "Dante", edad: 29 },
  { nombre: "Catalina", edad: 16 },
  { nombre: "Lautaro", edad: 21 },
  { nombre: "Juliet", edad: 33 },
  { nombre: "Nicolás", edad: 17 }
];

// MAP es un metodo de arrays
// toma cada elemento de un array y ke aplica una funciòn - useCallback.
let sonMayores = usuarios.map(usuarios=>esMayor(usuarios.edad, usuarios.nombre))
console.log(sonMayores)