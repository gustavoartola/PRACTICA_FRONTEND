document.addEventListener("DOMContentLoaded", function () {
  // 02. Acceso a elementos en JS
  
  // El querySelector se utiliza para todo (clases, IdleDeadline, MediaElementAudioSourceNode, etc)
  // const tituloPrincipal = document.querySelector(".titulo") // Accedo clases asociadas a elemenots

  // El getElementById se utiliza para acceder a un elemento por Id
  const parrafoEspecial = document.getElementById("parrafo-especial");
  console.log(parrafoEspecial);

  //Una vez recuperado el elemento, puedo acceder al estilo y modificarlo-
  parrafoEspecial.style.backgroundColor = "Brown";
  parrafoEspecial.style.color = "yellow";
  parrafoEspecial.style.borderRadius = "12px";
  parrafoEspecial.style.textAlign = "Center";

  //Retorno de Objetos - Coleccion

  // HTML Collection --> getElementByClassName se utiliza para acceder a un elemento por nombre de clase
  const itemsHtml = document.getElementsByClassName("item");
  console.log(itemsHtml);

  //Node List
  const itemsNode = document.querySelectorAll(".item");
  console.log(itemsNode);

  //Node List posee forEach
  itemsNode.forEach((items, index) => {
    console.log(items, index);
  });

  // HTML collection - no funciona con forEach -> Lo pasas por un for o lo convertis en array
  // ✅ Solución 1: convertirla en array
  Array.from(itemsHtml).forEach(function (item, i) {
    console.log(`3b) Convertida con Array.from, item ${i}:`, item.textContent);
  });

  // ✅ Solución 2: recorrerla con un for clásico (funciona en las dos)
  for (let i = 0; i < itemsHtml.length; i++) {
    console.log(`3c) Con for clásico, item ${i}:`, itemsHtml[i].textContent);
  }
});
