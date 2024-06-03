import axios from "axios";
import "./pokemonlist.css";
import { useEffect, useState } from "react";
import Showpokemon from "../pokemonShow/Showpokemon";

function PokemonList() {
  // Set Loading Function To Display
  const [pokemonList, setpokemonList] = useState([]);
  const [isLoading, setisLoadig] = useState(true);

  const [pokedexUrl, setpokedexUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextUrl, setnextUrl] = useState("");
  const [prevsUrl, setprevsUrl] = useState("");
  async function pokemonDownload() {
    setisLoadig(true);
    const response = await axios.get(pokedexUrl);

    const pokemonData = response.data.results;
    // Return Object
    console.log(response.data);
    setnextUrl(response.data.next);
    setprevsUrl(response.data.previous);
    const promiseArrayOfData = pokemonData.map((pokemon) =>
      axios.get(pokemon.url)
    );

    const allPokemonData = await axios.all(promiseArrayOfData);

    const res = allPokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types,
      };
    });
    setpokemonList(res);
    setisLoadig(false);
  }
  useEffect(() => {
    pokemonDownload();
  }, [pokedexUrl]);

  return (
    <div className="pokemon-list-wrapper">
      <div>
        <h1 className="header">POKEMON LIST</h1>
      </div>
      <div className="pokemon-wrapper-2">
        {isLoading
          ? "Loading..."
          : pokemonList.map((p) => (
              <Showpokemon name={p.name} image={p.image} key={p.id} id={p.id} />
            ))}
      </div>
      <div id="control-button">
        <button
          disabled={prevsUrl == null}
          onClick={() => setpokedexUrl(prevsUrl)}
        >
          Prev
        </button>
        <button
          disabled={nextUrl == null}
          onClick={() => setpokedexUrl(nextUrl)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
