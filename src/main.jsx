import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
// import App from "./pages/App.jsx";
import { App } from "./pages";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);