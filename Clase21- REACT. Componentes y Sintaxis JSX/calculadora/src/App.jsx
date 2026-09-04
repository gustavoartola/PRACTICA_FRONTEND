import { useState } from "react";
import "./App.css";

function App() {
  // [Estado, Dispatch<SetStateAction<Estado>>]
  // Valores Iniciales
  // Numero --> 0
  // String --> ""
  // Array = []
  // Booleano = False
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  // Formulario Controlado
  // --> Estado setea el value de los inputs
  // --> Evento sedtea el estado.

  // La unica forma de cambiar el estado es con setEstado

  // Nota: Aunque el input es tipo "number", lo que se obtiene del input es un string, por lo tanto hay que transformarlo.

  const handleNum2Change = (evento) => {
    setNum2(Number(evento.target.value));
  };

  const handleOperar = (operador) => {
    let resultadoCalculado;

    switch (operador) {
      case "sumar":
        resultadoCalculado = num1 + num2;
        break;

      case "restar":
        resultadoCalculado = num1 - num2;
        break;

      case "multiplicar":
        resultadoCalculado = num1 * num2;
        break;

      case "dividir":
        resultadoCalculado = num1 / num2;
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

          <div className="campo">
            <label htmlFor="input-numero-1">Nuúmero 1</label>
            <input
              type="number"
              id="input-numero-1" value={num1}
              // Metodo 1 --> A traves de funcion fecha, si el codigo es manejable en una linea, condicional ternario.
              onChange={(evento) => setNum1(Number(evento.target.value))}
              placeholder="0"
            />

            <label htmlFor="input-numero-2">Nuúmero 2</label>
            <input
              type="number"
              id="input-numero-2" value={num2}
              // Metodo 2: A traves de una función Handle
              // Ventaja que permite hacer validaciones o tener codigo extra en la función
              onChange={handleNum2Change}
              placeholder="0"
            />
          </div>

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
