import React from "react";
import ProjectList from "./ProjectList";

export default function Project() {
  return (
    <React.Fragment>
      <section id='page'>
        <h1 className='section-titles'>
          <span id='my-mission'>PROJECTS</span>
        </h1>
        <section className='project-section' id='project-section'>
          <ProjectList />
        </section>
      </section>
    </React.Fragment>
  );
}
