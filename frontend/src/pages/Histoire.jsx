import React from "react";
import backgroundHistoire from "../assets/concept.jpg";

function Histoire() {
  return (
    <div className="Histoire">
      <h3>Les origines de L'Oréal</h3>
      <div>
        <img src={backgroundHistoire} alt="Décore de fond Histoire" />
      </div>
      <div>
        <p>
          L’Oréal est un groupe industriel français de produits cosmétiques. La
          société, créée par Eugène Schueller le 30 juillet 1909, est de nos
          jours devenue le groupe international numéro un mondial de l'industrie
          cosmétique
        </p>
      </div>
    </div>
  );
}

export default Histoire;
