import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {Link} from 'react-router-dom'


const PokemonListEntry = ({ name } ) => {
  const [pokemonPic, setPokemonPic] = useState([])
  const [pokemonData, setPokemonData] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => res.json())
    .then(data => {
      setPokemonPic(data.sprites.front_default)
      setPokemonData(data)
    })
  }, [])

  // console.log(pokemonData)


  


  return (
     <div className='pokemonListEntry'>
         <div>{name}</div>
           <Link to={{
             pathname: '/PokemonInfo',
             state: {
               name: pokemonData.name,
               height: pokemonData.height
             }
           }}><img src={pokemonPic}  singlePokemonData={pokemonData}/></Link>
     </div>
     
  )
}

export default PokemonListEntry; 