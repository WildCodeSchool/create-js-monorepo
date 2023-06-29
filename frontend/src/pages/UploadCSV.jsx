/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Papa from "papaparse";

function UploadCSV({ csvUrl, setCsvUrl }) {
  function tableauToJson(tableau) {
    const keys = tableau[0]; // Les clés sont définies par le premier tableau
    const result = [];

    for (let i = 1; i < tableau.length; i++) {
      const values = tableau[i];
      const obj = {};

      for (let j = 0; j < values.length; j++) {
        const key = keys[j];
        let value = values[j];

        // Conversion de certaines valeurs en types appropriés (par exemple, 'system_id' en nombre)
        if (key === "system_id") {
          value = Number(value);
        }

        obj[key] = value;
      }

      result.push(obj);
    }

    return result;
  }
  const handleDataBaseUpload = (url) => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        Papa.parse(data, {
          complete: (parsedData) => {
            const allresults = parsedData.data;
            const resultat = tableauToJson(allresults);
            const results = JSON.stringify(resultat, null, 2);
            axios
              .post(`${import.meta.env.VITE_BACKEND_URL}/smartphone`, results)
              .then(() => {
                setCsvUrl("");
              })
              .catch((error) => {
                console.error("Erreur lors de l'envoi des données :", error);
              });
          },
          error: (err) => {
            console.error("Erreur lors de la lecture du fichier CSV :", err);
          },
        });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données CSV :",
          error
        );
      });
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
