import React from "react";
import logo from "../../assets/formulaire.jpg";
import "./Inscription.css";

function Inscription() {
  return (
    <div>
      <img className="concept_img" src={logo} alt="L'Oréal" />
      <div className="Inscription">
        <form className="Inscriptionform">
          <input
            className="classinput"
            type="text"
            name="text"
            placeholder="NOM"
            required
          />
          <input
            className="classinput"
            type="text"
            name="text"
            placeholder="PRENOM"
            required
          />
          <input
            className="classinput"
            type="text"
            name="text"
            placeholder="AGE"
            required
          />
          <input
            className="classinput"
            type="text"
            name="text"
            placeholder="MAIL"
            required
          />
          <input
            className="classinput"
            type="text"
            name="text"
            placeholder="REGION"
            required
          />
          <input
            className="classinput"
            type="text"
            name="text"
            placeholder="ADRESSE SALON"
            required
          />
          <input
            className="classinput"
            type="text"
            name="text"
            placeholder="MOTS DE PASSE"
            required
          />
          <input
            className="classinput"
            type="text"
            name="text"
            placeholder="CONFIRMATION MOTS DE PASSE"
            required
          />
          <input
            className="classtextarea"
            type="text"
            name="textarea"
            placeholder="TA PHOTOGRAPHIE"
            required
          />
          <button type="submit" className="classbut">
            ENVOYER
          </button>
        </form>
      </div>
    </div>
  );
}

export default Inscription;
