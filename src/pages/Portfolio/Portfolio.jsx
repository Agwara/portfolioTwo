import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { setPageUrl } from "../../actions/pageUrl";
import DashBoardProject from "../../component/DashBoardProject/DashBoardProject";
import LandingPageProject from "../../component/LadingPageProject/LandingPageProject";
import FastFoodProject from "../../component/FastFoodProject/FastFoodProject";
import ContractManagement from "../../component/ContractManagement/ContractManagement";

import "./Portfolio.css";

const Portfolio = (props) => {

  const goToPage = (url) => {
    props.setPageUrl(url)
  }

  return (
    <div className="portfolio desktop-page-view">
      <h1 className="portfolio__header">Portfolio</h1>
      
      <ul className="portfolio__list">
        <li className="portforlio__timeline--element">
          <div className="timeline__indicator"></div>
          <div className="portfolio__timeline">Now</div>
          <div className="portfolio__timeline--content">
            <div className="project__description">
              <strong>
                Currently open to co-operation on new and existing projects.
              </strong>
              <br/>Looking for a front-end developer to join your team?
              <p onClick={() => goToPage("/contact-me")}><Link to="/contact-me" className="portfolio__contact-me">
                Contact me</Link>. I will answer you in ~ 24 hours.
              </p>
            </div>
          </div>
        </li>

        

        <li className="portforlio__timeline--element">
          <div className="timeline__indicator"></div>
          <div className="portfolio__timeline">2022</div>
          <div className="portfolio__timeline--content">
            <ContractManagement />
          </div>
        </li>


        <li className="portforlio__timeline--element">
          <div className="timeline__indicator"></div>
          <div className="portfolio__timeline">2021</div>
          <div className="portfolio__timeline--content">
            <FastFoodProject />
          </div>
        </li>

        <li className="portforlio__timeline--element">
          <div className="timeline__indicator"></div>
          <div className="portfolio__timeline">2021</div>
          <div className="portfolio__timeline--content">
           <DashBoardProject />
          </div>
        </li>

        <li className="portforlio__timeline--element">
          <div className="timeline__indicator"></div>
          <div className="portfolio__timeline">2021</div>
          <div className="portfolio__timeline--content">
            <LandingPageProject />
          </div>
        </li>

        <li className="portforlio__timeline--element">
          <div className="timeline__indicator"></div>
          <div className="portfolio__timeline">2020</div>
          <div className="portfolio__timeline--content">
            <div className="project__description">
              <p onClick={() => goToPage("/my-cv")}>
                From October 2020 to August 2021, I worked for REDPOSITIVE SERVICE OPC based India. The work was
                done remotely. This gave me a lot of experience and hindsight on how a proper team collaboration,
                and project management process should look like. 
                See <a className="project-container--link" href="/AgwaraNnaemeka.pdf" target="_blank">my CV</a> for more details.
              </p>

               
            </div>
          </div>
        </li>

        {/* 
        <li className="portforlio__timeline--element">
          <div className="timeline__indicator"></div>
          <div className="portfolio__timeline"></div>
          <div className="portfolio__timeline--content">
          </div>
        </li> */}
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setPageUrl: (url) => dispatch(setPageUrl(url))
});

export default connect(undefined, mapDispatchToProps)(Portfolio);
