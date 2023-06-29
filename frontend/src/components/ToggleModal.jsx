import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ToggleButton from "./ToggleButton";
import logo from "../assets/Logo_1.png";
import cross from "../assets/cross.png";

const customStyles = {
  // content: {
  //   top: "45%",
  //   left: "50%",
  //   right: "auto",
  //   bottom: "auto",
  //   marginRight: "-50%",
  //   transform: "translate(-50%, -50%)",
  //   width: "80%",
  //   backgroundColor: "#002743",
  //   padding: "0",
  //   display: "flex",
  // },
};

const ToggleModal = ({ isOpen, closeModalToggle }) => {
  const [toggleStates, setToggleStates] = useState({
    os: false,
    ram: false,
    memory: false,
    screen: false,
    network: false,
    charger: false,
  });

  const [hasFeature, setHasFeature] = useState({
    hasOs: false,
    hasRam: false,
    hasMemory: false,
    hasScreen: false,
    hasNetwork: false,
    hasCharger: false,
  });

  const [showMessages, setShowMessages] = useState(false);

  const handleToggleChange = (key) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
    setHasFeature((prevState) => ({
      ...prevState,
      [`has${key.charAt(0).toUpperCase()}${key.slice(1)}`]:
        !prevState[`has${key.charAt(0).toUpperCase()}${key.slice(1)}`],
    }));
  };
  function handleButtonClick() {
    setShowMessages(true);
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModalToggle}
      // style={customStyles}
      className=" w-[95%] border-2 border-solid border-blue-950 xl:border-none xl:p-0 h-fit xl:custom-bg2-color xl:w-[80%] rounded-2xl fixed top-[45%] xl:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex"
      contentLabel="Modal"
    >
      <div className="hidden xl:mr-auto xl:w-[25%] xl:flex xl:flex-col xl:justify-between xl:p-5">
        <h1 className="text-white text-center">LA DIV A GAUCHE</h1>
        <img src={logo} alt="logo" className="w-[10dvw] block ml-auto" />
      </div>
      <div className="w-full p-5 xl:h-full bg-img-mob xl:bg-img xl:text-blue-950   xl:w-[75%] xl:ml-auto">
        <button
          className="custom-bg2-color hover:bg-blue-700 p-1 mb-4 ml-auto block rounded"
          onClick={closeModalToggle}
        >
          <img src={cross} alt="" className="xl:w-5 w-3" />
        </button>
        <div className="custom-bg-color xl:w-[70%] w-[95%] mx-auto mb-12 p-5 flex flex-col justify-between gap-5">
          <ToggleButton
            label="La dernière mise à jour est-elle supérieur à Android 8 ou iOS 7?"
            id="Os"
            isChecked={toggleStates.os}
            hasFeature={hasFeature}
            showMessages={showMessages}
            handleToggleChange={() => handleToggleChange("os")}
          />

          <ToggleButton
            label="Possède t-il 4gb de ram ou plus ?"
            id="Ram"
            isChecked={toggleStates.ram}
            hasFeature={hasFeature}
            showMessages={showMessages}
            handleToggleChange={() => handleToggleChange("ram")}
          />

          <ToggleButton
            label="Possède t-il une capacité de stockage de 32gb ou plus ?"
            id="Mémoire"
            isChecked={toggleStates.memory}
            hasFeature={hasFeature}
            showMessages={showMessages}
            handleToggleChange={() => handleToggleChange("memory")}
          />

          <ToggleButton
            label="Possède t-il une taille d'écran de 4 pouces ou plus ?"
            id="Ecran"
            isChecked={toggleStates.screen}
            hasFeature={hasFeature}
            showMessages={showMessages}
            handleToggleChange={() => handleToggleChange("screen")}
          />

          <ToggleButton
            label="Est-il connectable au réseau 4g ou plus "
            id="Réseau"
            isChecked={toggleStates.network}
            hasFeature={hasFeature}
            handleToggleChange={() => handleToggleChange("network")}
          />

          <ToggleButton
            label="Possèdez-vous le chargeur et le câble ? "
            id="Chargeur"
            isChecked={toggleStates.charger}
            hasFeature={hasFeature}
            showMessages={showMessages}
            handleToggleChange={() => handleToggleChange("charger")}
          />
        </div>
        <button
          className="custom-bg2-color  hover:bg-blue-700 block mx-auto text-white font-bold p-5 mt-12 xl:w-[30%] w-[70%] rounded-lg"
          type="button"
          onClick={handleButtonClick}
        >
          J'estime mon téléphone !
        </button>
      </div>
    </Modal>
  );
};

export default ToggleModal;
