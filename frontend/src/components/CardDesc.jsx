/* eslint-disable react/prop-types */
import React from "react";

import "../style/CardDesc.css";

function CardDesc({ pokemon }) {
  return (
    <div key={pokemon.id} className="card-desc">
      <div className="card-desc-body">
        <img className="card-desc-img" src={pokemon.image} alt={pokemon.name} />
        <div className="text-desc">
          <h1>{pokemon.name}</h1>
          <p>{pokemon.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDesc;
