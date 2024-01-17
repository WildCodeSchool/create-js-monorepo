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
import CardsAll from "./pages/CardsAll/CardsAll";
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
  {
    path: "/candidats",
    element: <CardsAll />,
    loader: () => {
      return connexion
        .get("/Candidats")
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
