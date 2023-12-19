import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./CardPkmn.css";

function CardPkmn({ pokemon }) {
  return (
    <div className="list-card">
      <div className="card">
        <div className="card-body">
          <Link to={`/pokemons/${pokemon.id}`}>
            <img className="card-img" src={pokemon.image} alt={pokemon.name} />
          </Link>
          <figcaption className="card-text">{pokemon.name}</figcaption>
          <img className="card-icon" src={pokemon.icon} alt={pokemon.icon} />
        </div>
      </div>
    </div>
  );
}

CardPkmn.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPkmn;
