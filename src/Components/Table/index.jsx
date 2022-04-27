import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Table() { 
  const generateNumber = () => {
    return  Math.floor(Math.random() * 150);
  }

  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    const generatePokemons = async () => {
      let numbers = [];
      for(let i = 0; i < 10; i++){
        let random = generateNumber();
        let validateContains = numbers.some(item => item === random) || random === 0;
        if(validateContains) {
          while(validateContains){
            random = generateNumber();
            validateContains = numbers.some(item => item === random) || random === 0;
          }
        }
        numbers.push(random);
      }

      let pokemons = [];
      for(let num of numbers){
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        pokemons.push(pokemon.data);
      }

      setPokemonsList(pokemons);
    }
    if (!pokemonsList.length) generatePokemons();
  },[pokemonsList]);

  console.log(pokemonsList.map(item => item.id));
  return (
    <div>
      <table className='style-table'>
        <tbody>
          <tr>
            <td>Nome</td>
            <td>Imagem</td>
            <td>kmiopn</td>
          </tr>
          <tr>
            <td>Nome</td>
            <td>Imagem</td>
            <td>kmiopn</td>
          </tr>
        </tbody>  
      </table>
    </div>
  )
} 

export default Table;