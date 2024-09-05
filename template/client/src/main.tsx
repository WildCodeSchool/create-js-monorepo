import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import type { Router as RouterType} from "@remix-run/router"

import App from "./App";


const router: RouterType = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const rootElement: HTMLElement | null = document.getElementById("root");

if (rootElement != null) {
  const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
