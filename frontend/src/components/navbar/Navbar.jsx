import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img className="nav_logo" src={logo} alt="L'Oréal" />
      <div className="nav_link">
        <Link to="/">
          <p className="nav_p">Home </p>
        </Link>
        <Link to="/histoire">
          <p className="nav_p">Histoire </p>
        </Link>
        <Link to="/concept">
          <p className="nav_p">Concept </p>
        </Link>
        <Link to="/candidats">
          <p className="nav_p">Candidats </p>
        </Link>
        <Link to="/votes">
          <p className="nav_p">Votant </p>
        </Link>
        <Link to="/login">
          <p className="nav_p">Login </p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
