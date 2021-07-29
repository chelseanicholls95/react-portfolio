import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import sightsAndSounds from "./assets/images/sights&sounds.png";
import codeQuiz from "./assets/images/code-quiz.png";
import weatherDashboard from "./assets/images/weather-dashboard.png";
import codemon from "./assets/images/codemon.png";
import dishUp from "./assets/images/dishup.png";

import "./App.css";

const App = () => {
  const [view, setView] = useState("home");

  const onNavItemClick = (event) => {
    const { name } = event.currentTarget;

    setView(name);
  };

  const frontEndProjects = [
    {
      image: sightsAndSounds,
      imageLink: "https://chelseanicholls95.github.io/event-planner/",
      title: "Sights & Sounds",
      description:
        "Sights & Sounds allows you to easily find events and venues, based on your selected location. You can then save the ones you are interested in to your wishlist and - Voila! Your weekend plans are already looking a lot more exciting! Created using HTML, CSS, JavaScript and jQuery and gathering information from Foursquare Places API and Ticketmaster API.",
      buttonLink: "https://github.com/chelseanicholls95/event-planner",
    },
    {
      image: codeQuiz,
      imageLink: "https://chelseanicholls95.github.io/code_quiz/",
      title: "Code Quiz",
      description:
        "A challenging quiz to test your knowledge of code! Dynamically rendered HTML displays each question after the previous question has been answered. Created with HTML, CSS and JavaScript.",
      buttonLink: "https://github.com/chelseanicholls95/code_quiz",
    },
    {
      image: weatherDashboard,
      imageLink: "https://chelseanicholls95.github.io/weather_dashboard/",
      title: "Weather Dashboard",
      description:
        "Check the weather for any city of your choosing using this weather dashboard. Created using HTML, CSS, JavaScript and jQuery as well as the Open Weather API.",
      buttonLink: "https://github.com/chelseanicholls95/weather_dashboard",
    },
  ];

  const backEndProjects = [
    {
      image: codemon,
      imageLink: "https://fathomless-dusk-01596.herokuapp.com/",
      title: "Codemon",
      description:
        "A full stack tech blog where users can sign up, log in and create posts, comment on others posts and edit and delete their own contributions. Created with HTML, CSS, JavaScript, jQuery, Handlebars, Express, Node.js, Sequelize and Bootstrap.",
      buttonLink: "https://github.com/chelseanicholls95/mvc-tech-blog",
    },
    {
      image: dishUp,
      imageLink: "https://blooming-tundra-91244.herokuapp.com/",
      title: "DishUp",
      description:
        "A meal planning app to make your life as simple as possible, whilst enjoying delicious food. DishUp provides users the ability to easily search for food, using a range of possible filters for dietary requirements and intolerances. These meals can be saved to meal plans on the user profile, so they can be easily referred back to in the future. Created with HTML, CSS, JavaScript, jQuery, Handlebars, Express, Node.js, Sequelize and Bootstrap.",
      buttonLink: "https://github.com/chelseanicholls95/dish-up",
    },
  ];

  return (
    <div>
      <NavbarComponent onNavItemClick={onNavItemClick} />
      <Header />
      {view === "aboutMe" && <AboutMe />}
      {view === "projects" && (
        <Projects
          frontEndProjects={frontEndProjects}
          backEndProjects={backEndProjects}
        />
      )}
      {view === "contact" && <Contact />}
      <Footer />
    </div>
  );
};

export default App;
