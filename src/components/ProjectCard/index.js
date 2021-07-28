import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import image from "../../assets/images/placeholder.jpg";

import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={image} />
      <Card.Body className="card-body">
        <Card.Title className="title">Project</Card.Title>
        <Card.Text className="description">Description of project</Card.Text>
        <Button className="button">GitHub Repo</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
