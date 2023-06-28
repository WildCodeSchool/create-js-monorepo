import Home from "./pages/Home";
import FormModal from "./components/FormModal";
// eslint-disable-next-line import/order, no-unused-vars
import React, { useState, useRef, useEffect } from "react";

import "./reset.css";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <Home />
      <button type="button" onClick={() => setModalOpen(true)}>
        Open
      </button>
      <FormModal isOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default App;
