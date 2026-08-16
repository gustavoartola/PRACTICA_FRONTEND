// Cuando trabajamos con arrays, muchas veces queremos buscar elementos,
// cortar partes de la lista o unir la información sin necesidad de escribir funciones
// o bucles complejos.
// En la programación moderna se priorizan los métodos no mutables (que no
// modifican el array original, sino que te devuelven una respuesta nueva). Estos
// son los métodos esenciales que no requieren callbacks (funciones pasadas por
// parámetro) para funcionar.


// 3.1. .includes(elemento)
// Te dice con un simple true o false si un elemento exacto se encuentra dentro
// del array.

const invitados = ["Juan", "María", "Lucas"];
// Comprobación rápida:
console.log(invitados.includes("María")); // true
console.log(invitados.includes("Pedro")); // false


// 3.2 .indexOf(elemento)
// Busca un elemento de izquierda a derecha y te devuelve su índice (posición).
// Si el elemento no existe en la lista, te devolverá -1.

const podio = ["Sofía", "Leonel", "Mateo"];
// Buscar la posición:
console.log(podio.indexOf("Leonel")); // 1
console.log(podio.indexOf("Carlos")); // -1 (no está en el podio)


// 3.3 .join(separador)
// Toma todos los elementos del array y los une en una sola cadena de texto
// (String), separándolos por el texto o símbolo que tú elijas entre los paréntesis.

const ingredientes = ["Pan", "Queso", "Tomate"];
// Unir en un texto:
console.log(ingredientes.join(" + ")); // "Pan + Queso + Tomate"
console.log(ingredientes.join(", ")); // "Pan, Queso, Tomate"


//3.4 .slice(inicio, fin)
// Extrae una porción del array original y te devuelve un array nuevo, sin tocar ni
// alterar el original. El índice de fin no se incluye en el resultado.

const frutas = ["Frutilla", "Banana", "Manzana", "Naranja", "Kiwi"];

// Extraer elementos de la posición 1 a la 3 (sin incluir la 3):
const seleccionadas = frutas.slice(1, 3);

console.log("Listado de Frutas: ",frutas); // ["Frutilla", "Banana", "Manzana","Naranja", "Kiwi"] (¡Intacto!)
console.log("Listado de Fruas seleccionadas: ",seleccionadas); // ["Banana", "Manzana"]


// 3.4 .concat(otroArray)
// Une dos o más arrays en uno solo completamente nuevo. A diferencia del
// operador de propagación o spread (...), este es un método clásico directo.

const alumnosMañana = ["Ana", "Pedro"];
const alumnosTarde = ["Luis", "Clara"];
// Fusionar arrays:
const todosLosAlumnos = alumnosMañana.concat(alumnosTarde);
console.log(todosLosAlumnos); // ["Ana", "Pedro", "Luis", "Clara"]