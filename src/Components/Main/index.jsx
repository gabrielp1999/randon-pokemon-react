import React, {useEffect, useState} from "react";
import Table from "../Table";
import Details from "../Details";
import axios from "axios";

function Main() {
  const generateNumber = () => {
    return  Math.floor(Math.random() * 150);
  }
  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokemonDefault, setPokemonDefault] = useState([]);

  useEffect(() => {
    const generatePokemons = async () => {
      let numbers = [];
      for(let i = 0; i < 10; i++){
        let random = generateNumber();
        let validate = numbers.some( item => item === random || random === 0);
        if(validate){
          while(validate){
            random = generateNumber();
            validate = numbers.some( item => item === random || random === 0);
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

    setPokemonDefault(pokemonsList[0]);
  },[pokemonsList]);

  const selectedPokemon = (id) => {
    setPokemonDefault(id);
  }
  return(
    <section className="main">
      <Table 
        pokemonsList={pokemonsList}
        selectedPokemon={selectedPokemon}
      />
      <Details pokemonDefault={pokemonDefault} />
    </section>
  )
}

export default Main;