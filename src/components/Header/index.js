import "./Header.css";
import image from "../../assets/images/my-image.jpg";

const Header = () => {
  return (
    <div className="main-container">
      <div className="header-container">
        <h1>
          I'm <span className="name">Chelsea</span> Nicholls
        </h1>
        <div>Full Stack Software Engineer | </div>
      </div>
    </div>
  );
};

export default Header;
