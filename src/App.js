import React from "react";
import Navigation from "./components/Pages/Navigation";
import Footer from "./components/Footer";
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Footer />
    </React.Fragment>
  );
}

export default App;
