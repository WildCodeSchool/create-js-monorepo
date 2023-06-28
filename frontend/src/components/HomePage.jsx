import React from "react";
import "../styles/HomePage.scss";

function HomePage() {
  return (
    <div className="home-page-container">
      <h1>Commencer l'estimation du prix des téléphones</h1>
      <button type="button">Commencer l'estimation</button>
      <button type="button">Ajouter des références</button>
    </div>
  );
}

export default HomePage;
