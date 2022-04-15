import React from "react";
import ReactDOM from "react-dom";
import App from "./components/pages/Dashboard";
import "../src/style/main.scss";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
