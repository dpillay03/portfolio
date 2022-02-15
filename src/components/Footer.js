import React from "react";
import "../style/contact.scss";
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

let year = new Date().getFullYear();
export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <p className='footer-copyright'>
            {year} Copyright © Daniel Pillay - All Rights Reserved
          </p>

          <a href='https://danielpillay.com/contact'>
            <button className='contact-button'>Contact Me</button>
          </a>
        </footer>
      </React.Fragment>
    );
  }
}
