/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

import "../style/CardPkmn.css";

function CardPkmn({ pokemon }) {
  return (
    <div className="list-card">
      <div className="card">
        <div className="card-body">
          <Link to={`/pokemons/${pokemon.id}`}>
            <img className="card-img" src={pokemon.image} alt={pokemon.name} />
          </Link>
          <figcaption className="card-text">{pokemon.name}</figcaption>
        </div>
      </div>
    </div>
  );
}

export default CardPkmn;
