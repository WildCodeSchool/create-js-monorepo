import React from "react";
import { useLoaderData } from "react-router-dom";
import CardPkmn from "../../components/CardPkmn/CardPkmn";
import Filters from "../../components/Filters/Filters";

import "../../components/CardPkmn/CardPkmn.css";
import "./AllPkmns.css";

function AllPkmns() {
  const allPokemons = useLoaderData();
  const [filteredPokemons, setFilteredPokemons] = React.useState(allPokemons);
  const [selectedType, setSelectedType] = React.useState("");

  const handleTypeChange = (type) => {
    setSelectedType(type);

    if (type === "") {
      setFilteredPokemons(allPokemons);
    } else {
      const filtered = allPokemons.filter((pokemon) => pokemon.type === type);
      setFilteredPokemons(filtered);
    }
  };

  return (
    <div className="">
      <Filters selectedType={selectedType} onTypeChange={handleTypeChange} />
      <div className="container">
        {filteredPokemons.map((pokemon) => (
          <CardPkmn key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default AllPkmns;
