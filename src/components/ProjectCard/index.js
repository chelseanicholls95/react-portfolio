import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={project.image} />
      <Card.Body className="card-body">
        <Card.Title className="title">{project.title}</Card.Title>
        <Card.Text className="description">{project.description}</Card.Text>
        <Button className="button">{project.buttonLink}</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
