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

const featureKeyMapping = {
  Os: "hasOs",
  Ram: "hasRam",
  Mémoire: "hasMemory",
  Ecran: "hasScreen",
  Réseau: "hasNetwork",
  Chargeur: "hasCharger",
};

const ToggleButton = ({
  label,
  isChecked,
  handleToggleChange,
  hasFeature,
  id,
  showMessages,
}) => {
  const imageSrc = getImageByLabel(id);
  const featureKey = featureKeyMapping[id];
  const message = getMessageByFeature(featureKey);

  function getMessageByFeature(feature) {
    switch (feature) {
      case "hasOs":
        return "Le téléphone doit avoir une version d'Android supérieure à 8 ou une version d'iOS supérieure à 7 !";
      case "hasRam":
        return "Le téléphone doit avoir au moins 4 Go de RAM !";
      case "hasMemory":
        return "Le téléphone doit avoir une capacité de stockage d'au moins 32 Go !";
      case "hasScreen":
        return "Le téléphone doit avoir un écran d'au moins 4 pouces !";
      case "hasNetwork":
        return "Le téléphone doit être compatible avec le réseau 4G ou supérieur !";
      case "hasCharger":
        return "Assurez-vous de posséder le chargeur et le câble correspondants !";
      default:
        return null;
    }
  }

  const handleClick = () => {
    handleToggleChange(id); // Appeler la fonction de basculement avec l'ID correspondant
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
      {showMessages && !hasFeature[featureKey] && (
        <div className="w-full ">
          <p className="text-red-500 text-center text-xs xl:text-base">
            {message}
          </p>
        </div>
      )}
    </section>
  );
};

export default ToggleButton;
