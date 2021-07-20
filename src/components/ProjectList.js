import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map( (projectName) => {
          return (
            <ProjectItem 
              name={projectName.name} 
              about={projectName.about} 
              technologies={projectName.technologies} 
              key={projectName.id}
              />
          )
        })}
      </div>
    </div>
  );
}

export default ProjectList;
