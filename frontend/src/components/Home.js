import React from "react";
import "../style/home.css";
import Logo from "../assets/dp_logo.png";
import Rocket from "../assets/rocket_ship.png";
import Code from "../assets/code.png";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <img src={Rocket} alt='Daniel Pillay' id='rocket' />
        <div id='home-header-container'>
          <img src={Logo} alt='Daniel Pillay' id='header-logo' />
          <pre>
            <h1 id='header'>
              DESIGN. {"\n"}
              DEVELOP. DEPLOY.
            </h1>
          </pre>
          <p id='subheader'>
            I am a full stack developer passionate about all things tech and
            art, preferably in conjuction.
          </p>
        </div>
        <img src={Code} alt='Daniel Pillay' id='code' />
      </React.Fragment>
    );
  }
}
