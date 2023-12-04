import React from "react";
import { NavLink } from "react-router-dom";

import Seye from "../assets/seye.gif";

import "../style/About.css";

function About() {
  return (
    <div>
      <div className="about-body">
        <NavLink to="https://github.com/ThibaudDps">
          {" "}
          <img className="seye" src={Seye} alt="seye" />
        </NavLink>

        <h1 className="h1-about">Hey, I'm Thibaud !</h1>
        <p className="p-about">
          I'm a Pkmn trainer since 95' and a Full Stack Developer since 23'
        </p>
      </div>
    </div>
  );
}

export default About;
