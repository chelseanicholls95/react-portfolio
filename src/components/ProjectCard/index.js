import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <Card className="card">
      <a href={project.imageLink} rel="noreferrer" target="_blank">
        <Card.Img src={project.image} className="card-image" />
      </a>
      <Card.Body className="card-body">
        <Card.Title className="title">{project.title}</Card.Title>
        <Card.Text className="description">{project.description}</Card.Text>
        <Button className="button" href={project.buttonLink} target="_blank">
          GitHub Repo
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
