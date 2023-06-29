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

  const [selectedSystemId, setSelectedSystemId] = useState(null);

  const [selectedBrand, setSelectedBrand] = useState(null);

  const [selectedModel, setSelectedModel] = useState(null);

  const [selectedVersionSystem, setSelectedVersionSystem] = useState("");

  const [selectedRam, setSelectedRam] = useState("");

  const [selectedMemory, setSelectedMemory] = useState("");

  const [screenSize, setScreenSize] = useState("");

  const [selectedNetwork, setSelectedNetwork] = useState("");

  const [selectedConditionning, setSelectedConditionning] = useState("");

  const [priceRefecence, setPriceRefecence] = useState("");

  const [showModal, setShowModal] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [selectedValues, setSelectedValues] = useState({
    brand: null,
    model: null,
    system_id: null,
    version_system: null,
    ram: "",
    memory: "",
    screen_size: "",
    network: "",
    conditionning: "",
    price_reference: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/smartphone")
      .then((res) => {
        setSmartphone(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const handleSystemChange = (event) => {
    const systemId = parseInt(event.target.value, 10);
    if (selectedSystemId === systemId) {
      setSelectedSystemId(null);
    } else {
      setSelectedSystemId(systemId);
      setSelectedBrand(null);
      setSelectedModel(null);
    }
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setSelectedModel(null);
  };

  const filteredBrand = smartphone
    .filter((item) =>
      selectedSystemId ? item.system_id === selectedSystemId : false
    )
    .reduce((uniqueBrands, item) => {
      uniqueBrands.add(item.brand);
      return uniqueBrands;
    }, new Set());

  const uniqueBrandsArray = Array.from(filteredBrand);

  const filteredModels = smartphone
    .filter((item) => (selectedBrand ? item.brand === selectedBrand : false))
    .map((item) => item.model);

  const validation = () => {
    setSelectedValues({
      brand: selectedBrand,
      model: selectedModel,
      system_id: selectedSystemId,
      version_system: selectedVersionSystem,
      ram: selectedRam,
      memory: selectedMemory,
      screen_size: screenSize,
      network: selectedNetwork,
      conditionning: selectedConditionning,
      price_reference: priceRefecence,
    });
  };
  // console.log(selectedValues);

  const content = () => {
    return (
      <div>
        {isLoaded && (
          <div className="flex flex-col items-center w-[100%]">
            <div className="flex justify-between">
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
              <label>
                System Version:
                <input
                  type="text"
                  value={selectedVersionSystem}
                  onChange={(e) => setSelectedVersionSystem(e.target.value)}
                />
              </label>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-between">
                <div>
                  <select
                    name="brand"
                    id="brand-select"
                    onChange={handleBrandChange}
                    value={selectedBrand || ""}
                  >
                    <option value="">Select a brand</option>
                    {uniqueBrandsArray.map((uniqueBrand) => (
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
                      value={screenSize}
                      onChange={(event) => setScreenSize(event.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-col justify-between">
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
                      onClick={() => setSelectedRam("2")}
                    >
                      2 Go
                    </button>
                    <button
                      name="ram"
                      type="button"
                      className={`${
                        selectedRam === "3" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedRam("3")}
                    >
                      3 Go
                    </button>
                    <button
                      name="ram"
                      type="button"
                      className={`${
                        selectedRam === "4" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedRam("4")}
                    >
                      4 Go
                    </button>
                    <button
                      name="ram"
                      type="button"
                      className={`${
                        selectedRam === "6" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedRam("6")}
                    >
                      6 Go
                    </button>
                    <button
                      name="ram"
                      type="button"
                      className={`${
                        selectedRam === "8" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedRam("8")}
                    >
                      8 Go
                    </button>
                    <button
                      name="ram"
                      type="button"
                      className={`${
                        selectedRam === "12" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedRam("12")}
                    >
                      12 Go
                    </button>
                    <button
                      name="ram"
                      type="button"
                      className={`${
                        selectedRam === "16" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedRam("16")}
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
                        selectedMemory === "16" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedMemory("16")}
                    >
                      16 Go
                    </button>
                    <button
                      name="memory"
                      type="button"
                      className={`${
                        selectedMemory === "32" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedMemory("32")}
                    >
                      32 Go
                    </button>
                    <button
                      name="memory"
                      type="button"
                      className={`${
                        selectedMemory === "64" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedMemory("64")}
                    >
                      64 Go
                    </button>
                    <button
                      name="memory"
                      type="button"
                      className={`${
                        selectedMemory === "128" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedMemory("128")}
                    >
                      128 Go
                    </button>
                    <button
                      name="memory"
                      type="button"
                      className={`${
                        selectedMemory === "256" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedMemory("256")}
                    >
                      256 Go
                    </button>
                    <button
                      name="memory"
                      type="button"
                      className={`${
                        selectedMemory === "512" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedMemory("512")}
                    >
                      512 Go
                    </button>
                    <button
                      name="memory"
                      type="button"
                      className={`${
                        selectedMemory === "1To" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedMemory("1To")}
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
                        selectedNetwork === "4G" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedNetwork("4G")}
                    >
                      4G
                    </button>
                    <button
                      name="network"
                      type="button"
                      className={`${
                        selectedNetwork === "4G+"
                          ? "bg-blue-500"
                          : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedNetwork("4G+")}
                    >
                      4G+
                    </button>
                    <button
                      name="network"
                      type="button"
                      className={`${
                        selectedNetwork === "5G" ? "bg-blue-500" : "bg-gray-300"
                      } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                      onClick={() => setSelectedNetwork("5G")}
                    >
                      5G
                    </button>
                  </div>
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
                    selectedConditionning === "-100%"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => setSelectedConditionning("-100%")}
                >
                  DEEE
                </button>
                <button
                  name="conditionning"
                  type="button"
                  className={`${
                    selectedConditionning === "-50%"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => setSelectedConditionning("-50%")}
                >
                  Réparable
                </button>
                <button
                  name="conditionning"
                  type="button"
                  className={`${
                    selectedConditionning === "-10%"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => setSelectedConditionning("-10%")}
                >
                  Bloqué
                </button>
                <button
                  name="conditionning"
                  type="button"
                  className={`${
                    selectedConditionning === "-5%"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => setSelectedConditionning("-5%")}
                >
                  Reconditionnable
                </button>
                <button
                  name="conditionning"
                  type="button"
                  className={`${
                    selectedConditionning === "0%"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => setSelectedConditionning("0%")}
                >
                  Reconditionné
                </button>
                <button
                  name="conditionning"
                  type="button"
                  className={`${
                    selectedConditionning === "5%"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => setSelectedConditionning("5%")}
                >
                  Bon
                </button>
                <button
                  name="conditionning"
                  type="button"
                  className={`${
                    selectedConditionning === "10%"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => setSelectedConditionning("10%")}
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
                    onMouseEnter={() => setShowModal(true)}
                    onMouseLeave={() => setShowModal(false)}
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
                value={priceRefecence}
                onChange={(event) => setPriceRefecence(event.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button type="button" onClick={validation}>
                Valider
              </button>
              <button type="button">Annuler</button>
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
      className="h-fit lg:h-[610px] w-[60vw] lg:w-[50vw] border-none rounded-2xl p-5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-auto bg-white flex"
    >
      {content()}
    </ReactModal>
  );
}

export default FormModal;
