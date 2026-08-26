// document.addEventListener("DOMContentLoaded", function () { })
// En este caso no lo usaremos, porque en este ejemplo mostraremos como disparar eventos desde el propio HTML

// Referencias
const lista = document.querySelector(".lista-desordenada");
const listItem = document.querySelectorAll(".list-item");
const itemEspecial = document.getElementById("item-especial");
const texto = document.getElementsByClassName("texto");
const contenedorMagico = document.getElementsByClassName("ontenedor-magico");

const body = document.querySelector("body");

// Funcionaes

// 1- Crear un elemento y añadirlo al final.
function agregarListaFinal() {
  const li = document.createElement("li");
  li.textContent = "Soy un item nuevo al final de la lista";
  li.classList.add("list-item");
  lista.appendChild(li);
}

// - Crear un elemento y añadirlo al principio.
function agregarListaInicio() {
  const li = document.createElement("li");
  li.textContent = "Soy un item nuevo al iniciio de la lista";
  li.classList.add("list-item");
  lista.insertBefore(li, listItem[0]);
}

// - Eliminar el ultimo elemento de la lista.
function eliminarListaUltimo() {
    lista.removeChild(lista.lastChild);                  // Forma en que se lo solucione haciendo la practica-   
    // lista.removeChild(listItem(listItem.length-1));   // Forma en la que se realizo en clase
    // lista.removeChild(lista.lastElementChild);           // Otra Forma en la que se realizo en clase   
}

// - Eliminar el primer elemento de la lista.
function eliminarListaPrimero() {
    lista.removeChild(lista.firstChild);  
}

// - Modificar el texto.
function modificarTexto() {
    itemEspecial.textContent = "Yo soy unico"
}

// - Crear elementos.
function agregoParrafo(){
    const newP= document.createElement("p");
    newP.classList ="verde"
    newP.textContent = "Este es un parrafo agregado al HTML desde JS"
    body.appendChild(newP);
}

// - Agregar un atributo.
// function agregoAtributoEspecial() {
//     listItem[listItem.lastChild].setAttribute("id", "item-especial")
// }

// - Toogle de atributo. (similar a atributo prendido/apagado)
function agregarAtributoTogle() {
    itemEspecial.classList.toggle("rojo");
}

// - Agregar una clase.
function agregarClaseVerde() {
    listItem[5].classList.add("verde");
}

// - Remover una clase.
function removerClaseVerde() {
   listItem[5].classList.remove("verde")
}


// - Quitar todas las clases (atributo)
function quitarAllClases(){
    itemEspecial.removeAttribute("class")
    // itemEspecial.removeAttribute("id")
}


// Eventos
// En este ejemplo lo hacemos desde el HTML
