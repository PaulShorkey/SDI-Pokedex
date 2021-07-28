import App from './App.js'
// import { useHistory } from "react-router-dom"
import { useLocation } from 'react-router-dom'


const PokemonInfo = () => {
    let data = useLocation();
    console.log('location data:', data)
    // console.log(props)
    return (
        //Name
        //Image
        //Type
        <div className="PokemonInfo">
            <h2>Name: {data.state.name}</h2>
            <p>Height: {data.state.height}</p>
        </div>
    )
}

export default PokemonInfo;