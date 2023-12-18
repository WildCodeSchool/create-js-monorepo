import React from "react";

import logomon from "../../assets/logomon.svg";

import "../../App.css";

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logomon} className="home-logo" alt="logo" />
        <p>Pokepedia v.1</p>
      </header>
    </div>
  );
}

export default Home;
