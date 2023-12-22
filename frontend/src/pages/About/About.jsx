import React from "react";
import { NavLink } from "react-router-dom";

import Seye from "../../assets/seye.gif";

import "./About.css";

function About() {
  return (
    <div className="about-page">
      {" "}
      <div className="about-desc">
        <div className="about-body">
          <NavLink to="https://github.com/ThibaudDps" target="_blank">
            {" "}
            <img className="seye" src={Seye} alt="seye" />
          </NavLink>

          <h1 className="h1-about">Hey, I'm Thibaud</h1>
          <p className="p-about">I'm a Pkmn trainer since 95'</p>
        </div>
      </div>
    </div>
  );
}

export default About;
