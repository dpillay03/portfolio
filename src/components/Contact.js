import React from "react";
import "../style/contact.scss";
import ContactForm from "./ContactForm.js";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

export default class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className='page-header contact-header'>CONTACT ME!</h1>
        <ContactForm />
        <div id='contact-container'>
          <div className='social-container'>
            <a href='https://github.com/dpillay03'>
              <SiGithub
                className='social-icon'
                size={"40px"}
                color={"#6efcf1"}
              ></SiGithub>
            </a>
          </div>
          <div className='social-container'>
            <a href='https://www.linkedin.com/in/danielpillay/'>
              <SiLinkedin
                className='social-icon'
                size={"40px"}
                color={"#6efcf1"}
              ></SiLinkedin>
            </a>
          </div>
          <div className='social-container'>
            <a href='https://www.instagram.com/dpillay3/'>
              <SiInstagram
                className='social-icon'
                size={"40px"}
                color={"#6efcf1"}
              ></SiInstagram>
            </a>
          </div>
        </div>
        <div id='contact-button-container'></div>
      </React.Fragment>
    );
  }
}
