import React from "react";
import {Link} from "react-router-dom";

import "./ContactMe.css";

// I USED SOME CLASSNAME STYLES FROM THE OFFER COMPONENT 

const ContactMe = () => {
  return (
    <div className="contact-me desktop-page-view">
      <h1 className="offer__heading">Contact Me</h1>
      <p className="contact__p-text">
        I am available for hire and open to any ideas of cooperation.
      </p>

      <div className="contact__links">
        <p className="contact__p-text">Email: </p>
        <p className="contact__links--red">nnaemekaagwara@gmail.com</p>
      </div>

      <div className="contact__links">
        <p className="contact__p-text">LinkedIn: </p>
        <Link 
          className="contact__links--red" 
          to={{pathname: "https://www.linkedin.com/in/agwara-nnaemeka-296780176/"}} target={"_blank"}>
          nnaemekaagwara
        </Link>
      </div>

      <div className="contact__links">
        <p className="contact__p-text">GitHub: </p>
        <Link className="contact__links--red" to={{pathname: "https://github.com/agwara"}} target={"_blank"}>agwara</Link>
      </div>

      <div className="contact__links">
        <p className="contact__p-text">Facebook: </p>
        <Link 
          className="contact__links--red"
          to={{pathname: "https://facebook.com/nnaemeka.agwaraogwo"}} 
          target={"_blank"}
        >
          nnaemekaagwara
        </Link>
      </div>

      <div className="contact__links">
        <p className="contact__p-text">Phone: </p>
        <p className="contact__links--red">+2347064839441</p>
      </div>

    </div>
  )
}

export default ContactMe;