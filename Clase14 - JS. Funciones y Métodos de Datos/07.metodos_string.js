//7. METODOS CON STRINGS

// 7.1  .includes(palabra):
// Es un "buscador". Te responde con un simple SÍ (true) o NO (false) si el texto contiene esa palabra.

let frase = "Aprender javascript es GENIAL!";
console.log(frase.includes("javascript"));
console.log(frase.includes("phyton"));
console.log(frase.includes("genial"));

// Includes es key sensitive -> considera como diferentes a las mayusculas y las minusculas
console.log(frase.includes("Javascript"));


// 7.2  .toUpperCase() / .toLowerCase(): 
// Son los "gritones / susurradores". Convierten todo tu texto a MAYÚSCULAS o a minúsculas, respectivamente.
// toLowerCase permite standarizar nombres de usuario y emails

console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
console.log(frase);  //Frase se manitene intacta

console.log(`toUppercase + include: ${frase.toUpperCase().includes("JAVASCRIPT")}`);


//7.4 .trim(): 
//Es la "escoba". Barre y limpia los espacios vacíos que sobran al principio o al final de un texto (súper útil para limpiar mails o nombres mal escritos por el usuario).

let emailsucio = "           gustavoartola|@GMAIL.COM     "
console.log(emailsucio);
console.log(emailsucio.trim());
console.log(emailsucio.toLowerCase().trim());


//7.5 .slice(inicio, fin):
// Es la "tijera". Corta un pedazo específico de tu texto desde una posición hasta otra y te devuelve solo ese fragmentito.
let frase2 = "Aprender javascript es GENIAL!";
console.log(frase2);
console.log(frase2.slice(9,19));
console.log(frase2.slice(0,8));
console.log(frase2.slice(9));  //No es necesario poner el final

// 7.6.split(separador):
// Es el "hacha". Rompe tu texto cada vez que encuentra el separador que le pases (por ejemplo, una coma) y convierte todos esos pedazos en una lista (un Array)
// .csv

let frutasTexto = "uva, manzana, pera"
let frutasArray
frutasArray = frutasTexto.split(",")
console.log(frutasArray);

// Metodos -> funciones
// Propiedades -> datos

// ¿Como saber el largo de un string/array?
console.log(frase.length);

for (let index = 0; index < frase.length; index++) {
   console.log(frase.slice(index, index+1));
}
