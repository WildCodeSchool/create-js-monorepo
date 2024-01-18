import React from "react";
import logo from "../../assets/concept.jpg";
import "./Concept.css";

function Concepts() {
  return (
    <div className="Concept">
      <img className="concept_img" src={logo} alt="L'Oréal" />
      <h3 className="concept_evmt">Concept de l'évènement</h3>
      <p className="paragraphe">
        <br />
        Tu en as rêvé, deviens la nouvelle égérie de la marque.
        <br />
        Rends toi chez ton coiffeur l’Oréal pour participer avec lui à
        l'aventure. <br /> Relooking, coloration et maquillages sont tes atouts
        pour participer au choix de l’image que la marque recherche pour ses
        futures campagnes publicitaires.
        <br />
        Tu n’es plus qu'à un clic de la consécration et L’Oréal te veut bien.
      </p>
    </div>
  );
}

export default Concepts;
