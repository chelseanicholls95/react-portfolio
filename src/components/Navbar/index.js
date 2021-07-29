import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./Navbar.css";

const NavbarComponent = ({ onNavItemClick }) => {
  return (
    <Navbar className="navbar">
      <Navbar.Brand className="p-2 mx-5" href="#home">
        Logo
      </Navbar.Brand>
      <Nav className="p-1 mx-5">
        <Nav.Link
          className="mx-2 link"
          href="#home"
          name="home"
          onClick={onNavItemClick}
        >
          Home
        </Nav.Link>
        <Nav.Link
          className="mx-2 link"
          href="#about-me"
          name="aboutMe"
          onClick={onNavItemClick}
        >
          About Me
        </Nav.Link>
        <Nav.Link
          className="mx-2 link"
          href="#projects"
          name="projects"
          onClick={onNavItemClick}
        >
          Projects
        </Nav.Link>
        <Nav.Link
          className="mx-2 link"
          href="#contact"
          name="contact"
          onClick={onNavItemClick}
        >
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
