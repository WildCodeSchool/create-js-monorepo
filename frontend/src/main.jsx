import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Candidats from "./pages/Candidats";
import Histoire from "./pages/Histoire";
import Concept from "./pages/Concept";
import Votes from "./pages/Votes";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Histoire />,
      },
      {
        path: "",
        element: <Concept />,
      },
      {
        path: "",
        element: <Candidats />,
      },
      {
        path: "",
        element: <Votes />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
