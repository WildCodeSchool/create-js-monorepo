import React from "react";
import PropTypes from "prop-types";

function BurgerMenu({ burgerOpen }) {
  return (
    <div
      className={`transition-container  relative transition-transform duration-500 my-[65px] ${
        burgerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className={`w-[90vw] shadow-md drop-shadow-sm rounded-lg flex flex-col items-center mx-auto my-[8px]font-bold text-xl px-[20px] py-[10px] justify-between gap-4 mt-[24px] ${
          burgerOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <p>Hello</p>
        <p>World</p>
        <p>!!!</p>
      </div>
    </div>
  );
}

BurgerMenu.propTypes = {
  burgerOpen: PropTypes.bool.isRequired,
};

export default BurgerMenu;
