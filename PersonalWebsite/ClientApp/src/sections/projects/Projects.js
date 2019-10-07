import React from 'react';
import ProjectsDesc from './ProjectsDesc';
import ProjectsContainer from './ProjectsContainer';
//import './Projects.scss';

function Projects() {
  return (
    <section className="Projects row align-items-center">
      <ProjectsDesc/>
      <ProjectsContainer/>
    </section>
  );
}

export default Projects;