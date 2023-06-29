/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UploadCSV from "./pages/UploadCSV";
import NavBar from "./components/NavBar";
import FormModal from "./components/FormModal";

import "./reset.css";
import "./App.css";

function App() {
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

  const [csvUrl, setCsvUrl] = useState("");
  return (
    <Router>
      <div className="App overflow-hidden">
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
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/upload"
          element={<UploadCSV csvUrl={csvUrl} setCsvUrl={setCsvUrl} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
