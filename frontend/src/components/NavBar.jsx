import React from "react";
import Logo from "../assets/logo.png";
import addSymbol from "../assets/add_symbol.png";
import interrogation from "../assets/interrogation.png";

function NavBar() {
  return (
    <div className="nav flex items-center flex-col justify-between fixed top-0 left-0 w-1/5 h-screen text-white bg-[#002743]">
      <div className="flex flex-col items-center gap-20 w-full">
        <img src={Logo} alt="logo" className="w-[30%] mt-[56px]" />
        <div className="navbar-buttons w-[100%] px-7 flex flex-col gap-5 text-lg">
          <button
            type="button"
            className="flex items-center align-baseline gap-2 w-[100%] "
          >
            <img src={addSymbol} alt="symbole plus" className="w-[14px]" />
            <p>Estimer un smartphone</p>
          </button>
          <button
            type="button"
            className="flex items-center align-baseline gap-2 w-[100%] "
          >
            <img src={addSymbol} alt="symbole plus" className="w-[14px]" />
            <p>Ajouter des références</p>
          </button>
        </div>
      </div>
      <div className="w-[100%] flex flex-col items-center justify-between">
        <button
          type="button"
          className="flex items-center justify-center gap-3 w-[100%] mb-[56px]"
        >
          <img src={interrogation} alt="symbole plus" />
          <p>FAQ</p>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
