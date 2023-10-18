/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ReactFlowProvider } from "reactflow";
import Graph from "../pages/Graph";

function Router() {
  return (
    <ReactFlowProvider>
      <Routes>
        <Route path="/" element={<Graph />} />
      </Routes>
    </ReactFlowProvider>
  );
}

export default Router;
