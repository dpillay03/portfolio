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
                style={{ verticalAlign: "middle", marginRight: "7px" }}
              />
              No Github
            </a>
          );
        }
        return (
          <a className='project-link' id='githubLink' href={proj.github}>
            <FaGithubSquare
              size={30}
              className='githubProjIcon'
              style={{ verticalAlign: "middle", marginRight: "7px" }}
            />
            Github
          </a>
        );
      }
      return (
        <section className='content-wrapper'>
          <div className='two-col-container' key={i}>
            <div className='two-col'>
              <img
                className='project-image'
                src={proj.image}
                alt={proj.alt}
              ></img>
            </div>
            <div className='two-col'>
              <h3>{proj.name}</h3>
              <p className='project-description'>{proj.description}</p>
              <p className='project-built'>Built with: {proj.built}</p>
              <a className='project-link' href={proj.link}>
                <AiOutlineFolderView
                  size={30}
                  className='githubProjIcon'
                  style={{ verticalAlign: "middle", marginRight: "15px" }}
                />
                Website
              </a>
              <GitCheck />
            </div>
          </div>
        </section>
      );
    });
    return <ul>{listProjects}</ul>;
  }
}
