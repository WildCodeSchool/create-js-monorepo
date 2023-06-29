import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/user/Home";
import Brand from "./pages/user/Brand";
import Storage from "./pages/user/Storage";
import Memory from "./pages/user/Memory";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/memory" element={<Memory />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
