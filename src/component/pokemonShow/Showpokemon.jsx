import './showPokemon.css'

function Showpokemon({ name, image,id }) {
  return (
    <div className='wrap'>
        
      <div className='pokemon-name'>{name}</div>
      <div>{id}</div>

      <div>
        <img  className='pokemon-image' src={image} />
      </div>
    </div>
  );
}

export default Showpokemon;
