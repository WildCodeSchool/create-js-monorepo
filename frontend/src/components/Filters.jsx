import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Filters.css";

function Filters() {
  const [types, setTypes] = useState([]);
  const [selectedType, setselectedType] = useState("");
  const navigate = useNavigate();

  const gettypes = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/types`)
      .then((res) => setTypes(res.data))
      .catch((error) => console.error(error));
  };

  const checkDelimiter = (url) => {
    return url.includes("?") ? "&" : "?";
  };

  useEffect(() => {
    gettypes();
  }, []);

  useEffect(() => {
    let url = "/pokemons";

    if (selectedType !== "") {
      url += `${checkDelimiter(url)}type=${selectedType}`;
    }

    navigate(url);
  }, [selectedType]);

  return (
    <div className="filters">
      <select
        className="select-type"
        name="type"
        value={selectedType}
        onChange={(e) => setselectedType(e.target.value)}
      >
        <option value="">Types</option>
        {types.map((pokemon) => (
          <option key={pokemon.type} value={pokemon.type}>
            {pokemon.type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
