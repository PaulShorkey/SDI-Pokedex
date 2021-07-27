import {useState, useEffect, useContext} from 'react'
import {AppContext} from './App'

const PokemonListEntry = ({ name } ) => {
  const [pokemonPic, setPokemonPic] = useState([])

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => res.json())
    .then(data => setPokemonPic(data.sprites.front_default))
  }, [])

  const context = useContext(AppContext);
  console.log(context)
  
  
  

  return (
     <div className='pokemonListEntry'>
         <div>{name}</div>
         <img src={pokemonPic} />
     </div>
  )
}

export default PokemonListEntry; 