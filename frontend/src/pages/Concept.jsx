import { Outlet } from "react-router-dom";
import React from "react";
import Concepts from "../components/concept/Concepts";

function Concept() {
  return (
    <div>
      <Concepts />
      <Outlet />
    </div>
  );
}

export default Concept;
