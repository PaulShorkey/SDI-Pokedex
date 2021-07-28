import './App.css';
// import {useState, useContext, createContext} from 'react'
import PokemonList from './PokemonList.js'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PokemonInfo from './PokemonInfo.js'
import Navbar from './Navbar';


function App() {
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        
        <div className = "content">
          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/PokemonInfo" component={PokemonInfo} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;


/*
return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className = "col-md-6 offset-md-3">
              <button /*onClick={() => {homeOnClickHandler()}}>Home</button>
              </div>
              </nav>
            </header>
            <Route exact path="/">
              <PokemonList/>
              {/* <AppContext.Provider value={{appState, setAppState}}>
              <PokemonList/>
              </AppContext.Provider> }
            </Route>
            <Route path='/pokemonInfo' >
              
            </Route>
          </div>
    
        </Router>
      );
      */