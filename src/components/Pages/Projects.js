import React from "react";
import ALCW from "../../assets/amazinglifechiro.png";
import FSMedia from "../../assets/FlowStateMedia.png";
import SubredditSearch from "../../assets/subreddit.png";
import Execute from "../../assets/Execute.png";
import CombatCapitol from "../../assets/combatcapitol.png";
import PortfolioPic from "../../assets/PortfolioProj.png";

export default function Project() {
  return (
    <React.Fragment>
      <section id='page'>
        <h1 className='section-titles'>
          <span id='my-mission'>PROJECTS</span>
        </h1>
        <section className='project-section' id='project-section'>
          <ul>
            <li>
              <figure>
                <img
                  className='project-image'
                  src={ALCW}
                  alt='ALCW responsive thumbnail'
                />
                <figcaption>
                  <h3>Amazing Life Chiropractic</h3>
                </figcaption>
              </figure>
              <p className='project-description'>
                Company website for the Amazing Life Chiropractic and Wellness.
                Current website is valued at $500,000 dollars. Built with
                WordPress and Divi.
              </p>
              <a
                className='project-link'
                href='https://amazinglifechiropractic.com'
              >
                Visit Website
              </a>
            </li>
            <li>
              <figure>
                <img
                  className='project-image'
                  src={FSMedia}
                  alt='Thumbnail for Flow State Media'
                />
                <figcaption>
                  <h3>Flow State Media</h3>
                </figcaption>
              </figure>
              <p className='project-description'>
                Flow State Media is a Web Design and Google Ads agency for those
                in the the health, wellness, and medical industries. Built with
                WordPress and Divi.
              </p>
              <a className='project-link' href='https://flowstatemedia.io'>
                Visit Website
              </a>
            </li>
            <li>
              <figure>
                <img
                  className='project-image'
                  src={SubredditSearch}
                  alt='Subreddit Search Engine thumbnail.'
                />
                <figcaption>
                  <h3>Subreddit Search Engine</h3>
                </figcaption>
              </figure>
              <p className='project-description'>
                A subreddit search engine that returns a list of relevent
                subreddits based on the users search. Built with ReactJS, HTML5,
                CSS3, and deployed to GH-Pages.
              </p>
              <a
                className='project-link'
                href='https://dpillay03.github.io/subreddit/'
              >
                Visit Website
              </a>
              <a
                className='project-link'
                href='https://github.com/dpillay03/subreddit'
              >
                Visit Github
              </a>
            </li>
            <li>
              <figure>
                <img
                  className='project-image'
                  src={Execute}
                  alt='ALCW responsive thumbnail'
                />
                <figcaption>
                  <h3>Execute Goal Tracker</h3>
                </figcaption>
              </figure>
              <p className='project-description'>
                Execute is a goal tracking web application that allows users to
                input and complete their goals. The web application is built
                with ReactJS, HTML5, CSS3, and deployed to GH-Pages
              </p>
              <a
                className='project-link'
                href='https://dpillay03.github.io/execute/'
              >
                Visit Website
              </a>
              <a
                className='project-link'
                href='https://github.com/dpillay03/execute'
              >
                Visit Github
              </a>
            </li>
            <li>
              <figure>
                <img
                  className='project-image'
                  src={CombatCapitol}
                  alt='Combat Capitol responsive thumbnail'
                />
                <figcaption>
                  <h3>Combat Capitol</h3>
                </figcaption>
              </figure>
              <p className='project-description'>
                Combat Capitol is a combat sports news application that allows
                users to read up on the latest news. The web application is
                built with ReactJS, NewsAPI, HTML5, CSS3, and deployed to
                GH-Pages
              </p>
              <a
                className='project-link'
                href='https://github.com/dpillay03/combatcapitol'
              >
                Visit Github
              </a>
            </li>
            <li>
              <figure>
                <img
                  className='project-image'
                  src={PortfolioPic}
                  alt='Portfolio thumbnail for Daniel Pillay'
                />
                <figcaption>
                  <h3>Daniel Pillay</h3>
                </figcaption>
              </figure>
              <p className='project-description'>
                Software Development portfolio website for Daniel Pillay. It's
                main purpose is to outline his projects. Built with ReactJS,
                HTML5, CSS3, SanityIO, and more. Website deployed to Netlify.
              </p>
              <a className='project-link' href='https://danielpillay.com'>
                Visit Website
              </a>
              <a
                className='project-link'
                href='https://github.com/dpillay03/portfolio'
              >
                Visit Github
              </a>
            </li>
          </ul>
        </section>
      </section>
    </React.Fragment>
  );
}
