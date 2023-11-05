import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Router/Routes.jsx";
import Mainlayout from "./Layout/Mainlayout.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}>
        <Mainlayout></Mainlayout>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
