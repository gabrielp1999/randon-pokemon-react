import React from 'react';

function Table({ pokemonsList, selectedPokemon }) { 

  return (
    <div>
      <table className='style-table'>
        <tbody>
          <tr>
            <td>Nome</td>
            <td>Imagem</td>
            <td></td>
          </tr>
          {pokemonsList?.map(pokemon => (
            <tr key={pokemon?.id}>
              <td>{pokemon?.name}</td>
              <td>
                <img 
                  alt='pokemon'
                  className='style-png' 
                  src={pokemon.sprites.front_default}
                />
                </td>
              <td><button onClick={() => selectedPokemon(pokemon)}>Selecionar</button></td>
            </tr>
          ))}
        </tbody>  
      </table>
    </div>
  )
} 

export default Table;