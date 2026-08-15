// 3. Metodos de arrays

// 3.1 Metodos Mutadores
// Cambian el array sobre el que trabajan

// 3.1.1. Push --> empujar
let numeros = [2,3,4,5]
console.log(`Array Original: ${numeros}`)

numeros.push(6)
console.log(`El metodo push añade un valor al final del array original: ${numeros}`)

// 3.1.2. Splice  (Tiene varias utilidades)

// A. Eliminar item de un array
// .splice(start, deletedCount): 
// Parametros: Start: Indice a partir del cual elimina items de un Array
// Parametro DeletedCout: Cantidad de elementos a eliminar.Es opcional, si no lo defino, borra todos los elementos a partir de Start.
// Rertona los elementos eliminados

let eliminados = numeros.splice(2,1)
console.log(`Ejemplo de "splice" eliminando solo el elemento 2 del array ${numeros}`)
console.log(`Tambien, como lo asigne a una variable, me retorna el/loselementos eliminados: ${eliminados}`)

let eliminados2 = numeros.splice(2,2)
console.log(`Ejemplo de "splice" eliminando dos elementos a partir del elemento 2: ${numeros}`);
console.log(`Con este metodo elimine los siguientes elementos: ${eliminados2}`)


// B. Agregar elementos sin eliminar
// --> .splice(start, 0): 
// Parametro Start: Representa la posicion desde donde se quiere insertar elementos al array.
// Parametro DeletedCount:  Se debe indicar 0 para que el metodo agregue elementos.
// Parametro Items[]: Elementos para agregar al array (Puede ser de cualquier tipo, y heterogenoes)
// El metodo no tiene retorno
let tecnologias = ["React", "Node", "Express", "JS", "HTML", "CSS"]
console.log(`Array Original: ${tecnologias}`)

let agregados = tecnologias.splice(1,0, "TypeScript", "MySQL")
console.log(`Ejemplo de "splice" agregando elementos desde la posicion 1 del array ${tecnologias}`)
console.log(`En caso de agregar,  no tiene info retornada: ${agregados}`)

// C. Reemplazar elementos
// --> .splice(start, 1): 
// Parametro Start: Representa la posicion desde donde se quiere reemplzar elementos al array.
// Parametro DeletedCount:  Se debe indicar 1 para que el metodo reemplzar elementos.
// Parametro Items[]: Elementos a reemplzar (Puede ser de cualquier tipo, y heterogenoes)
// Rertona los elementos reemplazados
let estados = ["Pendiente", "En Proceso", "Cancelado"]
console.log(`Array Original: ${estados}`)

let reemplazados = estados.splice(2,1, "Completado")
console.log(`Ejemplo de "splice" reemplazando elemento en posicion 2, por un nuevo elemento ${estados}`);
console.log(`Con este metodo reemplazamos los siguientes elementos: ${reemplazados}`);

// 3.1.3. Pop  (elemeina ultimo valor y lo retorna)
// Realiza lo opuesto a Push.

let numeros2 = [1,2,3,4,5,6]
console.log(`Array original: {numeros2}`);

let eliminados3=numeros2.pop()
console.log(`Elimino el ultimo elemento del array: ${numeros2}`);
console.log(`El elemento eliminado es: ${eliminados3}`);


// 3.1.4. Unshift  (Similitud como Push )
// Inserta elementos al inicio de un array y retorna el nuevo largo del array.
console.log(`Array original: ${numeros2}`);

let resultadoUnShitf =numeros2.unshift(-1,0);
console.log(`Agregue dos elemenos el array original con metodo UnShift: ${numeros2}`);
console.log(`El nuevo largo del array es: ${resultadoUnShitf}`);


// 3.1.3. Shift  (Similitud como Pop)
// Elimina elementos al inicio de un array y retorna el elemento eliminado.
console.log(`Array original: ${numeros2}`);

let resultadoShitf =numeros2.shift()
console.log(`Elimina el primer elemento del array original con metodo Shift: ${numeros2}`);
console.log(`El elemento elmininado es: ${resultadoShitf}`);