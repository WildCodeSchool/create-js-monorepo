import Home from "./pages/Home";
import "./App.css";
import { useState } from "react";
import ToggleModal from "./components/ToggleModal";
import Modal from "react-modal";

Modal.setAppElement("#root");
function App() {
  const [modalToggleIsOpen, setModalToggleIsOpen] = useState(false);
  const openModalToggle = () => {
    setModalToggleIsOpen(true);
  };

  const closeModalToggle = () => {
    setModalToggleIsOpen(false);
  };
  return (
    <div>
      <Home openModalToggle={openModalToggle} />
      <ToggleModal
        isOpen={modalToggleIsOpen}
        closeModalToggle={closeModalToggle}
      />
      ;
    </div>
  );
}

export default App;
