import { useState } from "react";

function Interruptor() {
  // Guardo estado de la luz (Encendida o Apagada)
  const [luzEncendida, setLuzEncendida] = useState(false);

  // Cada vez que haga click en el Interruptor voy a guardar
  // id , estado (encendida o apagada), cuando.
  const [historialClicks, setHistorialClicks] = useState([]);

  const cambiarLuz = () => {
  //     if (luzEncendida){
  //         setLuzEncendida(false)
  //     } else {
  //         setLuzEncendida(true)
  //     }
 
  // nuevoEstado no modifica el state ni tampoco lo asigna.
  const nuevoEstado = !luzEncendida;
  setLuzEncendida(nuevoEstado);

  // Version reducida
  // setLuzEncendida(luz => !luz)

//Creo un objeto llamado registro para cada item del hisotorial
  const registro = {
    // Necesito un ID unico
    id: crypto.randomUUID(),
    // Renderizado condicional - texnica con if ternarios
    mensaje: `Luz ${nuevoEstado ? "encendida" : "apagada"}  
    a las ${new Date().toLocaleTimeString()}` 
  }

  //Utilizo el Spread Operator
  setHistorialClicks([registro, ...historialClicks])

  console.log("no spread",  historialClicks);
  
  console.log("spread");
  console.log(...historialClicks);
  

}

  return (
    <section className="tarjeta interruptor">

      <h2>Interruptor</h2>

    {/* Incorporo un if ternario para incorporar texto o icono segun valoer del estado "luz encendida" */}
      <div className="bombilla">{luzEncendida ? "🌞" : "🌙" }</div>

      <button onClick={cambiarLuz} >{luzEncendida ? "Apagar" : "Encender"}</button>

      <div className="historial">
        <h3>Registro de Clicks</h3>

           {/* Forma como utilizamos el map para iterar un array en el ejemplo anterior */}

             {/* Utilizando Empty state 
             Que mostrar cuando no tenes nada para mostrar*/}
             {historialClicks.length===0 ?(
                <p className="historial-vacio">Todavia no tocaste el interruptor</p>
             ) : (

            <ul>
            {historialClicks.map((registro) => (
                    <li key={registro.id}>{registro.mensaje}</li>
                ))} 
            </ul>
            )}

      </div>
    </section>
  );
}

export default Interruptor;
