import React from "react";
import {Link} from "react-router-dom"

import landingPage from "../../assets/landingPage.PNG";

const LandingPageProject = () => {
  return (
    <div className="project-container">
      <div className="project-container__description">
        <h1>Landing Page(Personal Project)</h1>
        <p className="project-container__intro">
          A highly responsive Landing Page.
        </p>

        <p className="project-container__details">
          This is just a mini project to show case my HTML and CSS skills.
          <Link 
            to={{pathname: "https://landing-page-e5w2ie5he-agwaras-projects.vercel.app/"}} target={"_blank"} 
            className="project-container--link"
          >
            <br/>View Online
          </Link>
        </p>
      </div>

      <Link
        to={{pathname: "https://landing-page-e5w2ie5he-agwaras-projects.vercel.app/"}} target={"_blank"} 
        className="project-container__image"
      >
        <img
          alt="Landing Page"
          src={landingPage}
          height="100%"
          width="100%"
        />
      </Link>

      <div className="project-container__technologies">
        <h3>Technologies</h3>

        <div className="technologies--list">
          <p>HTMl</p>
          <p>CSS</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPageProject;