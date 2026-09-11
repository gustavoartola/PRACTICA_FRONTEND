import React, { useEffect, useState } from "react";

// Endpoint
const URL_PERSONAJES = "https://rickandmortyapi.com/api/character";

function useFechPersonajes() {
  // Data mantiene la información que la API me envia
  const [personajes, setPersonajes] = useState([]);

  // Loading - Para avisarle al usuario que su peticion se esta cargando.
  const [loading, setLoading] = useState(true);

  // Error - Se utiliza para enviarlo a la pantalla, y ver en tiempo real si hay un error.
  // Lo inicializo en null porque es `error' es un objeto (tambien se pone como null cuando no se sabe el contenido)
  const [error, setError] = useState(null);


  
  // Implementación de la Funcion Principal
  const fechPersonajes = async () => {
    // Seteamos Loading en "true"
    setLoading(true);
    // Seteamos Error en "null", ya que no sabemos si quedó el estado guardado de la ejecución anterior.
    setError(null);

    try {
      const respuesta = await fetch(URL_PERSONAJES);

      //   Si mi llamado a la API no salio bien, entonces lanzamos un error con "throw"
      if (!respuesta.ok) {
        throw new Error(`Error en la llamada: ${respuesta.status}`);
      }

      // Parsea "convierte" de JSon a objeto de JS
      // Podemos tener control total
      // Puedo aploicarle metodes, funcionaes, bucles, destructuraciòn, etc.
      const personajesParseados = await respuesta.json();

      setPersonajes(personajesParseados.results);
    } catch (error) {
      setError(error.message || "Ocurrio un error en la API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fechPersonajes();
  }, []);

  // El retorno se debe incorporar entre {}
  return { personajes, loading, error, fechPersonajes };
}

export default useFechPersonajes;
