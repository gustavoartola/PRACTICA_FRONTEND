import { useState } from "react";
import "./App.css";

function App() {
  // Estado --> memoria, se guarda en variables, fuente de la verdad
  // La unica forma de asignar un valodar a un estado es a traves del set
  // const [estado, setEstado] = usestate([])
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");

  function agregarTarea(e) {
    e.preventDefault(); //Frena el reload del navegador

    const textoLimppio = texto.trim(); //Borro espacios

    if (textoLimppio === "") {
      return;
    }

    const nuevaTarea = {
      id: crypto.randomUUID(), //Id Unico autogenerado
      texto: textoLimppio,
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]); //...tareas (spread operator) indica que toma lo que ya tiene "tareas" y a eso le suma la nueva tarea nuevaTarea
  }

  function toggleTarea(id) {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea,
      ),
    );
  }

  function eliminarTarea(id, e) {
    e.stopPropagation(); //Evita que no se dispare ek click del toggle
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  }

  return (
    <>
      <main className="app">
        <h1>Gestor de Tareas</h1>

        <form id="form-tarea" onSubmit={agregarTarea}>
          <label for="input-tarea">Tarea</label>
          <input
            type="text"
            name="input-tarea"
            id="input-tarea"
            placeholder="¿Que tenes que hacer?"
            value={texto}
            //Si no havemos esto el input no puedo modificarlo
            onChange={(evento) => setTexto(evento.target.value)}
          />

          <button type="submit">Agregar</button>
        </form>

        <ul id="lista-tareas">
          {tareas.map((tarea) => (
            <li
              key={tarea.id}
              className={tarea.completada ? "completada" : ""}
              onClick={() => toggleTarea(tarea.id)}
            >
              <small>{tarea.texto}</small>
              <button
                className="tarea-eliminar"
                onClick={(event) => eliminarTarea(tarea.id, event)}
              >
                X
              </button>
            </li>
          ))}
        </ul>

        <p>
          <span id="contador">{tareas.length}</span> tareas.
        </p>
      </main>
    </>
  );
}

export default App;
