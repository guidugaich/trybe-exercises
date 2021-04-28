import './App.css';
import Pokedex from './Pokedex'
import pokemons from './data'

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <Pokedex pokelist={pokemons}/>
    </div>
  )}

export default App;
