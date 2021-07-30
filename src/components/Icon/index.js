import "./icon.css";

const Icon = ({ icon, url }) => {
  return (
    <a href={url} rel="noreferrer" target="_blank">
      <div className="icon">{icon}</div>
    </a>
  );
};

export default Icon;
