import React from "react";
import construction from "./assets/under_construction.png";
import Navigation from "./components/Pages/Navigation";
import Footer from "./components/Footer";
function App() {
  return (
    <React.Fragment>
      {/* <Navigation /> */}
      {/* <Footer /> */}
      <img
        src={construction}
        alt='under construction'
        style={{ width: "70%", margin: "0 auto", textAlign: "center" }}
      />
    </React.Fragment>
  );
}

export default App;
