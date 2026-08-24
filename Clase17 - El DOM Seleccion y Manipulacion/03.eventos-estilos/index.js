// 3. Eventos en JS

document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.querySelector(".titulo");
  const texto = document.querySelector(".texto");

  //   Evento Click en JS
  titulo.addEventListener("click", function () {
    if (titulo.style.color === "red") {
      console.log(titulo.style.color);
      titulo.style.color = "";
    } else {
      console.log(titulo.style.color);
      titulo.style.color = "red";
    }
  });

  //   Evento Hover em JS
  //   Se divide en dos etapas - el mouseover y mouseout

  // Evento MouseOver
  texto.addEventListener("mouseover", function () {
    texto.style.fontFamily = "Georgia, serif";
    texto.style.fontStyle = "Italic";
  });

  // Evento MouseOver
  texto.addEventListener("mouseout", function () {
    texto.style.fontFamily = "fantasy";
    texto.style.fontStyle = "";   // vuelve a su valor por defecto
  });
  
});
