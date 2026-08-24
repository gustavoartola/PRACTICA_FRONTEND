// CLASE 17 - DOM en JAVA SCRIPT
// 01. Conceptos fundamentales

// 1. Visualizar conenido de un elemento del HTML  (Cualquier elemento) 
const titulo = document.querySelector("h1")
console.log(titulo);

// 2. Modificar un elemento del HTML
titulo.textContent = "Adios"

// 3. Por definicion se utiliza dentro del metodo document.addEventListener.
// Cuando el DOMContentLoaded cargue dentro del archivo Document, entonces se ejecutan las intrucciones dentro de la seccion o funcion.
document.addEventListener("DOMContentLoaded", function(){
    
    const tituloPrincipal = document.querySelector(".titulo") // Accedo clases asociadas a elemenots
    const tituloSecundario = document.querySelector("p")  // Accedo a etiquetas
    const tituloProductos = document.querySelector("#productos") // Accedo a id asociadas a elemenots
    const itemProductos = document.querySelectorAll(".list-item")  //En este caso uso querySelectorAll, para los eleemntos de las listas

    console.log(tituloPrincipal);
    console.log(tituloSecundario);
    console.log(tituloProductos);
    console.log(itemProductos);
      
  }

)



