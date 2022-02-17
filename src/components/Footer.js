import React from "react";
import "../style/contact.scss";

let year = new Date().getFullYear();
export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <p id='footer-copyright'>
            {year} Copyright © Daniel Pillay - All Rights Reserved
          </p>

          <a href='https://danielpillay.com/contact'>
            <button className='contact-button' id='footer-contact-btn'>
              Contact Me
            </button>
          </a>
        </footer>
      </React.Fragment>
    );
  }
}
