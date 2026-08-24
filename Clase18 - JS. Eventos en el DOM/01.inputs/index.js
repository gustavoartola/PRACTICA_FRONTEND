document.addEventListener("DOMContentLoaded", function () {
  // Referencias
  const texto = document.getElementById("texto");
  const textColor = document.getElementById("textColor");
  const textSize = document.getElementById("textSize");
  const colorBG = document.getElementById("colorBG");
  const resultado = document.getElementById("resultado");
  const body = document.querySelector("body");

  // Funciones
  function actualizarTexto(resultado, texto) {
    resultado.textContent = texto.value;
  }

  function actualizarColor(resultado, textColor) {
    resultado.style.color = textColor.value;
  }

  function actualizarTextSize(resultado, textSize) {
    resultado.style.fontSize = `${textSize.value}px`;
  }

  function actualizarColorBG(body, colorBG) {
    body.style.backgroundColor = colorBG.value;
  }

  // Eventos

  texto.addEventListener("input", () => actualizarTexto(resultado, texto));

  textColor.addEventListener("input", () =>
    actualizarColor(resultado, textColor),
  );

  textSize.addEventListener("input", () =>
    actualizarTextSize(resultado, textSize),
  );

  colorBG.addEventListener("input", () => actualizarColorBG(body, colorBG));
});
