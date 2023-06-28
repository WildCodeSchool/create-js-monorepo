/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import BurgerMenu from "./BurgerMenu";
import Logo from "../assets/logo.png";
import addSymbol from "../assets/add_symbol.png";
import interrogation from "../assets/interrogation.png";

function NavBar() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <>
      <div className="nav flex items-center md:flex-col justify-between fixed top-0 left-0 w-screen md:w-1/5 h-65px md:h-screen text-white bg-[#002743] z-">
        <div className="flex flex-col items-center gap-20 md:w-full">
          <img
            src={Logo}
            alt="logo"
            className="w-[40%] my-[8px] md:w-[30%] md:mt-[56px] "
          />
          <div className="navbar-buttons hidden w-[100%] px-7 md:flex flex-col gap-5 text-lg">
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
        <div className="w-[100%] hidden md:flex flex-col items-center justify-between">
          <button
            type="button"
            className="flex items-center justify-center gap-3 w-[100%] mb-[56px]"
          >
            <img src={interrogation} alt="symbole plus" />
            <p>FAQ</p>
          </button>
        </div>
        <div className="flex md:hidden">
          <Hamburger
            toggled={burgerOpen}
            toggle={() => setBurgerOpen(!burgerOpen)}
          />
        </div>
      </div>
      <BurgerMenu burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
    </>
  );
}

export default NavBar;
