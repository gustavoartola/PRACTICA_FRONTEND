
import useFechPersonajes from "../hooks/useFechPersonajes";

function Personajes() {
  const { error, loading, personajes } = useFechPersonajes();

  // Nanejar los errores
  if (loading) return <p className="cargando">Cargando Personajes ....</p>;

  if (error)
    return <p className="cargando">Error al cargar Personajes: ${error}</p>;

  return (
    <section className="tarjeta personajes">
      <div className="personajes-header">
        <h2>Personajes de Rick & Morty</h2>
      </div>

      <div className="grid-personajes">
        {personajes.map((personaje) => (
          <article key={personaje.id} className="tarjeta-personaje">
            <img src={personaje.image} alt={personaje.name} />
            <h3>{personaje.name}</h3>
            <p className="estado">
              {personaje.status} , {personaje.species}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Personajes;
