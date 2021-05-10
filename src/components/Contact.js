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
            <RiMailSendLine
              className='social-icon'
              size={"40px"}
              color={"#008cba"}
            ></RiMailSendLine>
            <p className='social-text'>Email Me!</p>
          </div>
          <div className='social-container'>
            <SiGithub
              className='social-icon'
              size={"40px"}
              color={"#008cba"}
            ></SiGithub>
            <p className='social-text'>GitHub</p>
          </div>
          <div className='social-container'>
            <SiLinkedin
              className='social-icon'
              size={"40px"}
              color={"#008cba"}
            ></SiLinkedin>
            <p className='social-text'>LinkedIn</p>
          </div>
          <div className='social-container'>
            <SiCodepen
              className='social-icon'
              size={"40px"}
              color={"#008cba"}
            ></SiCodepen>
            <p className='social-text'>CodePen</p>
          </div>
          <div className='social-container'>
            <SiFacebook
              className='social-icon'
              size={"40px"}
              color={"#008cba"}
            ></SiFacebook>
            <p className='social-text'>FaceBook</p>
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
