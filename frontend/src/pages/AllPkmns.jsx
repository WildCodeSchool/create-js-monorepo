import React from "react";

import { useLoaderData } from "react-router-dom";
import CardPkmn from "../components/CardPkmn";

import "../style/CardPkmn.css";
import "../style/AllPkmns.css";

function AllPkmns() {
  const pokemons = useLoaderData();
  return (
    <div className="container">
      {pokemons.map((pokemon) => (
        <CardPkmn pokemon={pokemon} />
      ))}
    </div>
  );
}

export default AllPkmns;
