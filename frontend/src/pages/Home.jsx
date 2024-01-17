import React, { useState } from "react";
import LoginModal from "../components/LoginModal";
import Logo from "../assets/loreal_logo.svg";
import "./Home.scss";
import "../commons.scss";

function Home() {
  const [showAvatar, setShowAvatar] = useState(false);

  const openLoginModal = () => {
    setShowAvatar(true);
  };

  return (
    <div className="home-container">
      <img src={Logo} alt="Logo Loreal" className="logo-loreal" />
      <h2 className="main-title">L'OR&#xC9;AL AVATAR</h2>
      <input
        type="button"
        value="Créer un compte"
        onClick={openLoginModal}
        className="button-center"
      />
      {showAvatar && <LoginModal />}
    </div>
  );
}

export default Home;
