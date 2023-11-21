import React from "react";
import { hydrate, render } from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

const APP = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
