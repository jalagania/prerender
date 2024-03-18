import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import AppProvider from "./context";
import "./index.css";

const APP = (
  <AppProvider>
    <App />
  </AppProvider>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, APP);
} else {
  createRoot(rootElement).render(APP);
}
