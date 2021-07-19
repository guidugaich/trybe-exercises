import React from 'react'
import './Pokemon.css'

function Pokemon(props) {
  return (
    <div class='pokemon'>
      <div class='pokeinfo'>
        <p>{props.pokemon.name}</p>
        <p>{props.pokemon.type}</p>
        <p>Weight: {props.pokemon.averageWeight.value}</p>
      </div>
      <img
        src={props.pokemon.image} 
        className='pokeimg'
        alt='Foto do pokemon'
      />
    </div>
  )
}

export default Pokemon