import "./Header.css";
import image from "../../assets/images/my-image.jpg";

const Header = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img src={image} alt="developer" className="image" />
      </div>
      <div className="header-container">
        <h1>Chelsea Nicholls</h1>
      </div>
    </div>
  );
};

export default Header;
