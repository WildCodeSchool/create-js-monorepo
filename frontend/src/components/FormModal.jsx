import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactModal from "react-modal";

// eslint-disable-next-line react/prop-types
function FormModal({ isOpen, setModalOpen }) {
  const customModalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
  };
  const [smartphone, setSmartphone] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allBrands, setAllBrands] = useState([]);

  const [selectedSystemId, setSelectedSystemId] = useState(null);

  const [selectedBrand, setSelectedBrand] = useState(null);

  const [selectedModel, setSelectedModel] = useState(null);

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(true);

  const [tailleEcran, setTailleEcran] = useState("");

  // const [selectedValues, setSelectedValues] = useState({
  //   brand: null,
  //   model: null,
  //   system_id: null,
  //   version_system: null,
  //   ram: "",
  //   memory: "",
  //   screen_size: "",
  //   network: "",
  //   conditionning: "",
  //   price_reference: "",
  // });

  useEffect(() => {
    axios
      .get("http://localhost:8000/smartphone")
      .then((res) => {
        setSmartphone(res.data);
        setIsLoaded(true);
        setAllBrands([...new Set(res.data.map((item) => item.brand))]);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [isCheckboxChecked]);

  useEffect(() => {
    if (selectedSystemId !== null) {
      axios
        .get(`http://localhost:8000/smartphone?system_id=${selectedSystemId}`)
        .then((res) => {
          setSmartphone(res.data);
          setAllBrands([...new Set(res.data.map((item) => item.brand))]);
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
  }, [selectedSystemId, smartphone]);

  const handleSystemChange = (event) => {
    const systemId = parseInt(event.target.value, 10);
    if (selectedSystemId === systemId) {
      setSelectedSystemId(null);
      setIsCheckboxChecked(true);
    } else {
      setSelectedSystemId(systemId);
      setSelectedBrand(null);
      setSelectedModel(null);
      setIsCheckboxChecked(false);
    }
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setSelectedModel(null);
  };

  const filteredModels = smartphone
    .filter((item) => (selectedBrand ? item.brand === selectedBrand : true))
    .map((item) => item.model);

  const handleInputChange = (event) => {
    setTailleEcran(event.target.value);
  };

  const [selectedRam, setSelectedRam] = useState("");

  const handleRamSelect = (ram) => {
    setSelectedRam(ram);
  };

  const [selectedMemoire, setSelectedMemoire] = useState("");

  const handleMemoireSelect = (memoire) => {
    setSelectedMemoire(memoire);
  };

  const [selectedReseau, setSelectedReseau] = useState("");

  const handleReseauSelect = (reseau) => {
    setSelectedReseau(reseau);
  };

  const [selectedEtat, setSelectedEtat] = useState("");

  const handleEtatSelect = (etat) => {
    setSelectedEtat(etat);
  };

  const [prixReference, setPrixReference] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handlePrixReferenceChange = (event) => {
    setPrixReference(event.target.value);
  };

  const handleInfoIconHover = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const content = () => {
    return (
      <div>
        {isLoaded && (
          <div>
            <div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    id="Android"
                    name="Android"
                    value="2"
                    onChange={handleSystemChange}
                    checked={selectedSystemId === 2}
                  />
                  Android
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    id="Apple"
                    name="Apple"
                    value="1"
                    onChange={handleSystemChange}
                    checked={selectedSystemId === 1}
                  />
                  Apple
                </label>
              </div>
            </div>
            <div>
              <div>
                <select
                  name="brand"
                  id="brand-select"
                  onChange={handleBrandChange}
                  value={selectedBrand || ""}
                >
                  <option value="">Select a brand</option>
                  {allBrands.map((uniqueBrand) => (
                    <option key={uniqueBrand} value={uniqueBrand}>
                      {uniqueBrand}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  name="model"
                  id="model-select"
                  value={selectedModel || ""}
                  onChange={(event) => setSelectedModel(event.target.value)}
                >
                  <option value="">Select a model</option>
                  {filteredModels.map((uniqueModel) => (
                    <option key={uniqueModel} value={uniqueModel}>
                      {uniqueModel}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>
                  Taille de l'écran (en pouces):
                  <input
                    name="screen_size"
                    type="number"
                    value={tailleEcran}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Sélectionnez la quantité de RAM :
                </h3>
                <div className="flex space-x-2">
                  <button
                    name="ram"
                    type="button"
                    className={`${
                      selectedRam === "2" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleRamSelect("2")}
                  >
                    2 Go
                  </button>
                  <button
                    name="ram"
                    type="button"
                    className={`${
                      selectedRam === "3" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleRamSelect("3")}
                  >
                    3 Go
                  </button>
                  <button
                    name="ram"
                    type="button"
                    className={`${
                      selectedRam === "4" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleRamSelect("4")}
                  >
                    4 Go
                  </button>
                  <button
                    name="ram"
                    type="button"
                    className={`${
                      selectedRam === "6" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleRamSelect("6")}
                  >
                    6 Go
                  </button>
                  <button
                    name="ram"
                    type="button"
                    className={`${
                      selectedRam === "8" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleRamSelect("8")}
                  >
                    8 Go
                  </button>
                  <button
                    name="ram"
                    type="button"
                    className={`${
                      selectedRam === "12" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleRamSelect("12")}
                  >
                    12 Go
                  </button>
                  <button
                    name="ram"
                    type="button"
                    className={`${
                      selectedRam === "16" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleRamSelect("16")}
                  >
                    16 Go
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Sélectionnez la quantité de mémoire :
                </h3>
                <div className="flex space-x-2">
                  <button
                    name="memory"
                    type="button"
                    className={`${
                      selectedMemoire === "16" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleMemoireSelect("16")}
                  >
                    16 Go
                  </button>
                  <button
                    name="memory"
                    type="button"
                    className={`${
                      selectedMemoire === "32" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleMemoireSelect("32")}
                  >
                    32 Go
                  </button>
                  <button
                    name="memory"
                    type="button"
                    className={`${
                      selectedMemoire === "64" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleMemoireSelect("64")}
                  >
                    64 Go
                  </button>
                  <button
                    name="memory"
                    type="button"
                    className={`${
                      selectedMemoire === "128" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleMemoireSelect("128")}
                  >
                    128 Go
                  </button>
                  <button
                    name="memory"
                    type="button"
                    className={`${
                      selectedMemoire === "256" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleMemoireSelect("256")}
                  >
                    256 Go
                  </button>
                  <button
                    name="memory"
                    type="button"
                    className={`${
                      selectedMemoire === "512" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleMemoireSelect("512")}
                  >
                    512 Go
                  </button>
                  <button
                    name="memory"
                    type="button"
                    className={`${
                      selectedMemoire === "1To" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleMemoireSelect("1To")}
                  >
                    1 To
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  Sélectionnez le type de réseau :
                </h3>
                <div className="flex space-x-2">
                  <button
                    name="network"
                    type="button"
                    className={`${
                      selectedReseau === "4G" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleReseauSelect("4G")}
                  >
                    4G
                  </button>
                  <button
                    name="network"
                    type="button"
                    className={`${
                      selectedReseau === "4G+" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleReseauSelect("4G+")}
                  >
                    4G+
                  </button>
                  <button
                    name="network"
                    type="button"
                    className={`${
                      selectedReseau === "5G" ? "bg-blue-500" : "bg-gray-300"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleReseauSelect("5G")}
                  >
                    5G
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">
                Sélectionnez l'état de l'appareil :
              </h3>
              <div className="flex space-x-2">
                <button
                  name="conditionning"
                  type="button"
                  className={`${
                    selectedEtat === "-100%" ? "bg-blue-500" : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => handleEtatSelect("-100%")}
                >
                  DEEE
                </button>
                <button
                  name="conditionning"
                  type="button"
                  className={`${
                    selectedEtat === "-50%" ? "bg-blue-500" : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => handleEtatSelect("-50%")}
                >
                  Réparable
                </button>
                <button
                  name="conditionning"
                  type="button"
                  className={`${
                    selectedEtat === "-10%" ? "bg-blue-500" : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => handleEtatSelect("-10%")}
                >
                  Bloqué
                </button>
                <button
                  name="conditionning"
                  type="button"
                  className={`${
                    selectedEtat === "-5%" ? "bg-blue-500" : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => handleEtatSelect("-5%")}
                >
                  Reconditionnable
                </button>
                <button
                  name="conditionning"
                  type="button"
                  className={`${
                    selectedEtat === "0%" ? "bg-blue-500" : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => handleEtatSelect("0%")}
                >
                  Reconditionné
                </button>
                <button
                  name="conditionning"
                  type="button"
                  className={`${
                    selectedEtat === "5%" ? "bg-blue-500" : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => handleEtatSelect("5%")}
                >
                  Bon
                </button>
                <button
                  name="conditionning"
                  type="button"
                  className={`${
                    selectedEtat === "10%" ? "bg-blue-500" : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => handleEtatSelect("10%")}
                >
                  Parfait
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-bold">Prix de référence</h3>
                <div className="ml-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-gray-500 cursor-pointer"
                    onMouseEnter={handleInfoIconHover}
                    onMouseLeave={handleCloseModal}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="8" />
                  </svg>
                  {showModal && (
                    <div className="ml-2 bg-white bg-opacity-90 shadow rounded">
                      <p>Vous devez récupérer le prix de référence sur...</p>
                    </div>
                  )}
                </div>
              </div>
              <input
                name="price-reference"
                type="number"
                className="border border-gray-300 rounded px-4 py-2 w-48"
                value={prixReference}
                onChange={handlePrixReferenceChange}
              />
              {/* {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
                  <div className="bg-white p-4 rounded">
                    <p>Vous devez récupérer le prix de référence sur...</p>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => {
        setModalOpen(false);
      }}
      style={customModalStyles}
      ariaHideApp={false}
      className="h-fit lg:h-[610px] min-h-[30vh] sm:min-h-[50vh] max-h-[80vh] lg:max-h-[70vh] w-[60vw] lg:w-[50vw] min-w-[45vw] lg:min-w-[600px] max-w-[90vw] md:max-w-[40vw] lg:max-w-[30vw] border-none rounded-2xl p-5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white flex"
    >
      {content()}
    </ReactModal>
  );
}

export default FormModal;
