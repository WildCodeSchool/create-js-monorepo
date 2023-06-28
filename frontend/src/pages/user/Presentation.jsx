import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Presentation.module.css";

function Presentation() {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate("/home");
  };
  return (
    <div className={styles["Presentation-page"]}>
      <div className={styles.logo}>
        <img src="./assets/logo.svg" alt="Logo" />
      </div>
      <div className={styles.Description}>
        <h1 className={styles.Welcome}>Welcome</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          consectetur ipsum perferendis ea quibusdam neque a quidem! Saepe
          quidem aperiam rerum molestiae doloremque, voluptate eos nesciunt
          libero, omnis dolorem eaque!
        </p>
      </div>
      <div className={styles.button}>
        <button type="button" onClick={handleDiscoverClick}>
          Discover
        </button>
      </div>
    </div>
  );
}

export default Presentation;
