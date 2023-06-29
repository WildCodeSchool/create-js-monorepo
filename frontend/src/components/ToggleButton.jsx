/* eslint-disable react/prop-types */
import React from "react";
import Toggle from "react-toggle";
import osLogo from "../assets/ordinateur.png";
import batterieLogo from "../assets/batterie.png";
import ramLogo from "../assets/cpu.png";
import reseauLogo from "../assets/reseau.png";
import stockageLogo from "../assets/stockage.png";
import screenLogo from "../assets/screen.png";

const getImageByLabel = (id) => {
  switch (id) {
    case "Os":
      return osLogo;
    case "Ram":
      return ramLogo;
    case "Mémoire":
      return stockageLogo;
    case "Ecran":
      return screenLogo;
    case "Réseau":
      return reseauLogo;
    case "Chargeur":
      return batterieLogo;
    default:
      return null;
  }
};

function ToggleButton({ label, isChecked, handleToggleChange, id }) {
  const imageSrc = getImageByLabel(id);
  const handleClick = () => {
    handleToggleChange(id);
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        {imageSrc && (
          <img src={imageSrc} alt={`logo pour ${id}`} className="w-[5%] mr-3" />
        )}
        <h2 className="mr-auto block xl:text-base text-sm">{label}</h2>
        <button
          type="button"
          onClick={handleClick}
          className={`${
            isChecked ? "bg-blue-500" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <Toggle checked={isChecked} className="sr-only" />
          <span
            className={`${
              isChecked ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </button>
      </div>
    </section>
  );
}

export default ToggleButton;
