import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WheelProvider } from "./Context/Context";

import App from "./App";
import WheelOfbeauty from "./pages/WheelOfBeauty/WheelOfBeauty";
import Signup from "./pages/Signup/Signup";
import Carousel from "./components/Carousel/Carousel";
import MyAccount from "./pages/myAccount/myAccount";
import FavoriteItems from "./components/FavoriteItems/FavoriteItems";

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
      {
        path: "/account",
        element: <MyAccount />,
      },
      {
        path: "/favorites",
        element: <FavoriteItems />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WheelProvider>
      <RouterProvider router={router} />
    </WheelProvider>
  </React.StrictMode>
);
