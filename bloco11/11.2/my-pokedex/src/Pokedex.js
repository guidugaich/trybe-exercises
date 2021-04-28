import React from 'react'
import Pokemon from './Pokemon'
import './Pokedex.css'

function Pokedex(props) {
  const listOfPokemons = props.pokelist.map((poke) => (
    <Pokemon pokemon={poke}/>
  ))
  
  return (
    <div className='pokedex'>
      {listOfPokemons}
    </div>
  )
}

export default Pokedex