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
      </div>
    </div>
  );
};

export default Header;
