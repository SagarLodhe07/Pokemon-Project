import { Routes, Route } from "react-router-dom";
import PokemonDetail from "../component/PokemonDetails/PokemonDetails";
import Pokedex from "../component/Pokemon/Pokemon";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
    </Routes>
  );
}
export default CustomRoutes;
