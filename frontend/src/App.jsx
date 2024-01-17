import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Header />
    </div>
  );
}

export default App;
