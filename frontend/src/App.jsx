import { Outlet } from "react-router-dom";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

import "../index.css";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
