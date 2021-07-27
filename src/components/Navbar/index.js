import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./Navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" variant="light" className="navbar">
      <Navbar.Brand className="p-2 mx-5" href="#home">
        Logo
      </Navbar.Brand>
      <Nav className="p-1 mx-5">
        <Nav.Link className="mx-2" href="#home">
          Home
        </Nav.Link>
        <Nav.Link className="mx-2" href="#about-me">
          About Me
        </Nav.Link>
        <Nav.Link className="mx-2" href="#contact">
          Contact
        </Nav.Link>
        <Nav.Link className="mx-2" href="#projects">
          Projects
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
