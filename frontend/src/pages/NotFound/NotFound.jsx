import React from "react";
import { NavLink } from "react-router-dom";

import notFound from "../../assets/notFound.gif";

import "./NotFound.css";

function NotFound() {
  return (
    <div className="nf-body">
      <h1 className="h1-404">The pokemon got away!</h1>{" "}
      <NavLink to="/" className="h3-link">
        <h3>Try again</h3>
      </NavLink>
      <img className="not-found" src={notFound} alt="404" />
    </div>
  );
}

export default NotFound;
