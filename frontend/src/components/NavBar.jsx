import React from "react";
import Logo from "../assets/logo.png";
import addSymbol from "../assets/add_symbol.png";
import interrogation from "../assets/interrogation.png";

function NavBar() {
  return (
    <div className="nav flex items-center flex-col justify-between fixed top-0 left-0 w-1/5 h-screen bg-[#002743]">
      <img src={Logo} alt="logo" />
      <div className="navbar-buttons">
        <button type="button" className="flex items-center justify-between">
          <img src={addSymbol} alt="symbole plus" />
          <p>Estimer un smartphone</p>
        </button>
        <button type="button">
          <img src={addSymbol} alt="symbole plus" />
          <p>Ajouter des références</p>
        </button>
      </div>
      <div>
        <button type="button">
          <img src={interrogation} alt="symbole plus" />
          <p>FAQ</p>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
