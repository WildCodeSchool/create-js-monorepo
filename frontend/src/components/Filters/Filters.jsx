import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "./Filters.css";

function Filters({ selectedType, onTypeChange }) {
  const [types, setTypes] = React.useState([]);
  const navigate = useNavigate();

  const getTypes = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/types`)
      .then((res) => setTypes(res.data))
      .catch((error) => console.error(error));
  };

  const checkDelimiter = (url) => {
    return url.includes("?") ? "&" : "?";
  };

  React.useEffect(() => {
    getTypes();
  }, []);

  React.useEffect(() => {
    let url = "/pokemons";

    if (selectedType !== "") {
      url += `${checkDelimiter(url)}type=${selectedType}`;
    }

    navigate(url);
  }, [selectedType, navigate]);

  return (
    <div className="filters">
      <select
        className="select-type"
        name="type"
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="">Types</option>
        {types.map((type) => (
          <option key={type.type} value={type.type}>
            {type.type}
          </option>
        ))}
      </select>
    </div>
  );
}

Filters.propTypes = {
  selectedType: PropTypes.string.isRequired,
  onTypeChange: PropTypes.func.isRequired,
};

export default Filters;
