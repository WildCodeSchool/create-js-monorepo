import React from "react";
import { NavLink } from "react-router-dom";
import favimon from "../../assets/favimon.svg";

import "./Navbar.css";

function NavBar() {
  return (
    <div className="nav">
      <NavLink to="/">
        <img src={favimon} className="nav-logo" alt="pokepedia_logo" />
      </NavLink>
      <nav className="nav-menu">
        <NavLink to="/pokemons">Pokedex</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/submit">Submit</NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
