/* eslint-disable react/prop-types */
import React from "react";

import "./CardDesc.css";

function CardDesc({ pokemon }) {
  return (
    <div className="card-desc">
      <div className="card-desc-body">
        <img className="card-desc-img" src={pokemon.image} alt={pokemon.name} />
        <div className="text-desc">
          <img
            className="card-desc-imgtype"
            src={pokemon.icon}
            alt={pokemon.type}
          />
          <h3>{pokemon.type}</h3>
          <h1>{pokemon.name}</h1>
          <p className="p-desc">{pokemon.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDesc;
