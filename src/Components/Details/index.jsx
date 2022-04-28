import React, { useMemo } from "react";

function Details({ pokemonDefault }) {

  const abilities = useMemo(() => {
    if (pokemonDefault?.abilities)
      return pokemonDefault?.abilities.map(e => {
        return e.ability.name;
      });

    return [];
  }, [pokemonDefault]);

  const type = useMemo(() => {
    if (pokemonDefault?.types)
      return pokemonDefault?.types.map(e => {
        return e.type.name;
      });

    return [];
  }, [pokemonDefault]);

  return (
    <div className="details">
      <div className="image">
        <img alt={pokemonDefault?.name} src={pokemonDefault?.sprites?.front_default} />
      </div>

      <div className="infor"> 

        <div className="card">
          <h3>Nome:</h3>
          <label>{pokemonDefault?.name}</label>
        </div>

        <div className="card">
          <h3>Codigo:</h3>
          <label>{pokemonDefault?.id}</label>
        </div>

        <div className="card">
          <h3>Altura:</h3>
          <label>{pokemonDefault?.height}</label>
        </div>

        <div className="card">
          <h3>Habilidades:</h3>
          <label>{abilities.join(', ')}</label>
        </div>

        <div className="card">
          <h3>Peso:</h3>
          <label>{pokemonDefault?.weight}</label>
        </div>

        <div className="card">
          <h3>Tipo:</h3>
          <label>{type}</label>
        </div>
      </div>

    </div>
  )
}
export default Details;