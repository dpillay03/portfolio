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
              <p>My Story. My Mission.</p>
              <h1>About Me</h1>
              <p>
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
          <h1>Experience</h1>
          <div className='two-col-container'>
            <div className='two-col'>
              <h2>Professional</h2>
              <div>
                <p>Trinity Insight</p>
                <p>UX Engineer - Frontend Developer</p>
                <p>April, 2022 - Current</p>
              </div>
              <div>
                <p>Amazing Life Chiropractic and Wellness</p>
                <p>Web Manager & Marketing Strategist</p>
                <p>January, 2019 - March 2022</p>
              </div>
              <div>
                <p>Flowstate Media</p>
                <p>Freelance Web Designer, Owner</p>
                <p>May, 2017 - December 2018</p>
              </div>
              <div>
                <p>United States Air Force</p>
                <p>Security Forces Member</p>
                <p>April, 2013 - April 2017</p>
              </div>
            </div>
            <div className='two-col'>
              <h2>Education</h2>
              <div>
                <div>
                  <p>Colorado State University, Global</p>
                  <p>Bachelor of Science, Computer Science</p>
                  <p>January, 2020 - January 2022</p>
                </div>
                <div>
                  <p>Codefellows - Coding Bootcamp</p>
                  <p>
                    Certificate: Advanced Software Development in Full Stack
                    JavaScript
                  </p>
                  <p>January, 2020 - January 2022</p>
                </div>
                <div>
                  <p>Shoreline Community College</p>
                  <p>Associate of Arts, Direct Transfer</p>
                  <p>January, 2018 - December 2019</p>
                </div>
              </div>
            </div>
          </div>
          {/* SKILLS */}
          <div className='three-col-container'>
            <div className='three-col'>
              <h2>Programming Languages</h2>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Python</li>
            </div>
            <div className='three-col'>
              <h2>Libraries & Frameworks</h2>
              <li>React</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Node</li>
              <li>jQuery</li>
              <li>SASS & SCSS</li>
            </div>
            <div className='three-col'>
              <h2>Tools</h2>
              <li>NPM (Node Package Manager)</li>
              <li>Figma</li>
              <li>Git/Github/Version Control</li>
              <li>VScode</li>
              <li>CMS - WordPress, Shopify, SquareSpace</li>
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
