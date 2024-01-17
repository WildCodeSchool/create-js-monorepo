import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import connexion from "./services/connexion";
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
    ],
  },
  {
    path: "/carte",
    // element: <Carte />,
    loader: () => {
      return connexion
        .get("/terminals")
        .then((response) => response.data)
        .catch((err) => console.error(err));
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
