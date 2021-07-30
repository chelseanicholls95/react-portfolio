import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="details-container">
        <div className="details">Email: chelseanicholls1995@outlook.com</div>
        <div className="details">Phone: 07939206563</div>
        <div className="details">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/chelsea-nicholls95/"
            rel="noreferrer"
            target="_blank"
          >
            /chelsea-nicholls95
          </a>
        </div>
        <div className="details">
          GitHub:{" "}
          <a
            href="https://github.com/chelseanicholls95"
            target="_blank"
            rel="noreferrer"
          >
            /chelseanicholls95
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
