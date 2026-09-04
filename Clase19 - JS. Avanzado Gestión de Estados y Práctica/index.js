// Referencias

const formulario = document.getElementById("form-tarea");
const inputTarea = document.getElementById("input-tarea");
const listaTareas = document.getElementById("lista-tareas");
const contadorTarea = document.getElementById("contador");




function actualizarContador() {
  return listaTareas.children.length;
}

formulario.addEventListener("submit", function (e) {
  
  // Prevengo que se actualice formulario,   doy gestion al JS  
    e.preventDefault();

  // Realizo tratamiento de dato ingresado  
  const nuevaTarea = inputTarea.value.trim().toLowerCase();

  // realizo validaciones
  if (nuevaTarea === "") {
    return;
  }

  // 1. Creo elemento e inserto en la lista
  const tarea = document.createElement("li");
 
  const small = document.createElement("small");
  small.textContent = nuevaTarea;


  // 2. Creo boton de eliminar tarea
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "X";
  botonEliminar.classList.add ("tarea-eliminar");

  // 3. Completo tareas / Dejo en pendiente (usando Toogle)
  tarea.addEventListener("click", function () {
    tarea.classList.toggle("completada")    
  })

  // 4. Elimino tarea
  botonEliminar.addEventListener("click", function () {
    e.stopPropagation()
    tarea.remove();
    contadorTarea.textContent = actualizarContador();
  })


  tarea.appendChild(small);
  tarea.appendChild(botonEliminar);

  // 5. Agrego tarea a la lista
  listaTareas.appendChild(tarea);

  // 6. Actualizo contador
  contadorTarea.textContent = actualizarContador();

  // 7. Limpio input de carga y pongo foco
  inputTarea.value = "";  
  inputTarea.focus();

});
