import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Presentation.module.css";
import logo from "../../assets/logo.svg";

function Presentation() {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate("/login");
  };
  return (
    <div className={styles["Presentation-page"]}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.Description}>
        <h1 className={styles.Welcome}>Bienvenue !</h1>
        <p>
          Notre plateforme vous permet de facilement et rapidement estimer la
          valeur des téléphones mobile usagés qui sont donnés à Emaus. Grâce à
          cet outil d'évaluation, vous pouvez obtenir une estimation juste et
          transparente pour chaque téléphone que vous recevez, ce qui vous
          aidera dans vos activités quotidiennes.
        </p>
        <div className={styles.button}>
          <button
            type="button"
            className={styles.buttontext}
            onClick={handleDiscoverClick}
          >
            Découvrir
          </button>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
