
document.addEventListener("DOMContentLoaded", function () {

  const lista = document.querySelector(".lista");
  const itemsNode = document.querySelectorAll(".item");
  let contador = itemsNode.length;
  const btnAgregar = document.getElementById("btn-agregar");

  //Agregar un item a traves dek evento click en el boton Agregar
  btnAgregar.addEventListener("click", function () {

    //Incrementar contadodor
    contador++;
    //Crear un li
    const li = document.createElement("li");
    //Incorporarle el texto a li
    li.textContent = `Item ${contador}`;
    //Incorporarle la class "item" al li.
    li.classList = "item";
    //Agregar el li a la ul (lista)
    lista.appendChild(li);

  });

});
