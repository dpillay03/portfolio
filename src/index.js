import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "../src/style/main.scss";
import App from "./App";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
