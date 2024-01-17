import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Candidats from "./pages/Candidats";
import Histoire from "./pages/Histoire";
import Concept from "./pages/Concept";
import Votes from "./pages/Votes";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/histoire",
        element: <Histoire />,
      },
      {
        path: "/concept",
        element: <Concept />,
      },
      {
        path: "/candidats",
        element: <Candidats />,
      },
      {
        path: "/votes",
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
