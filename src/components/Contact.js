import React from "react";
import "../style/contact.scss";
import {
  SiGithub,
  SiCodepen,
  SiLinkedin,
  SiFacebook,
  SiYoutube,
} from "react-icons/si";
import { RiMailSendLine } from "react-icons/ri";

export default class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className='page-header'>LET'S GET IN TOUCH!</h1>
        <div id='contact-container'>
          <div className='social-container'>
            <a href='mailto:dpillay03@gmail.com?subject=Website inquiry'>
              <RiMailSendLine
                className='social-icon'
                size={"40px"}
                color={"#6efcf1"}
              ></RiMailSendLine>
              <a href='mailto:dpillay03@gmail.com?subject=Website inquiry'>
                <p className='social-text'>dpillay03@gmail.com</p>
              </a>
            </a>
          </div>
          <div className='social-container'>
            <a href='https://github.com/dpillay03'>
              <SiGithub
                className='social-icon'
                size={"40px"}
                color={"#6efcf1"}
              ></SiGithub>
              <p className='social-text'>GitHub</p>
            </a>
          </div>
          <div className='social-container'>
            <a href='https://www.linkedin.com/in/danielpillay/'>
              <SiLinkedin
                className='social-icon'
                size={"40px"}
                color={"#6efcf1"}
              ></SiLinkedin>
              <p className='social-text'>LinkedIn</p>
            </a>
          </div>
          <div className='social-container'>
            <a href='https://www.youtube.com/channel/UCJeru7Pd3DBcLOwXDWSt9vA/'>
              <SiYoutube
                className='social-icon'
                size={"40px"}
                color={"#6efcf1"}
              ></SiYoutube>
              <p className='social-text'>YouTube</p>
            </a>
          </div>
          <div className='social-container'>
            <a href='https://codepen.io/dpillay03'>
              <SiCodepen
                className='social-icon'
                size={"40px"}
                color={"#6efcf1"}
              ></SiCodepen>
              <p className='social-text'>CodePen</p>
            </a>
          </div>
          <div className='social-container'>
            <a href='https://www.facebook.com/dan3pillay/'>
              <SiFacebook
                className='social-icon'
                size={"40px"}
                color={"#6efcf1"}
              ></SiFacebook>
              <p className='social-text'>Facebook</p>
            </a>
          </div>
        </div>
        <div id='contact-button-container'>
          <button className='contact-btn' id='resume-btn'>
            Resume
          </button>
        </div>
      </React.Fragment>
    );
  }
}
