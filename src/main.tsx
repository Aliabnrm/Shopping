import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SoppingCartProvider } from "./components/context/ShoppingCartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <SoppingCartProvider>
        <App />
      </SoppingCartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
