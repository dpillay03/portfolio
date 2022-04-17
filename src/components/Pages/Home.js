import React from "react";
import portrait from "../../assets/portrait.jpg";
import head from "../../assets/headshot_transparant.png";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";

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
            <h1>Daniel Pillay</h1>
            <hr></hr>
            <h2>Software Engineer</h2>
            <p>
              UI/UX Developer with a passion for all things tech and art,
              preferably in conjunction
            </p>

            <div id='social-icons-container'>
              <FaGithubSquare size={40} />
              <FaLinkedin size={40} />
              <FaInstagramSquare size={40} />
              <FaFacebookSquare size={40} />
            </div>

            <button>About Me</button>
            <button>Contact</button>
          </div>
        </div>
      </section>
    );
  }
}
