import React from "react";
import PropTypes from "prop-types";

function UploadCSV({ csvUrl, setCsvUrl }) {
  const handleDataBaseUpload = (url) => {
    // eslint-disable-next-line no-restricted-syntax
    console.log(url);
  };
  return (
    <div className="md:ml-[20%] mx-auto">
      <div>
        <h1>Enrichissez votre base de données</h1>
        <p>
          1. Rendez-vous sur le lien suivant :{" "}
          <a
            href="https://docs.google.com/spreadsheets/d/1f3ATnddcekf3OuJkntZyLNDpdGF0ya-b/edit#gid=1244544131"
            target="_blank"
            rel="noreferrer"
          >
            Cliquez ici
          </a>
        </p>
        <p>2. Cliquez sur "Fichier" {">"} "Créer une copie"</p>
        <p>
          3. Renseignez les valeurs des smartphones que vous souhaitez ajouter à
          votre base de données en remplissant soigneusement tous les champs.
        </p>
        <p>4. Cliquez sur "Fichier" {">"} "Créer une copie" </p>
        <p>
          5. Sélectionnez "Document Entier" et "Valeurs séparées par des
          virgules (.csv)" puis cliquez sur "Publier"{" "}
        </p>
        <p>
          6. Copiez le lien ainsi obtenu, collez-le dans l'input ci-dessous et
          cliquez sur "Valider":
        </p>
        <div>
          <input
            type="text"
            value={csvUrl}
            onChange={(e) => setCsvUrl(e.target.value)}
          />
          <button type="button" onClick={() => handleDataBaseUpload(csvUrl)}>
            Valider
          </button>
        </div>
      </div>
    </div>
  );
}

UploadCSV.propTypes = {
  csvUrl: PropTypes.string.isRequired,
  setCsvUrl: PropTypes.func.isRequired,
};

export default UploadCSV;
