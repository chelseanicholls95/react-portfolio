import ProjectCard from "../ProjectCard";

import "./Projects.css";

const Projects = ({ frontEndProjects }) => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      {frontEndProjects.map((projectInfo) => {
        return <ProjectCard project={projectInfo} />;
      })}
    </div>
  );
};

export default Projects;
