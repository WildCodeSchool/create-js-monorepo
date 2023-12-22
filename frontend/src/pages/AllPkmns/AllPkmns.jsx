import React from "react";
import { useLoaderData } from "react-router-dom";

import CardPkmn from "../../components/CardPkmn/CardPkmn";

import "../../components/CardPkmn/CardPkmn.css";
import "./AllPkmns.css";
import FilterByNav from "../../components/Filters/FilterByNav";

function AllPkmns() {
  const allPokemons = useLoaderData();

  return (
    <div className="">
      <FilterByNav />
      <div className="container">
        {allPokemons.map((pokemon) => (
          <CardPkmn key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default AllPkmns;
