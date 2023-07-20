import React from "react";
import myImage from "../assets/moi.jpg"; // Assurez-vous que le chemin est correct

function Presentation() {
  return (
    <div className="presentation">
      <div className="description">
        <h1>Alexandre Pompidou</h1>
        <h3> DEVELOPPEUR WEB JUNIOR</h3>
        <p>
          {" "}
          {/* Passionné par l'informatique, je me suis reconverti dans le
          développement web. Extrêmement motivé pour développer constamment mes
          compétences et évoluer professionnellement. Je suis à la recherche
          d'un stage de 4 mois afin d'appliquer mes compétences et gagner de
          l'expérience. Doté de bonnes capacités en communication et en travail
          d'équipe, je m'adapte facilement à toutes les situations. */}
        </p>
      </div>
      <img src={myImage} alt="moi" className="profil-photos" />
    </div>
  );
}

export default Presentation;
