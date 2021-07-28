import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Icon from "../Icon";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        <Icon icon={<FaGithubSquare />} />
        <Icon icon={<FaLinkedin />} />
        <Icon icon={<FaEnvelope />} />
      </div>
    </footer>
  );
};

export default Footer;
