import React from "react";
import "../styles/HomePage.scss";
import Lottie from "react-lottie-player";
import animationData from "../assets/25889-phone-flow-3d.json";

function HomePage() {
  return (
    <div className="home-page-container">
      <h1>Commencer l'estimation du prix des téléphones</h1>
      <button type="button">Commencer l'estimation</button>
      <button type="button">Ajouter des références</button>
      <Lottie
        animationData={animationData}
        play
        loop
        style={{ width: 500, height: 500 }}
      />
    </div>
  );
}

export default HomePage;
