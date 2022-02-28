import React from "react";
import "../../style/about.scss";
import "../../style/darkmode.scss";
import Headshot from "../..//assets/headshot.PNG";
import Resume from "../../assets/Daniel_Pillay_Resume.PDF";
import {
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
  TiSocialGithubCircular,
  TiSocialYoutubeCircular,
} from "react-icons/ti";
import LazyLoad from "react-lazyload";
import AirForce from "../../assets/military_pic.jpg";
import BJJ from "../../assets/daniel_leoVieira.JPG";
import Skydive from "../../assets/skydive.JPG";
import Surf from "../../assets/surf.JPG";
import ScrollToTop from "react-router-scroll-top";

export default class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ScrollToTop />
        <section id='page' className='about-page'>
          {/* ABOUT HEADER */}
          <section id='about-section'>
            <h1 className='section-titles'>
              <span id='my-mission'>MY STORY, MY MISSION</span>
            </h1>
            <LazyLoad height={400}>
              <img
                src={Headshot}
                id='headshot'
                className='about-left about-img'
                alt="Daniel Pillay's headshot/professional"
              ></img>
            </LazyLoad>
            <p className='about-text'>
              Hi! My name Daniel Pillay. I am a Software Developer who
              specializes in frontend and full-stack development. After
              honorably seperating from the United States Air Force in 2017 I
              decided to chase my passion and transitioned into the tech
              industry. I have a bachelors degree in Computer Science from
              Colorado State University, Global Campus. I also earned a
              certificate of Advanced Software Development in Full Stack
              JavaScript from Code Fellows Coding Bootcamp located in Seattle,
              Washington.
            </p>
            {/* <br /> */}
            <p className='about-text'>
              I have industry and freelance experience building websites and
              managing digital marketing campaigns for a diverse range of
              clients and companies. In 2017 I launched my web design company{" "}
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
              In my free time, I love training Brazilian Jiu-jitsu, skydiving,
              playing the guitar, surfing, hiking, reading, listening to
              podcasts, snorkeling, family time, and much more.
            </p>
            {/* <br /> */}
            <p className='about-text'>
              If you have any questions, want to work with me, or just want to
              say hi - feel free to reach out to me!
            </p>

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
            <div id='about-image-section'>
              <div className='imageColumn'>
                <LazyLoad height={250}>
                  <img
                    className='about-image-bottom'
                    src={AirForce}
                    alt='Daniel Pillay in Air Force Uniform'
                    style={{ width: "100%" }}
                  />
                </LazyLoad>
              </div>
              <div className='imageColumn'>
                <LazyLoad height={250}>
                  <img
                    className='about-image-bottom'
                    src={BJJ}
                    alt='Daniel Pillay in with Checkmat Founder Leo Vieira'
                    style={{ width: "100%" }}
                  />
                </LazyLoad>
              </div>
              <div className='imageColumn'>
                <LazyLoad height={250}>
                  <img
                    className='about-image-bottom'
                    src={Skydive}
                    alt='Daniel Pillay Skydiving'
                    style={{ width: "100%" }}
                  />
                </LazyLoad>
              </div>
              <div className='imageColumn'>
                <LazyLoad height={250}>
                  <img
                    className='about-image-bottom'
                    src={Surf}
                    alt='Daniel Pillay Surfing'
                    style={{ width: "100%" }}
                  />
                </LazyLoad>
              </div>
            </div>
          </section>
        </section>
      </React.Fragment>
    );
  }
}
