import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
// import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "home",
    };
  }

  onClickHome = () => {
    this.setState = {
      view: "home",
    };
  };

  onClickAboutMe = () => {
    this.setState = {
      view: "aboutMe",
    };
  };

  render() {
    return (
      <div>
        <NavbarComponent
          onClickHome={this.onClickHome}
          onClickAboutMe={this.onClickAboutMe}
        />
        <Header />
        {this.state.view === "aboutMe" && <AboutMe />}
        {/* <Contact /> */}
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
