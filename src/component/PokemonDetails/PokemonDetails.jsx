import axios from "axios";
import './details.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetail() {
  let { id } = useParams();
  const [pokemon, setpokemon] = useState({});
  async function downloadPokemonId() {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // console.log(res.data);
    setpokemon({
      name: res.data.name,
      image: res.data.sprites.other.dream_world.front_default,
      weight: res.data.weight,
      height: res.data.height,
      types: res.data.types.map((t) => t.type.name),
    });
  }
  useEffect(() => {
    downloadPokemonId();
  }, []);
  return (
    <div className="pokemon-details">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} />
      <h2> Weight: {pokemon.weight}</h2>
      <h2>Height: {pokemon.height}</h2>
      <h2>Types: {pokemon.types}</h2>
    </div>
  );
}
export default PokemonDetail;
