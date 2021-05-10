import React from "react";
import "../style/contact.scss";
import {
  SiMinutemailer,
  SiGithub,
  SiCodepen,
  SiLinkedin,
  SiFacebook,
} from "react-icons/si";
import { RiMailSendLine } from "react-icons/ri";

export default class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id='contact-container'>
          <div className='social-container'>
            <a href='mailto:dpillay03@gmail.com'>
              <RiMailSendLine
                className='social-icon'
                size={"40px"}
                color={"#008cba"}
              ></RiMailSendLine>
              <p className='social-text' href='mailto:dpillay03@gmail.com'>
                Email Me!
              </p>
            </a>
          </div>
          <div className='social-container'>
            <a href='https://github.com/dpillay03'>
              <SiGithub
                className='social-icon'
                size={"40px"}
                color={"#008cba"}
              ></SiGithub>
              <p className='social-text'>GitHub</p>
            </a>
          </div>
          <div className='social-container'>
            <a href='https://www.linkedin.com/in/danielpillay/'>
              <SiLinkedin
                className='social-icon'
                size={"40px"}
                color={"#008cba"}
              ></SiLinkedin>
              <p className='social-text'>LinkedIn</p>
            </a>
          </div>
          <div className='social-container'>
            <a href='https://codepen.io/dpillay03'>
              <SiCodepen
                className='social-icon'
                size={"40px"}
                color={"#008cba"}
              ></SiCodepen>
              <p className='social-text'>CodePen</p>
            </a>
          </div>
          <div className='social-container'>
            <a href='https://www.facebook.com/dan3pillay/'>
              <SiFacebook
                className='social-icon'
                size={"40px"}
                color={"#008cba"}
              ></SiFacebook>
              <p className='social-text'>Facebook</p>
            </a>
          </div>
        </div>
        <div id='contact-button-container'>
          <button className='contact-btn' id='hire-me-btn'>
            Hire Me
          </button>
          <button className='contact-btn' id='resume-btn'>
            Resume
          </button>
        </div>
      </React.Fragment>
    );
  }
}
