import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import "./pokemon.css";
function Pokedex() {
  return (
    <>
      <div className="pokemon-wrapper">
        <h1>Pokemon</h1>
        <Search />
        <PokemonList/>
      </div>
    </>
  );
}

export default Pokedex;
