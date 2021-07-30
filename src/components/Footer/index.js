import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Icon from "../Icon";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        <Icon
          url="https://github.com/chelseanicholls95"
          icon={<FaGithubSquare />}
        />
        <Icon
          url="https://www.linkedin.com/in/chelsea-nicholls95/"
          icon={<FaLinkedin />}
        />
        <Icon
          url="mailto:chelseanicholls1995@outlook.com"
          icon={<FaEnvelope />}
        />
      </div>
    </footer>
  );
};

export default Footer;
