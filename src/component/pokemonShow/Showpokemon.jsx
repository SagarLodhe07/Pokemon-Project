import "./showPokemon.css";
import { Link } from "react-router-dom";

function Showpokemon({ name, image, id }) {
  return (
    <div className="wrap">
      <Link to={`/pokemon/${id}`}>
        <div className="pokemon-name">{name}</div>
        <div>{id}</div>

        <div>
          <img className="pokemon-image" src={image} />
        </div>
      </Link>
    </div>
  );
}

export default Showpokemon;
