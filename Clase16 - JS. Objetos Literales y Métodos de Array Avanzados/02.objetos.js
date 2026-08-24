// 1. ¿Qué es un Objeto Literal? El Carnet de Identidad

/* Usamos llaves { } para indicarle a JS que estamos creando un Objeto
Literal */
const soyLucas = {

// Propiedades: Clave : Valor

nombre: "Lucas", // Propiedad (String)
edad: 28, // Propiedad (Number)
esPremium: true, // Propiedad (Boolean)

// Método: Una acción que el objeto puede realizar
saludar() {
console.log(`Hola, mi nombre es ${this.nombre}`);
}

};

console.log(soyLucas.saludar());


// 2. Acceso y Modificación: ¿Cómo leo el DNI?

// Como geneo un objeto?
const usuario = { id: 1, nombre: "Ana", rol: "admin" };
console.log(usuario);

// Como obtengo las key de un objeto
const claves = Object.keys(usuario); // ["id", "nombre", "rol"]
console.log("Claves del Objeto", claves);

// Como obtengo los valores de un objeto?
const valores = Object.values(usuario); // [1, "Ana", "admin"]
console.log("Valores del Objeto", valores);

// Como obtengo listado de clave / valor del objeto?
const ClaveValores = Object.entries(usuario); // 
console.log("Clave / Valor del Objeto", ClaveValores);



// Accediendo a un objeto - Forma 1 - dot notation
console.log(usuario.id);
console.log(usuario.nombre);
console.log(usuario.rol);

// Accediendo a un objeto - Forma 2 - corchetes
console.log(usuario[claves[0]]);  //claves[0] es el "id"
console.log(usuario[claves[1]]);  //claves[0] es el "nombre"
console.log(usuario[claves[2]]);  //claves[0] es el "rol"


// 3. Destructuring (Desestructuración de Objetos)
// * "Ve al objeto 'perfilUsuario', sácale una copia a 'nombre' y 'edad', y
// crea dos variables flotantes con esos mismos nombres" */
const { nombre, edad } = soyLucas;
console.log(nombre); // Imprime "Lucas" directamente, sin usar el punto.
console.log(edad); // Imprime "28" directamente, sin usar el punto.



// 4. Referencia vs Valor: El Terror de las  Entrevistas Técnicas
// ● Valores Primitivos (Textos, Números): Funcionan como una FOTO
// FÍSICA. Si tú tienes la foto de un auto, vas a la fotocopiadora y me das una
// copia (let copia = original), yo puedo pintar mi copia con marcador rojo, y
// tu foto original seguirá intacta.

let original =20
let copia = original

copia = 30

console.log(`Valor Original es ${original}`);
console.log(`Valor Copia es ${copia}`);


// ● Objetos y Arrays (Datos Complejos): Funcionan como una CARPETA
// COMPARTIDA DE GOOGLE DRIVE. Cuando haces const clon =
// autoOriginal;, NO estás copiando el auto. Estás entregando un enlace de
// acceso directo al mismo garaje. ¡Si tú le borras una puerta al clon, el
// autoOriginal también perderá la puerta instantáneamente!


const autoOriginal = {id: 1, nombre:"Audi", color: "rojo"}
const clon = autoOriginal
clon.color="azul"

// Ambas variables se modifican porque la copia es de la referencia (puntero)
console.log({autoOriginal});
console.log({clon});


/* Usamos los "tres puntos mágicos" (Spread Operator).
Esto crea un objeto 100% nuevo y le inyecta las propiedades del viejo.
¡Ahora son independientes! */
let autoOriginal2 = {id: 1, nombre:"Audi", color: "rojo"}
const clonReal = { ...autoOriginal2 };

clonReal.color="azul"

// Ahora cada una tiene sus propios valores
console.log({autoOriginal2});
console.log({clonReal});







