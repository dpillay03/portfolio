import React from "react";
import ReactDOM from "react-dom";
import App from "./components/pages/App";
import "../src/style/main.scss";
import reportWebVitals from "./reportWebVitals";
import ParticlesJS from "../src/components/modules/Particles";
ReactDOM.render(
  <React.StrictMode>
    <ParticlesJS />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
