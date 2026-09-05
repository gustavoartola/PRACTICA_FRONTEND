import PerfilHeroe from "../components/PerfilHeroe";
import "./App.css";

// 1. Definimos cada superhéroe como un objeto individual
const superman = {
  id: crypto.randomUUID(),
  nombre: "Superman",
  alterEgo: "Clark Kent",
  poderes: ["Vuelo", "Súper fuerza", "Visión láser"],
  universo: "DC Comics",
};

const spiderMan = {
  id: crypto.randomUUID(),
  nombre: "Spider-Man",
  alterEgo: "Peter Parker",
  poderes: ["Sentido arácnido", "Trepar paredes", "Agilidad"],
  universo: "Marvel Comics",
};

const batman = {
  id: crypto.randomUUID(),
  nombre: "Batman",
  alterEgo: "Bruce Wayne",
  poderes: ["Intelecto genio", "Artes marciales", "Gadgets"],
  universo: "DC Comics",
};

const capitanAmerica = {
  id: crypto.randomUUID(),
  nombre: "Capitan America",
  alterEgo: "No se quien es",
  poderes: ["Humano aumentado"],
  universo: "Marvel Comics",
};

// 1. Definimos listado de mis super heroes favoritos
const superHeroes = [superman, spiderMan, batman, capitanAmerica];

function App() {
  return (
    <>
      <section className="misHeroes">
        <h1>Mis Superheroes Favoritos</h1>

        {superHeroes.map((heroe)=>(
            <PerfilHeroe key={heroe.id} {...heroe} />
        ))}

      </section>
    </>
  );
}

export default App;
