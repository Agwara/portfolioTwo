import React from "react";
import {Link} from "react-router-dom"

import dashboardProject from "../../assets/contract.png"

const ContractManagement = () => {
  return (
    <div className="project-container">
      <div className="project-container__description">
        <h1>Pericius Tecnologies</h1>
        <p className="project-container__intro">
          Contract Management System
        </p>

        <p className="project-container__details">
        This tool helps our clients in managing arrangements between various partners, agents and other 
        contractual partners on the terms and conditions on providing services/products in partnership
          <Link 
            to={{pathname: "https://www.pericius.com/products"}} target={"_blank"} 
            className="project-container--link"
          >
            <br/>View Online
          </Link>
        </p>
      </div>

      <Link
        to={{pathname: "https://www.pericius.com/products"}} target={"_blank"} 
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

export default ContractManagement;