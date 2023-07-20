import React, { useState, useEffect } from "react";

function Projet() {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    const fetchProjet = () => {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/projet`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Une erreur s'est produite lors de la récupération des projets"
            );
          }
          return response.json();
        })
        .then((data) => {
          setProjets(data);
        })
        .catch((error) => {
          console.error("Une erreur s'est produite:", error);
        });
    };

    fetchProjet();
  }, []);

  return (
    <div className="projet">
      <h2>Liste des projets :</h2>
      <ul>
        {projets.map((projet) => (
          <li key={projet.Id}>
            <h3>{projet.name}</h3>
            <p>{projet.text}</p>
            <a href={projet.url}>Voir le projet</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projet;
