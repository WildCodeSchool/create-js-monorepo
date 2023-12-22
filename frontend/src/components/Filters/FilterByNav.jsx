import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import connexion from "../../services/connexion";

import "./FilterByNav.css";

function FilterByNav({ url, query, title, props }) {
  const [filters, setFilters] = useState([]);
  const navigate = useNavigate();

  const getFilters = () => {
    connexion
      .get(`/${query}s`)
      .then((res) => setFilters(res.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getFilters();
  }, []);

  const onFilterChange = (value) => {
    let request = url;

    if (value !== "") {
      request += `?${query}=${value}`;
    }

    navigate(request);
  };

  return (
    <div className="filters">
      <select
        className="select-type"
        name={query}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">{title}</option>
        {filters.map((filter) => (
          <option key={filter.id} value={filter.id}>
            {filter[props]}
          </option>
        ))}
      </select>
    </div>
  );
}

FilterByNav.propTypes = {
  props: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default FilterByNav;
