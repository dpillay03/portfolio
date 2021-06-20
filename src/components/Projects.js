import React from "react";
import { Projects, otherProjects } from "./Database.js";
import "../style/projects.scss";
import { GoLinkExternal, GoRepoForked } from "react-icons/go";
import { FiCodepen } from "react-icons/fi";

export default function Project() {
  return (
    <main className='projects'>
      <h1 className='page-header'>MY WORK</h1>
      <section className='row project-section'>
        {Projects.map((project, i) => {
          return (
            <div className='projects-section col-sm-6' key={i}>
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
      <p className='section-header'>
        OTHER PROJECTS <FiCodepen size={"40px"} />
      </p>

      <section className='other-projects-container'>
        {otherProjects.map((otherProj, i) => {
          return (
            <div className='otherProj' key={i}>
              <a href={otherProj.link}>
                <img
                  src={otherProj.image}
                  alt='daniels other project images'
                  className='float-left otherProj-image'
                ></img>
              </a>
              <h2 className='otherProj-title'>{otherProj.name}</h2>
              <p className='otherProj-description pull-left mr-2'>
                {otherProj.description}
              </p>
              <div className='repo-div'>
                <a href={otherProj.github} target='_blank' rel='noreferrer'>
                  <GoRepoForked
                    className='repo-icon'
                    color={"#008cba"}
                    size={"30px"}
                  />{" "}
                  <p className='repo-icon-text'>Repo</p>
                </a>
              </div>

              <div className='project-div'>
                <a href={otherProj.link} target='_blank' rel='noreferrer'>
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
