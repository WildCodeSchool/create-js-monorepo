import React, { useState } from "react";
import LoginModal from "../components/LoginModal"; // Add missing import statement
import Logo from "../assets/loreal_logo.svg";
import "./Home.scss";
import "../commons.scss";
import Voucher from "../components/Voucher";

function Home() {
  const [showAvatar, setShowAvatar] = useState(false);
  const [modalKey, setModalKey] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const openLoginModal = () => {
    setShowAvatar(true);
    setModalKey((prevKey) => prevKey + 1);
  };

  const openPopup = () => {
    setPopupMessage(<Voucher />); // Modifier le message selon vos besoins
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="home-container">
      <img src={Logo} alt="Logo Loreal" className="logo-loreal" />
      <h2 className="main-title">L'ORÉAL AVATAR</h2>
      <input
        type="button"
        value="Créer un compte"
        onClick={openLoginModal}
        className="button-center"
      />
      <input
        type="button"
        value="Afficher Popup"
        onClick={openPopup}
        className="button-center"
      />
      {showAvatar && <LoginModal key={modalKey} />}
      {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
          <button type="button" onClick={closePopup}>
            Fermer
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
