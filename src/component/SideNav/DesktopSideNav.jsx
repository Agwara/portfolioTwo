import React from "react";
import { connect } from "react-redux";
import { setPageUrl } from "../../actions/pageUrl";
import {useHistory } from "react-router-dom";

import ContactIcons from "../ContactIcons/ContactIcons";
import "./DesktopSideNav.css";

import agwara from "../../assets/Agwara.jpg";

const DesktopSideNav = (props) => {
  const history = useHistory();

  React.useEffect(() => {
    props.setPageUrl(history.location.pathname)
  })

  const goHome = (url) => {
    props.setPageUrl(url);
    history.push(url); 
  }

  const goToContact = (url) => {
    props.setPageUrl(url)
    history.push(url);
  }

  const goToOffer = (url) => {
    props.setPageUrl(url);
    history.push(url);
  }

  const goToPortfolio = (url) => {
    props.setPageUrl(url);
    history.push(url);
  }

  // const goToCV = (url) => {
  //   props.setPageUrl(url)
  //   history.push(url);
  // }

  // const goToCV = (url) => {
  //   props.setPageUrl(url)
  // }

  return (
    <div className="desktop-nav">
      <div className="desktop-nav__profile" onClick={() => goHome("/")}>
        <img
          alt=""
          src={agwara}
          height="150"
          width="150"
          className="desktop-nav--img"
        />
        <h2>AGWARA NNAEMEKA</h2>
        <h3>FRONT-END ENGINEER</h3>
      </div>

      <ul className="desktop-nav__list">
        <li onClick={() => goToPortfolio("/portfolio")}>
          <p className={props.pageUrl === "/portfolio" ? "desktop-nav__list--link activelink" : 
            "desktop-nav__list--link not-activelink"}>
            Portfolio
          </p>
          {props.pageUrl === "/portfolio" ? <div className="desktop-nav__link--angle"></div> : <div></div>}
        </li>

        <li onClick={() => goToOffer("/offer")}>
          <p 
            className={props.pageUrl === "/offer" ? "desktop-nav__list--link activelink" : 
            "desktop-nav__list--link not-activelink"}
          >
            My Offer
          </p>
          {props.pageUrl === "/offer" ? <div className="desktop-nav__link--angle"></div> : <div></div>}
        </li>

        <li onClick={() => goToContact("/contact-me")}>
          <p 
            className={props.pageUrl === "/contact-me" ? "desktop-nav__list--link activelink" : 
            "desktop-nav__list--link not-activelink"}
          >
            Contact Me
            </p>
          {props.pageUrl === "/contact-me" ? <div className="desktop-nav__link--angle"></div> : <div></div>}
        </li>

        {/* <li onClick={() => goToCV("/my-cv")}>
          <p className={props.pageUrl === "/my-cv" ? "desktop-nav__list--link activelink" : 
            "desktop-nav__list--link not-activelink"}>
            My CV
          </p>
          {props.pageUrl === "/my-cv" ? <div className="desktop-nav__link--angle"></div> : <div></div>}
        </li> */}

        <li>
          <a className="desktop-nav__cv-link"
            href="/AgwaraNnaemeka.pdf" 
            target="_blank"
          >
            View CV
          </a>
        </li>
      </ul>

      <div className="desktop-nav__contact">
        <p className="desktop-nav__contact--text">Get In Touch</p>
        <ContactIcons />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
	pageUrl: state.pageUrl,
});

const mapDispatchToProps = (dispatch) => ({
  setPageUrl: (url) => dispatch(setPageUrl(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopSideNav);