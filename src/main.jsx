import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App.jsx";

/**
 * El archivo main.jsx sirve para crear el proyecto React, en modo javascript estricto.
 * Dentro incluimos el componente App, el componente raiz del proyecto
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
