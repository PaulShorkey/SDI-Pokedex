import './App.css';
import {useState, useContext, createContext} from 'react'
import PokemonList from './PokemonList.js'
// import {AppContext} from './AppContext.js'

function App() {
  

  const homeState = () => {
    return (
        <div>
          <PokemonList/>
        </div>
    )
  }

  const [appState, setAppState] = useState(homeState())
  
  const homeOnClickHandler = () =>{
    return (
      setAppState(homeState())
    )
  }

  console.log("the code is working")
  const AppContext = createContext(setAppState)
  console.log("this is app context", AppContext)


  
  
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className = "col-md-6 offset-md-3">
            <button onClick={() => {homeOnClickHandler()}}>Home</button>
          </div>
        </nav>
      </header>
      {appState}
      <AppContext.Provider value={{appState, setAppState}}>
       <PokemonList/>
      </AppContext.Provider>
    </div>
    
  );
}

export {AppContext};

export default App;
