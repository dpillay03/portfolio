import React from "react";
import "../style/projects.scss";
import { Zoom } from "react-slideshow-image";
import ALCW from "../assets/amazinglifechiro.png";
import FSM from "../assets/FlowStateMedia.png";
import PortfolioThumb from "../assets/PortfolioProj.png";

const slideImages = [ALCW, FSM, PortfolioThumb];

const HomeProjectSlideshow = () => {
  return (
    <div className='slide-container'>
      <p className='section-titles' id='home-section-title'>
        PROJECTS
      </p>
      <Zoom scale={0.4}>
        {slideImages.map((each, index) => (
          <img
            className='proj-slide-image'
            key={index}
            style={{ margin: "0 auto" }}
            src={each}
            alt='project images for homepage slideshow'
          />
        ))}
      </Zoom>
    </div>
  );
};

export default HomeProjectSlideshow;
