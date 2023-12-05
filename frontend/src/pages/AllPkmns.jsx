import React from "react";

import { useLoaderData } from "react-router-dom";
import CardPkmn from "../components/CardPkmn";
import Filters from "../components/Filters";

import "../style/CardPkmn.css";
import "../style/AllPkmns.css";

function AllPkmns() {
  const pokemons = useLoaderData();
  return (
    <div className="">
      <Filters />
      <div className="container">
        {pokemons.map((pokemon) => (
          <CardPkmn pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default AllPkmns;
