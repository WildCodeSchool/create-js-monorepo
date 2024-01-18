import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page404 from "./pages/Page404";
import App from "./App";
import Home from "./pages/Home";
import Avatar from "./pages/Avatar";
import AvatarImage from "./pages/AvatarImage";

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
        path: "/avatarImage",
        element: <AvatarImage />,
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
