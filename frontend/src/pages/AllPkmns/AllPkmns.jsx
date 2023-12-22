import React from "react";
import { useLoaderData } from "react-router-dom";

import CardPkmn from "../../components/CardPkmn/CardPkmn";
import Filters from "../../components/Filters/Filters";

import "../../components/CardPkmn/CardPkmn.css";
import "./AllPkmns.css";

function AllPkmns() {
  const allPokemons = useLoaderData();

  return (
    <div className="">
      <Filters />
      <div className="container">
        {allPokemons.map((pokemon) => (
          <CardPkmn key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default AllPkmns;
