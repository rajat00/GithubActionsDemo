import React from "react";
import "./App.css"; // Import your CSS file for styling

const App = () => {
  return (
    <div id="conteneur-id">
      <div id="conteneur-menu">
        {/* <div className="menu">
          <ul>
            <li>
              <a href="#conteneur-home">HOME</a>
            </li>
            <li>
              <a href="#conteneur-about">ABOUT</a>
            </li>
            <li>
              <a href="#conteneur-skills">SKILLS</a>
            </li>
            <li>
              <a href="#conteneur-qualification">Qualification</a>
            </li>
            <li>
              <a href="#conteneur-portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#conteneur-contact">CONTACT</a>
            </li>
          </ul>
        </div> */}
      </div>
      {/* <div id="conteneur-home">
        <div className="home">
          <h1>Your Name</h1>
          <h2>webmaster</h2>
        </div>
      </div> */}
      <div id="conteneur-about">
        <div className="about">
          <div className="profil-photo">
            <img
              src="https://rishabh-demo-1.s3.ap-south-1.amazonaws.com/IMG_20230419_152425_900.jpg"
              alt="Profile"
              referrerPolicy="origin"
            />
          </div>
          <div className="profil-text">
            <h1>Hello</h1>
            <img
              src="https://uploads-ssl.webflow.com/5fd33d12654aaaf1a7c75db2/625eede123049516ff613737_N27-logo.svg"
              alt="north27"
              referrerPolicy="origin"
            />
            <ul class="go-down">
              <li>
                I am Rishabh Shukla, a seasoned Full Stack Web Developer with
                over 5 years of hands-on experience in crafting robust web
                applications.
              </li>
              <li>
                My expertise lies in the dynamic world of React, Node.js, MySQL,
                PostgreSQL, MongoDB, Docker, REST, and GraphQL technologies.
              </li>
              <li>
                I am passionate about delivering high-quality solutions that not
                only meet but exceed client expectations.
              </li>
            </ul>

            {/* <a href="#">Download CV</a> */}
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
