import "./AboutMe.css";
import image from "../../assets/images/my-image.jpg";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={image} alt="developer" className="image" />
      </div>
      <div className="text-container">
        <h2>About Me</h2>
        <div>
          <p>
            Hi! I'm Chelsea Nicholls and I am an aspiring Full Stack Software
            Engineer. I graduated from the University of Birmingham Full Stack
            Web Development Coding Bootcamp in 2021 where I became proficient in
            HTML, CSS, Javascript and the MERN stack. Since then I have had a
            baby and I am now ready to enter the workforce as a Software
            Engineer. I have been keeping my skills up to date by completing
            online activities and creating small personal projects.
          </p>
          <p>
            Back in 2018, I graduated from University with a degree in Forensic
            Psychology and had realised that it was not the field that I wanted
            to go into. I had really enjoyed the data analysis and
            problem-solving side of the degree and I decided I wanted a more
            technical career. Fast forward to the start of the pandemic and I
            found an online course which taught the basics of HTML, CSS and
            JavaScript. I immediately fell in love and knew this was the career
            path for me. I love that web development is a field that is always
            expanding and there is always something new to learn. I plan to
            continue to expand my knowledge of varying languages after I have
            completed the bootcamp.
          </p>
          <p>
            I have a variety of other interests including cooking, walking and
            anything true crime related – podcasts, documentaries, YouTube
            videos! I love to travel and explore new places, meet new people and
            embrace new cultures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
