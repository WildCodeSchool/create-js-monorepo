import React from "react";

import logomon from "../assets/logomon.svg";

import CardPkmn from "../components/CardPkmn";
import "../App.css";

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logomon} className="home-logo" alt="logo" />
        <p>Poképedia v.1</p>
      </header>
      <CardPkmn />
    </div>
  );
}

export default Home;
