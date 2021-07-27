import React from "react";
import {Link} from "react-router-dom"

import foodApp from "../../assets/fastFoodApp.PNG";

const FastFoodProject = () => {
  return (
    <div className="project-container">
      <div className="project-container__description">
        <h1>Fast Food App</h1>
        <p className="project-container__intro">
          Domino fast food clone.
        </p>

        <p className="project-container__details">
          This project is a clone to the this domino pizza website: <span>
            <Link
              to={{pathname: "https://www.dominos.ng/"}} target={"_blank"} 
              className="project-container--link" 
            >dominos.ng</Link>. Although it is still a work in  progress.
          </span>
          <Link 
            to={{pathname: "https://domino-client.herokuapp.com/"}} target={"_blank"} 
            className="project-container--link"
          >
            <br/>View Online
          </Link>
        </p>
      </div>

      <Link
        to={{pathname: "https://domino-client.herokuapp.com/"}} target={"_blank"} 
        className="project-container__image"
      >
        <img
          alt="Landing Page"
          src={foodApp}
          height="100%"
          width="100%"
        />
      </Link>

      <div className="project-container__technologies">
        <h3>Technologies</h3>

        <div className="technologies--list">
          <p>React</p>
          <p>Redux</p>
          <p>HTMl</p>
          <p>CSS</p>
        </div>
      </div>
    </div>
  )
}

export default FastFoodProject;