import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../components/LoginModal"; // Add missing import statement
import Logo from "../assets/loreal_logo.svg";
import "./Home.scss";
import "../commons.scss";

function Home() {
  const [showAvatar, setShowAvatar] = useState(false);
  const [modalKey, setModalKey] = useState(0);

  const openLoginModal = () => {
    setShowAvatar(true);
    setModalKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="home-container">
      <Link to="/" className="logo-loreal">
        <img src={Logo} alt="Logo Loreal" className="logo-loreal" />
      </Link>
      <h2 className="main-title">L'ORÉAL AVATAR</h2>
      <input
        type="button"
        value="Créer un compte"
        onClick={openLoginModal}
        className="button-center"
      />
      {showAvatar && <LoginModal key={modalKey} />}
    </div>
  );
}

export default Home;
