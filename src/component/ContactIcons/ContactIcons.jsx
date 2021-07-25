import React from "react";
import {Link} from "react-router-dom"

import linkedIn from "../../assets/linkedin-brands.svg";
import gitHub from "../../assets/github-brands.svg";
import facebook from "../../assets/facebook-square-brands.svg";

import "./ContactIcons.css";

const ContactIcons = () => {
  return (
    <div className="contact-icons">
      <Link to={{pathname: "https://www.linkedin.com/in/agwara-nnaemeka-296780176/"}} target={"_blank"}>
        <img
          alt=""
          src={linkedIn}
          height="25"
          width="25"
        />
      </Link>

      <Link to={{pathname: "https://github.com/agwara"}} target={"_blank"}>
        <img
          alt=""
          src={gitHub}
          height="25"
          width="25"
        />
      </Link>

      <Link to={{pathname: "https://facebook.com/nnaemeka.agwaraogwo"}} target={"_blank"}>
        <img
          alt=""
          src={facebook}
          height="25"
          width="25"
        />
      </Link>
    </div>
  )
}

export default ContactIcons;