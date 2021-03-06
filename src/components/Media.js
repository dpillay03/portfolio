import React from "react";
import { Video } from "./Database.js";

export default class Media extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className='project'>
          <h1 className='page-header'>MEDIA</h1>
          <section className='row media-section'>
            {Video.map((media, i) => {
              return (
                <div className='projects-section col-sm-6' key={i}>
                  <a href={media.link}>
                    <img
                      src={media.image}
                      className='project-image'
                      alt='daniel pillay project thumbnails'
                    ></img>
                  </a>
                  <h2 className='media-title'>{media.name}</h2>
                </div>
              );
            })}
          </section>
          <div id='contact-button-container'>
            <a
              href='https://www.youtube.com/channel/UCJeru7Pd3DBcLOwXDWSt9vA'
              target='_blank'
              rel='noreferrer'
            >
              <button className='contact-btn' id='resume-btn'>
                See All Videos
              </button>
            </a>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
