import React from "react";
import { Projects } from "./Database.js";
import "../style/projects.scss";
import { GoLinkExternal, GoRepoForked } from "react-icons/go";

export default function Project() {
  return (
    <main className='projects'>
      <h1 className='page-header'>MY WORK</h1>
      <section>
        {Projects.map((project, i) => {
          return (
            <div className='projects-section' key={i}>
              <img
                src={project.image}
                className='project-image'
                alt='daniel pillay project thumbnails'
              ></img>
              <h2 className='project-title'>{project.name}</h2>
              <p className='project-description'>{project.description}</p>

              <div className='repo-div'>
                <a href={project.github} target='_blank' rel='noreferrer'>
                  <GoRepoForked
                    className='repo-icon'
                    color={"#008cba"}
                    size={"30px"}
                  />{" "}
                  <p className='repo-icon-text'>Repo</p>
                </a>
              </div>

              <div className='project-div'>
                <a href={project.link} target='_blank' rel='noreferrer'>
                  <GoLinkExternal
                    className='project-icon'
                    color={"#008cba"}
                    size={"30px"}
                  />{" "}
                  <p>Project</p>
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
