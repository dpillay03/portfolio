import React from "react";
import portrait from "../../assets/portrait.jpg";
import { NavLink } from "react-router-dom";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import TextLoop from "react-text-loop";

export default class Home extends React.Component {
  render() {
    return (
      <section className='content-wrapper' id='home-wrapper'>
        <div className='two-col-container'>
          <div className='two-col'>
            <img
              src={portrait}
              id='headshot'
              alt="daniel pillay's software engineering headshot"
            />
          </div>
          <div className='two-col'>
            <h1 className='header-left'>DANIEL PILLAY</h1>
            <hr></hr>
            <TextLoop interval={3000} className='text-loop'>
              <span className='text-loop-item'>UI/UX Developer</span>
              <span className='text-loop-item'>Software Engineer</span>
              <span className='text-loop-item'>Air Force Veteran</span>
            </TextLoop>

            <p id='home-bio' className='body-text'>
              Software Engineer with a passion for all things tech and art,
              preferably in conjunction. Currently a UX/UX Engineer at{" "}
              <a href='https://trinity.one'>
                <span id='trinity-orange'>@Trinity</span>
              </a>
            </p>

            <div id='social-icons-container'>
              <a
                href='https://github.com/dpillay03'
                target='_blank'
                rel='noreferrer'
              >
                <FaGithubSquare className='social-icon' size={45} />
              </a>
              <a
                href='https://www.linkedin.com/in/danielpillay/'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedin className='social-icon' size={45} />
              </a>
              <a
                href='https://www.instagram.com/dpillay3'
                target='_blank'
                rel='noreferrer'
              >
                <FaInstagramSquare className='social-icon' size={45} />
              </a>
              <a
                href='https://www.facebook.com/dan3pillay/'
                target='_blank'
                rel='noreferrer'
              >
                <FaFacebookSquare className='social-icon' size={45} />
              </a>
            </div>

            <div className='btn-container'>
              <NavLink to='/about'>
                <button>About Me</button>
              </NavLink>
              <NavLink to='/contact'>
                <button>Contact</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
