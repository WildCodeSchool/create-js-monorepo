import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import WheelOfbeauty from "./pages/WheelOfBeauty/WheelOfBeauty";
import Signup from "./pages/Signup/Signup";
import Carousel from "./components/Carousel/Carousel";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Signup />,
      },
      {
        path: "/wheel",
        element: <WheelOfbeauty />,
      },
      {
        path: "/carousel",
        element: <Carousel />,
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
