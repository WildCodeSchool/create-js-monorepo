import React from "react";
import { Link } from "react-router-dom";

import Histoire from "../../pages/Histoire";
import Concept from "../../pages/Concept";
import Votes from "../../pages/Votes";
import Candidats from "../../pages/Candidats";
import Login from "../../pages/Login";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/histoire">
        <Histoire />{" "}
      </Link>
      <Link to="/concept">
        <Concept />{" "}
      </Link>
      <Link to="/votes">
        <Votes />{" "}
      </Link>
      <Link to="/candidats">
        <Candidats />{" "}
      </Link>
      <Link to="/login">
        <Login />{" "}
      </Link>
    </div>
  );
}

export default Navbar;
