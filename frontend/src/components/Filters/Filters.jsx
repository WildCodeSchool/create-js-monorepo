import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Filters.css";

function Filters() {
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();

  const getTypes = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/types`)
      .then((res) => setTypes(res.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTypes();
  }, []);

  const onTypeChange = (value) => {
    let url = "/pokemons";

    if (value !== "") {
      url += `?type=${value}`;
    }

    navigate(url);
  };

  return (
    <div className="filters">
      <select
        className="select-type"
        name="type"
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="">Types</option>
        {types.map((type) => (
          <option key={type.id} value={type.id}>
            {type.type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
