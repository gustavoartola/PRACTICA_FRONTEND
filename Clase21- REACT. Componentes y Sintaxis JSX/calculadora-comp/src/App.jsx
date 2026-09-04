import { useState } from "react";
import "./App.css";
import { mathOperations } from "../utils/mathOperations";

// Si el Export es "defoult" no se usan las llaves
import Input from "../components/Input";



function App() {
  // [Estado, Dispatch<SetStateAction<Estado>>]
  // Valores Iniciales
  // Numero --> 0
  // String --> ""
  // Array = []
  // Booleano = False
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [resultado, setResultado] = useState(0);

  // Formulario Controlado
  // --> Estado setea el value de los inputs
  // --> Evento sedtea el estado.

  // La unica forma de cambiar el estado es con setEstado

  // Nota: Aunque el input es tipo "number", lo que se obtiene del input es un string, por lo tanto hay que transformarlo.


  const handleOperar = (operador) => {
    let resultadoCalculado;

    switch (operador) {
      case "sumar":
        resultadoCalculado = mathOperations.suma(num1, num2);
        break;

      case "restar":
        resultadoCalculado = mathOperations.resta(num1, num2) ;
        break;

      case "multiplicar":
        resultadoCalculado = mathOperations.muultiplicacion(num1, num2) ;
        break;

      case "dividir":
        resultadoCalculado = mathOperations.dividir(num1, num2) ;
        break;

      default:
        resultadoCalculado = 0;
        break;
    }

    // Seter al resultado y se muestra en el parrafo el valor
    setResultado(resultadoCalculado);

    // Lismpiar los input
    setNum1(0)
    setNum2(0)

  };

  return (
    <>
      <main className="app">
        <section className="tarjeta">
          <h1>Calculadora</h1>
           
            <Input type={"number"}
            label={"input-numero-1"}
            value={num1}
            labelId={"input-numero-1"}
            evento={(evento) => setNum1(Number(evento.target.value))}
            placeHolder={"0"}/>


            <Input type={"number"}
            label={"input-numero-2"}
            value={num2}
            labelId={"input-numero-2"}
            evento={(evento) => setNum2(Number(evento.target.value))}
            placeHolder={"0"}/>

            {/* <Input type={"color"}
            label={"Eligue un Color"}
            labelId={"input-numero-3"}
            />

            <Input type={"date"}
            label={"Fecha de Nacimiento:"}
            labelId={"input-numero-4"}
            /> */}

          <div className="botones">
            <button onClick={()=>handleOperar("sumar")}>Sumar</button>
            <button onClick={()=>handleOperar("restar")}>Restar</button>
            <button onClick={()=>handleOperar("multiplicar")}>Multiplicar</button>
            <button onClick={()=>handleOperar("dividir")}>Dividir</button>
          </div>

          <p className="resultado">
            Resultado: <strong>{resultado}</strong>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
