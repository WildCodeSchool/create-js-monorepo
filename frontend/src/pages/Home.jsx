// eslint-disable-next-line import/order, no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import FormModal from "../components/FormModal";

export default function Home() {
  const [modalFormOpen, setModalFormOpen] = useState(false);
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
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setModalFormOpen(true);
          setSelectedSystemId(null);
          setSelectedBrand(null);
          setSelectedModel(null);
          setSelectedVersionSystem("");
          setSelectedRam("");
          setSelectedMemory("");
          setScreenSize("");
          setSelectedNetwork("");
          setSelectedConditionning("");
          setPriceRefecence("");
        }}
      >
        Open
      </button>
      <FormModal
        modalFormOpen={modalFormOpen}
        setModalFormOpen={setModalFormOpen}
        setSelectedValues={setSelectedValues}
        selectedSystemId={selectedSystemId}
        selectedBrand={selectedBrand}
        selectedModel={selectedModel}
        selectedVersionSystem={selectedVersionSystem}
        selectedRam={selectedRam}
        selectedMemory={selectedMemory}
        screenSize={screenSize}
        selectedNetwork={selectedNetwork}
        selectedConditionning={selectedConditionning}
        priceRefecence={priceRefecence}
        setSelectedSystemId={setSelectedSystemId}
        setSelectedBrand={setSelectedBrand}
        setSelectedModel={setSelectedModel}
        setSelectedVersionSystem={setSelectedVersionSystem}
        setSelectedRam={setSelectedRam}
        setSelectedMemory={setSelectedMemory}
        setScreenSize={setScreenSize}
        setSelectedNetwork={setSelectedNetwork}
        setSelectedConditionning={setSelectedConditionning}
        setPriceRefecence={setPriceRefecence}
      />
    </>
  );
}
