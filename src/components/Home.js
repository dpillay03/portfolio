import React from "react";
import "../style/home.css";
import Logo from "../assets/dp_logo.png";
import Rocket from "../assets/rocket_ship.png";
import Code from "../assets/code.png";
import Portrait from "../assets/portrait.png";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id='home-header'>
          {/* <img src={Rocket} alt='Daniel Pillay' id='rocket' /> */}
          <p id='daniel'>DANIEL</p>
          <div id='home-header-container'>
            <img src={Logo} alt='Daniel Pillay' id='header-logo' />
            <pre>
              <h1 id='header'>
                DESIGN<span id='period-span'>.</span> {"\n"}
                DEVELOP<span id='period-span'>.</span> DEPLOY
                <span id='period-span'>.</span>
              </h1>
            </pre>
            <p id='subheader'>
              I am a full stack developer passionate about {"\n"}
              all things tech and art, preferably in conjuction.
            </p>
          </div>
          <p id='pillay'>PILLAY</p>
        </section>

        {/* <h2 className='section-headers'>About Me</h2>
        <div className='container'>
          <div className='column'>
            <img id='portrait' src={Portrait} alt='daniel pillay' />
          </div>
          <div className='column'>
            <h2 id='about-header'>Daniel Pillay</h2>
            <h2 id='about-subheader'>Software Engineer</h2>
            <p id='about-me'>
              Hello and welcome to my website! I'm a software engineer
              specialised in full stack development. I have a passion for
              building complex and scalable websites and web applications. I
              will be using this website to showcase my work and write about
              various topics that I find interesting. Feel free to reach out to
              me if you're interested in working together.
            </p>
          </div>
        </div> */}

        <div className='row'>
          <div className='column'>
            <img id='portrait' src={Portrait} alt='daniel pillay' />
          </div>
          <div className='column'>
            <h1 id='about-me-name'>Daniel Pillay</h1>
            <h1 id='about-me-occupation'>Software Engineer</h1>
            <p id='about-me'>
              Hello and welcome to my website! I'm a software engineer
              specialised in full stack development. I have a passion for
              building complex and scalable websites and web applications. I
              will be using this website to showcase my work and write about
              various topics that I find interesting. Feel free to reach out to
              me if you're interested in working together.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
