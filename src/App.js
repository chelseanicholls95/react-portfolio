import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "home",
    };
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <Header />
        {this.state.view === "aboutMe" && <AboutMe />}
        <Footer />
      </div>
    );
  }
}

export default App;
