import React from "react";

import "./Inscription.css";

function Inscription() {
  return (
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
  );
}

export default Inscription;
