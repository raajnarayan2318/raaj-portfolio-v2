import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./app/App";
import "./index.css";
import "./styles/cursor.css";

const isGhPages = import.meta.env.MODE === "ghpages";

// 🔑 FIX: force hash on first load for GitHub Pages
if (isGhPages && !window.location.hash) {
  window.location.replace("#/");
}

const Router = isGhPages ? HashRouter : BrowserRouter;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);