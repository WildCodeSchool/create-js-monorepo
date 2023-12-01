/* eslint-disable react/prop-types */
import React from "react";

import "../style/CardDesc.css";

function CardDesc({ pokemon }) {
  return (
    <div key={pokemon.id} className="card-desc">
      <div className="card-desc-body">
        <img className="card-desc-img" src={pokemon.image} alt={pokemon.name} />

        <figcaption className="card-desc-text">{pokemon.name}</figcaption>
      </div>
    </div>
  );
}

export default CardDesc;
