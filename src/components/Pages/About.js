import React from "react";
import "../../style/about.scss";
import "../../style/darkmode.scss";
import AirForce from "../../assets/military_pic.jpg";
import BJJ from "../../assets/daniel_leoVieira.JPG";
import Skydive from "../../assets/skydive.JPG";
import Surf from "../../assets/surf.JPG";
import Headshot from "../..//assets/headshot.PNG";
import Resume from "../../assets/Daniel_Pillay_Resume.PDF";
import {
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiSocialYoutubeCircular,
} from "react-icons/ti";

export default class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id='page' className='about-page'>
          {/* ABOUT HEADER */}
          <section id='about-section'>
            <h1 className='section-titles'>
              <span id='my-mission'>MY STORY, MY MISSION</span>
            </h1>
            <img
              src={Headshot}
              id='headshot'
              className='about-left about-img'
              alt="Daniel Pillay's headshot/professional"
            ></img>

            <p className='about-text'>
              Hi! My name Daniel Pillay. I am a Software Engineer who
              specializes in full stack development. I am a computer science
              major at Colorado State University - Global Campus and I am
              expected to graduate in January of 2022. I have also earned a
              certificate of Advanced Software Development in Full Stack
              JavaScript at Code Fellows Coding Bootcamp located in Seattle,
              Washington. I have both industry and freelance experience building
              websites and managing marketing campaigns for a wide range of
              clients and companies.
            </p>
            {/* <br /> */}
            <p className='about-text'>
              After honorably seperating from the United States Air Force in
              2017 I decided to chase my passion and transitioned into the tech
              industry. I launched my web design company{" "}
              <a
                id='fsm-link'
                href='https://flowstatemedia.io'
                target='_blank'
                rel='noreferrer'
              >
                Flow State Media LLC{" "}
              </a>
              with the goal of helping others grow their online footprints with
              powerful web and marketing solutions.
            </p>
            {/* <br /> */}
            <p className='about-text'>
              On my free time, I like to partake in various hobbies and
              activities. I love training Brazilian Jiu-jitsu, skydiving,
              playing the guitar (Fender Deluxe Roadhouse for my fellow
              guitarists), surfing, hiking, reading, listening to podcasts,
              snorkeling, family time, and much more.
            </p>
            {/* <br /> */}
            <p className='about-text'>
              If you have any questions, want to work with me, or just want to
              say hi - feel free to reach out to me!
            </p>
            <a href={Resume} target='_blank' rel='noreferrer'>
              <button id='resume-btn' className='contact-button'>
                View Resume
              </button>
            </a>
            <div className='social-container'>
              <a
                href='https://linkedin.com/in/danielpillay'
                target='_blank'
                rel='noreferrer'
              >
                <TiSocialLinkedinCircular
                  size={50}
                  className='contact-social-icon'
                />
              </a>
              <a
                href='https://github.com/dpillay03'
                target='_blank'
                rel='noreferrer'
              >
                <TiSocialGithubCircular
                  size={50}
                  className='contact-social-icon'
                />{" "}
              </a>
              <a
                href='https://instagram.com/dpillay3'
                target='_blank'
                rel='noreferrer'
              >
                <TiSocialInstagramCircular
                  size={50}
                  className='contact-social-icon'
                />
              </a>
              <a
                href='https://www.youtube.com/channel/UCCFoaR1kuuDhhHgSwD9j9Mw'
                target='_blank'
                rel='noreferrer'
              >
                <TiSocialYoutubeCircular
                  size={50}
                  className='contact-social-icon'
                />
              </a>
            </div>

            <div className='imageColumn'>
              <img
                className='about-image-bottom'
                src={AirForce}
                alt='Daniel Pillay in Air Force Uniform'
                style={{ width: "100%" }}
              />
            </div>
            <div className='imageColumn'>
              <img
                className='about-image-bottom'
                src={BJJ}
                alt='Daniel Pillay in with Checkmat Founder Leo Vieira'
                style={{ width: "100%" }}
              />
            </div>
            <div className='imageColumn'>
              <img
                className='about-image-bottom'
                src={Skydive}
                alt='Daniel Pillay Skydiving'
                style={{ width: "100%" }}
              />
            </div>
            <div className='imageColumn'>
              <img
                className='about-image-bottom'
                src={Surf}
                alt='Daniel Pillay Surfing'
                style={{ width: "100%" }}
              />
            </div>
          </section>
        </section>
      </React.Fragment>
    );
  }
}
