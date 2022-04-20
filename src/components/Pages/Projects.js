import React from "react";
import Projects from "../modules/Database";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineFolderView } from "react-icons/ai";

export default class Project extends React.Component {
  render() {
    const listProjects = Projects.map((proj, i) => {
      function GitCheck() {
        console.log(proj.github);
        if (proj.github === undefined) {
          return (
            <a className='project-link' id='githubLink' href={proj.github}>
              <FaGithubSquare
                size={30}
                className='githubProjIcon'
                color={"#a4a4a4;"}
                style={{ display: "none" }}
              />
            </a>
          );
        }
        return (
          <a className='project-link' id='githubLink' href={proj.github}>
            <FaGithubSquare
              size={30}
              className='githubProjIcon'
              color={"#a4a4a4;"}
              style={{ verticalAlign: "middle", marginRight: "7px" }}
            />
            Github
          </a>
        );
      }
      return (
        <section className='content-wrapper'>
          <div className='two-col-container' key={i}>
            <div className='two-col projects-card'>
              <img
                className='project-image'
                src={proj.image}
                alt={proj.alt}
              ></img>
            </div>
            <div className='two-col projects-card'>
              <h3 className='project-title'>{proj.name}</h3>
              <p className='project-description'>{proj.description}</p>
              <p className='project-built'>Built with: {proj.built}</p>
              <div className='project-link-container'>
                <a className='project-link' href={proj.link}>
                  <AiOutlineFolderView
                    size={30}
                    className='githubProjIcon'
                    color={"#a4a4a4;"}
                    style={{ verticalAlign: "middle", marginRight: "15px" }}
                  />
                  View Project
                </a>
                <GitCheck />
              </div>
            </div>
          </div>
        </section>
      );
    });
    return (
      <React.Fragment>
        <h1 className='header-centered'>PORFTOLIO</h1>
        <ul>{listProjects}</ul>
      </React.Fragment>
    );
  }
}
