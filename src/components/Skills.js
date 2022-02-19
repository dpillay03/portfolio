import React from "react";
import "../style/skills.scss";
import "../index.scss";
import { AiOutlineCode } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { BsTools } from "react-icons/bs";

const Skills = () => {
  return (
    <div className='skills'>
      <p className='section-titles' id='home-section-title'>
        {" "}
        SKILLS{" "}
      </p>
      <div className='skills-container'>
        <div className='text'></div>

        <div className='skill-card'>
          <div className='card'>
            <i className='fas'>
              <FaLaptopCode />
            </i>
            <h4 className='skill-title'>Programming Languages</h4>
            <p className='skill-description'>
              JavaScript, Java, Python, PHP, SQL, HTML5, CSS/SCSS, and more.
            </p>
          </div>

          <div className='card'>
            <i className='fas '>
              <AiOutlineCode />
            </i>
            <h4 className='skill-title'>Frameworks/Libraries</h4>
            <p className='skill-description'>
              React, Node.js, Express.js, MongoDB, MySQL, jQuery, Chart.js,
              Jest, Bootstrap, Sanity.io, Next.js, Gatsby.js, and more.
            </p>
          </div>

          <div className='card'>
            <i className='fas'>
              <BsTools />
            </i>
            <h4 className='skill-title'>Tools</h4>
            <p className='skill-description'>
              Git, Visual Studio Code, Atom, Android Studio, Heroku, AWS,
              Netlify, Wordpress, Divi, Elementor, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
