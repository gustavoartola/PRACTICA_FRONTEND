
//Referencias - obtengo elementos

const miTitulo = document.getElementById("titulo");
const miBody= document.querySelector("body")

//Incorporo estilo a un elemento
miTitulo.classList.add("titulo-gigante");

//Actualizo texto a un elemento
miTitulo.textContent="Gustavo Ariel Artola";

//Agrego un elemento al TML
const miParrafo = document.createElement("p");
miParrafo.textContent="Creado desde la Matrix";
miParrafo.classList.add("parrafo")
miBody.appendChild(miParrafo)


