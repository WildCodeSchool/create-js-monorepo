import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page404 from "./pages/Page404";
import App from "./App";
import Home from "./pages/Home";
import Avatar from "./pages/Avatar";
import Scene from "./pages/Scene";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/avatar",
        element: <Avatar />,
      },
      {
        path: "/scene",
        element: <Scene />,
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
