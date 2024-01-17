import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Candidats from "./pages/Candidats";
import Histoire from "./pages/Histoire";
import Concept from "./pages/Concept";
import Votes from "./pages/Votes";
import Login from "./pages/Login";
import PageInscription from "./pages/PageInscription";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
        path: "",
        element: <Login />,
      },
      {
        path: "/signin",
        element: <PageInscription />,
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
