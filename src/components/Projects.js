import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
        title,
        date,
        place,
        language,
        description,
        projectType,
        link,
        tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <h1 id='project-header'>Projects sdf</h1>

      <section className='project-section'>
        {projectData &&
          projectData.map((project, index) => (
            <article className='project-article'>
              <h3 className='project-title'>
                <a
                  href={project.link}
                  alt={project.title}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {project.title}
                </a>
              </h3>
              <div>
                {/* <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>:{" "}
                    {project.place}
                  </span> */}
                <span>
                  <strong className='project-type'>Type</strong>:{" "}
                  {project.projectType}
                </span>
              </div>
              <p className='project-description'>{project.description}</p>
              <a
                href={project.link}
                rel='noopener noreferrer'
                target='_blank'
                className='view-project-link'
              >
                View The Project{" "}
                <span role='img' aria-label='right pointer'></span>
              </a>
            </article>
          ))}
      </section>
    </main>
  );
}
