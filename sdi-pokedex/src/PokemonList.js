import PokemonListEntry from './PokemonListEntry';
import {useState, useEffect} from 'react'

// import { getPokemonData } from './api-clients';
var PokemonList = ({setAppState}) => {

    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
        .then(res => res.json())
        .then(data => setPokemonData(data.results))
    },[])

    
    const PokemonListData = pokemonData.map(pokemon => {
        return <PokemonListEntry name={pokemon.name} url={pokemon.url} setAppState={setAppState}/>
    })

    return (
        <div className='email-list'>
            {PokemonListData}
        </div>
    )

}

export default PokemonList;