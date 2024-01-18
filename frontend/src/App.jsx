import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
