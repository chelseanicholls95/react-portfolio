import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Icon from "../Icon";

import "./Header.css";

const Header = () => {
  return (
    <div className="main-container">
      <div className="header-container">
        <h1>I'm Chelsea Nicholls</h1>
        <div className="subheading">Full Stack Software Engineer</div>
        <div className="icons">
          <Icon icon={<FaGithubSquare />} />
          <Icon icon={<FaLinkedin />} />
          <Icon icon={<FaEnvelope />} />
        </div>
      </div>
    </div>
  );
};

export default Header;
