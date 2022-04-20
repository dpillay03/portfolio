import React from "react";
import Headshot from "../../assets/headshot_trans.png";
import dp_bjj from "../../assets/daniel_leoVieira.JPG";
import dp_military from "../../assets/military_pic.jpg";
import dp_skydive from "../../assets/skydive.JPG";
import dp_surf from "../../assets/surf.JPG";
export default class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className='content-wrapper'>
          <div className='two-col-container'>
            <div className='two-col'>
              <img
                src={Headshot}
                id='about-headshot'
                alt="daniel pillay's software engineering headshot"
              />
            </div>
            <div className='two-col'>
              <p className='subheader-text'>My Story. My Mission.</p>
              <h1 className='header-left'>ABOUT ME</h1>
              <p className='body-text'>
                Hi, my name is Daniel. I am an Air Force veteran turned Software
                Engineer with an affinity for powerful interfaces and seamless
                experiences. I have a background in web design, web development,
                and digital marketing. My mission is to combine these skills to
                help others establish their online presence.
                <br />
                <br />
                In my free time, I love training Muay Thai, Brazilian Jiu-jitsu,
                playing the guitar, surfing, hiking, working out, traveling,
                reading, listening to podcasts, being near the ocean (or any
                body of water), family time, and more.
              </p>
            </div>
          </div>

          {/* EXPERIENCE */}
          <h1 className='header-centered'>EXPERIENCE</h1>
          <div className='two-col-container'>
            <div className='two-col'>
              <h2 className='resume-header'>PROFESSIONAL</h2>
              <div className='resume-card'>
                <p className='resume-place'>Trinity Insight</p>
                <p className='resume-title'>
                  UI/UX Engineer - Frontend Developer
                </p>
                <p className='resume-date'>April, 2022 - Current</p>
              </div>
              <div className='resume-card'>
                <p className='resume-place'>
                  Amazing Life Chiropractic and Wellness
                </p>
                <p className='resume-title'>
                  Web Manager & Marketing Strategist
                </p>
                <p className='resume-date'>January, 2019 - March 2022</p>
              </div>
              <div className='resume-card'>
                <p className='resume-place'>Flowstate Media</p>
                <p className='resume-title'>Freelance Web Designer, Owner</p>
                <p className='resume-date'>May, 2017 - December 2018</p>
              </div>
              <div className='resume-card'>
                <p className='resume-place'>United States Air Force</p>
                <p className='resume-title'>Security Forces Member</p>
                <p className='resume-date'>April, 2013 - April 2017</p>
              </div>
            </div>
            <div className='two-col'>
              <h2 className='resume-header'>EDUCATION</h2>
              <div>
                <div className='resume-card'>
                  <p className='resume-place'>
                    Colorado State University, Global
                  </p>
                  <p className='resume-title'>
                    Bachelor of Science, Computer Science
                  </p>
                  <p className='resume-date'>January, 2020 - January 2022</p>
                </div>
                <div className='resume-card'>
                  <p className='resume-place'>Codefellows - Coding Bootcamp</p>
                  <p className='resume-title'>
                    Certificate: Advanced Software Development in Full Stack
                    JavaScript
                  </p>
                  <p className='resume-date'>September, 2017 - June 2018</p>
                </div>
              </div>
            </div>
          </div>
          {/* SKILLS */}
          <h1 className='header-centered'>SKILLS</h1>
          <div className='three-col-container'>
            <div className='three-col'>
              <div className='skills-card'>
                <p className='resume-place'>Programming Languages</p>
                <li className='resume-title'>JavaScript</li>
                <li className='resume-title'>Java</li>
                <li className='resume-title'>Python</li>
              </div>
            </div>
            <div className='three-col'>
              <div className='skills-card'>
                <p className='resume-place'>Libraries & Frameworks</p>
                <li className='resume-title'>React</li>
                <li className='resume-title'>Express</li>
                <li className='resume-title'>MongoDB</li>
                <li className='resume-title'>Node</li>
                <li className='resume-title'>jQuery</li>
                <li className='resume-title'>SASS & SCSS</li>
              </div>
            </div>
            <div className='three-col'>
              <div className='skills-card'>
                <p className='resume-place'>Tools</p>
                <li className='resume-title'>NPM (Node Package Manager)</li>
                <li className='resume-title'>Figma</li>
                <li className='resume-title'>Git/Github/Version Control</li>
                <li className='resume-title'>VScode</li>
                <li className='resume-title'>
                  CMS - WordPress, Shopify, SquareSpace
                </li>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className='four-col-container'>
            <img className='four-col about-img' src={dp_military} alt='' />
            <img className='four-col about-img' src={dp_bjj} alt='' />
            <img className='four-col about-img' src={dp_skydive} alt='' />
            <img className='four-col about-img' src={dp_surf} alt='' />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
