import React from "react";
import "../style/home.scss";
import Portrait from "../assets/brand_image.png";
import Rollodex from "../assets/rollodex.png";
import { BsPersonLinesFill, BsTools } from "react-icons/bs";
import { FiCodepen } from "react-icons/fi";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* HOME HEADER */}
        <section className='home-container'>
          <span id='daniel'>DANIEL</span>
          <div id='home-header-container'>
            <h1 id='home-header'>I BUILD THE WEB</h1>
            <h2 id='home-subheader'>
              I am a Software Engineer who has a passion for all things tech and
              art, preferably in conjuction.
            </h2>
          </div>
          <span id='pillay'>PILLAY</span>

          {/* ABOUT ME  */}
          <p className='section-header'>
            ABOUT ME <BsPersonLinesFill size={"40px"} />
          </p>
          <div id='about-container'>
            <img
              src={Portrait}
              id='portrait'
              alt='portrait for daniel pillay'
            />
            <p id='about-me'>
              Hello! My name Daniel Pillay. I am an Air Force veteran turned
              software engineer who specializes in full-stack development. I am
              a Computer Science major at Colorado State University and am
              expected to graduate in September of 2021. I have also earned a
              certificate in Advanced Software Development in Full Stack
              JavaScript at Code Fellows Coding Academy.
              <br></br>
              <br></br>I am a Seattleite temporarily residing on the Island of
              Hawai'i (Kailua-Kona). My goal is to help others grow their online
              footprint by building powerful and scalable websites and web
              applications. I am available for certain freelance projects and
              would love to help local businesses who were impacted by COVID-19.
              <br></br>
              <br></br>On my free time, I enjoy training Brazilian Jiu-jitsu,
              fitness, playing the guitar, surfing, flying drones, learning, and
              traveling.
            </p>
            <div id='button-container'>
              <a href='danielpillay.com/contact'>
                <button className='contact-btn' id='hire-me-btn'>
                  Hire Me
                </button>
              </a>
            </div>
          </div>
        </section>
        {/* PROJECTS */}
        <p className='section-header'>
          APP OF THE DAY
          <FiCodepen size={"40px"} />
        </p>
        <div id='app-of-day-container'>
          <div id='app-text-container'>
            <p id='app-of-day-header'>Rollodex</p>
            <p id='app-of-day-description'>
              Stay in touch with your training partners with Rollodex - the
              Brazilian Jiu-jitsu social networking app. Rollodex allows you to
              share your personal progress and stay in touch with training
              partners. This app was coded from scratch with React.js, Mongo
              Atlas database, Node.js, and Express.js.
            </p>
            <button className='contact-btn' id='resume-btn'>
              See App
            </button>
          </div>
          <img src={Rollodex} id='rollodex-svg' alt='rollodex thumbnail' />
        </div>
        {/* SKILLS */}
        <p className='section-header'>
          SKILLS
          <BsTools size={"40px"} />
        </p>
        <div id='skills-container'>
          <p className='skills-subheader'>Technical Skills</p>
          <div className='columns'>
            <div className='column'>
              <h2 className='tech-skills-headers'>Languages</h2>
              <ul>
                <li>Javascript</li>
                <li>Java</li>
                <li>Python</li>
                <li>SQL</li>
                <li>HTML5</li>
                <li>CSS/SCSS</li>
              </ul>
            </div>

            <div className='column'>
              <h2 className='tech-skills-headers'>Libraries/Frameworks</h2>
              <ul>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Next.JS</li>
                <li>Gatsby.JS</li>
              </ul>
            </div>

            <div className='column'>
              <h2 className='tech-skills-headers'>Tools/Misc.</h2>
              <ul>
                <li>Git</li>
                <li>AWS </li>
                <li>Heroku</li>
                <li>Wordpress</li>
                <li>Wix</li>
                <li>Squarespace</li>
                <li>Command Line</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
          <p className='skills-subheader'>Education</p>
          <div className='skills'>
            <p className='position'>
              Colorado State University - Global Campus
            </p>
            <p className='title'> Bachelors of Science - BS Computer Science</p>
            <p className='years'> 2020-2021</p>
          </div>

          <div className='skills'>
            <p className='position'>Code Fellows - Coding Bootcamp</p>
            <p className='title'>
              {" "}
              Certificate in Advanced Software Development in Full Stack
              JavaScript
            </p>
            <p className='years'> 2018</p>
          </div>

          <p className='skills-subheader'>Work</p>
          <div className='skills'>
            <p className='position'>Web Developer and Marketing Strategist</p>
            <p className='title'> Amazing Life Chiropractic and Wellness</p>
            <p className='years'>2019 – Current</p>
          </div>

          <div className='skills'>
            <p className='position'>Marketing and Social Media Strategist</p>
            <p className='title'> Renzo Gracie Seattle</p>
            <p className='years'>2018 – 2019</p>
          </div>

          <div className='skills'>
            <p className='position'>Web Developer – Freelance</p>
            <p className='title'> DP Designs</p>
            <p className='years'>2017 – 2019</p>
          </div>

          <div className='skills'>
            <p className='position'>Security Forces Specialist</p>
            <p className='title'> United States Air Force</p>
            <p className='years'>2013 – 2017</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
