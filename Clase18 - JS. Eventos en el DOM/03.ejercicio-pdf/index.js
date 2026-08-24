document.addEventListener("DOMContentLoaded", function () {
  //Capturo Formulario, y evito que se recargue ante el evento "submit"
  const formulario = document.getElementById("formulario");
  const nombre = document.getElementById("nombre");
  const color = document.getElementById("color");

  const cargarPerfil = document.getElementById("cargar-perfil");
  const miNombre = document.getElementById("mi-nombre");
  const miColor = document.getElementById("mi-color");

  const body = document.querySelector("body");

  let miPerfil = {
    nombre: "",
    color: "",
  };

  // Funciones

  //Eventos
  formulario.addEventListener("submit", (e) => {
    // Frena el tiempo. Le dice al navegador: "No te recargues, yo me encargo desde aquí".
    e.preventDefault();
    console.log("Formulario capturado por JS de forma segura");

    miPerfil.nombre = nombre.value;
    miPerfil.color = color.value;
    console.log(miPerfil);

    // Convertir objeto a string y guardar
    localStorage.setItem("perfilUsuario", JSON.stringify(miPerfil));
  });

  cargarPerfil.addEventListener("click", function () {
    const recoverPerfil = JSON.parse(localStorage.getItem("perfilUsuario"));
    console.log(recoverPerfil);

    if (recoverPerfil !== null) {
      miNombre.textContent = recoverPerfil.nombre;
      miColor.textContent = recoverPerfil.color;
      body.style.backgroundColor = recoverPerfil.color;
    } else {
      miNombre.textContent = "sin nombre de perfil";
      miColor.textContent = "sin color de perfil";
    }
  });
});
