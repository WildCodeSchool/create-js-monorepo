import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { UserProvider } from "./services/UserContext";

import App from "./App";
import Home from "./pages/Home";
// import Store from "./pages/Store";
// import GameDetails from "./pages/GameDetails";
// import MyGames from "./pages/MyGames";
// import AddGame from "./pages/AddGame";
// import Trades from "./pages/Trades";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Match from "./components/ViewAvaibility/Match";
// import SearchResult from "./components/SearchResult";
// import Settings from "./pages/Settings";
// import Forbidden from "./pages/Forbidden";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
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
