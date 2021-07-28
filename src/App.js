import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

import "./App.css";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
