import ProjectCard from "../ProjectCard";

import "./Projects.css";

const Projects = ({ frontEndProjects, backEndProjects }) => {
  return (
    <div className="projects-container">
      <h1>Front End Projects</h1>
      <div className="cards-container">
        {frontEndProjects.map((projectInfo) => {
          return <ProjectCard project={projectInfo} />;
        })}
      </div>
      <h1>Back End Projects</h1>
      <div className="cards-container">
        {backEndProjects.map((projectInfo) => {
          return <ProjectCard project={projectInfo} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
