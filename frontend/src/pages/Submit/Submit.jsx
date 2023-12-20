import React, { useState } from "react";
import connexion from "../../services/connexion";

import "./Submit.css";

const pokemonEntry = {
  name: "",
  description: "",
  image: "",
  type: "",
};

function Submit() {
  const [pokemon, setPokemon] = useState(pokemonEntry);

  const handlePokemon = (event) => {
    setPokemon((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const postPokemon = async (event) => {
    event.preventDefault();
    try {
      await connexion.post("/pokemons", pokemon);
    } catch (error) {
      console(error);
    }
  };

  return (
    <div>
      <h2 className="h2-submit">Have you discover a new pokemon species?</h2>
      <div className="submit">
        <form className="form" onSubmit={postPokemon}>
          <p className="submit-text">Submit your datas here!</p>
          <label>
            <p className="label-text">Name </p>
            <input
              type="text"
              name="name"
              required
              value={pokemon.name}
              onChange={handlePokemon}
            />
          </label>
          <label>
            <p className="label-text"> Description </p>
            <textarea
              name="description"
              required
              value={pokemon.description}
              onChange={handlePokemon}
            />
          </label>
          <label>
            <p className="label-text"> Image Url </p>
            <input
              type="url"
              name="image"
              required
              value={pokemon.image}
              onChange={handlePokemon}
            />
          </label>
          <label>
            <p className="label-text">Types </p>
            <select
              className="select-submit"
              name="type"
              value={pokemon.type}
              onChange={handlePokemon}
            >
              <option value="">Choose the type</option>
              <option value="Grass">Grass</option>
              <option value="Fire">Fire</option>
              <option value="Water">Water</option>
              <option value="Bug">Bug</option>
              <option value="Normal">Normal</option>
              <option value="Flying">Flying</option>
              <option value="Poison">Poison</option>
              <option value="Electric">Electric</option>
              <option value="Ground">Ground</option>
              <option value="Psychic">Psychic</option>
              <option value="Fighting">Fighting</option>
              <option value="Rock">Rock</option>
              <option value="Ghost">Ghost</option>
              <option value="Ice">Ice</option>
              <option value="Dragon">Dragon</option>
              <option value="Steel">Steel</option>
              <option value="Dark">Dark</option>
              <option value="Fairy">Fairy</option>
            </select>
          </label>
          <button type="submit">Send your request</button>
        </form>
      </div>
    </div>
  );
}

export default Submit;
