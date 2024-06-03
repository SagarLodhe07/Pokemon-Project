import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import "./pokemon.css";
function Pokedex() {
  return (
    <>
      <div className="pokemon-wrapper">
        <Search />
        <PokemonList/>
      </div>
    </>
  );
}

export default Pokedex;
