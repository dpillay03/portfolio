import React, { Component } from "react";
import Projects from "./Database";
import "../../style/projects.scss";
import { TiSocialGithubCircular, TiFlash } from "react-icons/ti";
export default class ProjectList extends Component {
  render() {
    const listProjects = Projects.map((proj, i) => {
      function GitCheck() {
        console.log(proj.github);
        if (proj.github === undefined) {
          return (
            <a className='project-link' id='githubLink' href={proj.github}>
              <TiSocialGithubCircular
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
            <TiSocialGithubCircular
              size={30}
              className='githubProjIcon'
              style={{ verticalAlign: "middle", marginRight: "7px" }}
            />
            Github
          </a>
        );
      }
      return (
        <li className='project' key={i}>
          <figure>
            <img
              className='project-image'
              src={proj.image}
              alt={proj.alt}
            ></img>
            <figcaption>
              <h3>{proj.name}</h3>
            </figcaption>
          </figure>
          <p className='project-description'>{proj.description}</p>
          <p className='project-built'>Built with: {proj.built}</p>
          <a className='project-link' href={proj.link}>
            <TiFlash
              size={30}
              className='githubProjIcon'
              style={{ verticalAlign: "middle", marginRight: "15px" }}
            />
            Website
          </a>
          <GitCheck />
        </li>
      );
    });
    return <ul>{listProjects}</ul>;
  }
}
