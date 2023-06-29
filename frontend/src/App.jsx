import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Presentation from "./pages/user/Presentation";
import Login from "./pages/user/Login";
import Home from "./pages/user/Home";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
