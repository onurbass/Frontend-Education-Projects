import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PermissionProvider } from "./context/Permission";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PermissionProvider>
    <App />
  </PermissionProvider>
);

reportWebVitals();
