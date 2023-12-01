import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import axios from "axios";

import App from "./App";
import Home from "./pages/Home";
import AllPkmns from "./pages/AllPkmns";
import PkmnPage from "./pages/PkmnPage";
import About from "./pages/About";

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
        path: "/pokemons",
        element: <AllPkmns />,
        loader: ({ request }) => {
          const query = new URL(request.url).search;

          return axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/api/pokemons${query}`)
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },
      {
        path: "/pokemons/:pokemonId",
        element: <PkmnPage />,
        loader: ({ params }) => {
          return axios
            .get(
              `${import.meta.env.VITE_BACKEND_URL}/api/pokemons/${
                params.pokemonId
              }`
            )
            .then((res) => res.data)
            .catch((err) => console.error(err));
        },
      },

      {
        path: "/about",
        element: <About />,
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
