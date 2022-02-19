import React from "react";
import "../../style/home.scss";
import "../../style/darkmode.scss";
import "../../style/skills.scss";
import "../../style/projects.scss";
import Skills from "../Skills";
import Headshot from "../../assets/dp_headshot_color.png";
import ParticleJS from "../Particles";
import HomeProjectSlideshow from "../HomeProjectSlideshow";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import ScrollToTop from "react-router-scroll-top";

export default class Home extends React.Component {
  render() {
    return (
      <section id='page'>
        <ScrollToTop />
        <div id='container'>
          <section id='home-header' className='section-headers'>
            <ParticleJS />
            <LazyLoad width={150}>
              <img
                src={Headshot}
                id='hero-image'
                alt='Cartoon headshot of Daniel Pillay'
              />
            </LazyLoad>
            <p id='hero-header'>
              <span id='dev'>developer</span>{" "}
              <span className='header-divider'>|</span>{" "}
              <span id='des'>designer</span>{" "}
              <span className='header-divider'>|</span>{" "}
              <span id='crea'>creative</span>
            </p>
            <p id='hero-subheader'>
              Software Developer with a passion for all things
              <span className='sub-header-focus'> tech</span> and
              <span className='sub-header-focus'> art</span>, preferably in
              <span className='sub-header-focus'> conjuction</span>.
            </p>

            <Link to='/about'>
              <button className='contact-button'>Learn More</button>
            </Link>
          </section>
        </div>

        <section className='home-projects'>
          <HomeProjectSlideshow />
          <Link to='/projects'>
            <button className='contact-button more-projects-button'>
              See All Projects!
            </button>
          </Link>
        </section>

        {/* SKILLS */}
        <section id='home-skills'>
          <Skills />
        </section>

        {/* Blog */}
        <section id='home-experience'>
          <p className='section-titles' id='home-section-title'>
            EXPERIENCE
          </p>
          <h3 id='experience-title'>Work</h3>
          <p id='experience-company'>Amazing Life Chiropractic and Wellness</p>
          <p id='experience-position'>Webmaster and Marketing Strategist</p>
          <p id='experience-date'> January 2019 - Current</p>

          <p id='experience-company'>Flow State Media</p>
          <p id='experience-position'>Web Designer, Owner</p>
          <p id='experience-date'>May 2017 - January 2019</p>

          <p id='experience-company'>United States Air Force</p>
          <p id='experience-position'>Security Forces Specialist</p>
          <p id='experience-date'>April 2013 - April 2017</p>

          <h3 id='experience-title'>Education</h3>
          <p id='experience-company'>
            Colorado State University - Global Campus
          </p>
          <p id='experience-position'>Bachelor of Science, Computer Science</p>
          <p id='experience-date'>January 2020 - January 2022</p>

          <p id='experience-company'>Code Fellows, Coding Academy - Seattle</p>
          <p id='experience-position'>
            Certificate, Advanced Software Development in Full-Stack JavaScript
          </p>
          <p id='experience-date'>June 2017 - June 2018</p>
        </section>
      </section>
    );
  }
}
