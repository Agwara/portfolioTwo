import React from "react";
import {Link} from "react-router-dom"

import dashboardProject from "../../assets/dashboard.PNG"

const DashBoardProject = () => {
  return (
    <div className="project-container">
      <div className="project-container__description">
        <h1>Dashboard Project</h1>
        <p className="project-container__intro">
          A simple and effective dashboard that can be integrated to any web application.
        </p>

        <p className="project-container__details">
          This project demonstrate effective state management pattern, asynchronous data fetching, partial page rendering, and
          other best practices in React.js ecosystem. 
          You can login with any valid email and password. There is no authentication in the system.
          <Link 
            to={{pathname: "https://maxng-testagwara.herokuapp.com/"}} target={"_blank"} 
            className="project-container--link"
          >
            <br/>View Online
          </Link>
        </p>
      </div>

      <Link
        to={{pathname: "https://maxng-testagwara.herokuapp.com/"}} target={"_blank"} 
        className="project-container__image"
      >
        <img
          alt="Dashboard Project"
          src={dashboardProject}
          height="100%"
          width="100%"
        />
      </Link>

      <div className="project-container__technologies">
        <h3>Technologies</h3>

        <div className="technologies--list">
          <p>React</p>
          <p>HTMl</p>
          <p>CSS</p>
        </div>
      </div>
    </div>
  )
}

export default DashBoardProject;