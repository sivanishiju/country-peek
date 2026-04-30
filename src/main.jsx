import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

// GitHub Pages redirect fix
const redirect = sessionStorage.redirect;
if (redirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirect);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);