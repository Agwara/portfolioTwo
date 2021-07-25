import React from "react";
import {useHistory} from "react-router-dom";
import { connect } from "react-redux";
import { setPageUrl } from "../../actions/pageUrl";

import ContactIcons from "../ContactIcons/ContactIcons";

import agwara from "../../assets/Agwara.jpg";
import menuBar from "../../assets/bars-solid.svg";
import "./MobileSideNav.css";

const MobileSideNav = (props) => {
  const [openDropDown, setOpenDropDown] = React.useState(false);
  const history = useHistory();


  const goHome = (url) => {
    props.setPageUrl(url);
    history.push(url)
    setOpenDropDown(false)
  }

  const goToContact = (url) => {
    props.setPageUrl(url);
    history.push(url)
    setOpenDropDown(false)
  }

  const goToOffer = (url) => {
    props.setPageUrl(url);
    history.push(url)
    setOpenDropDown(false)
  }

  const goToPortfolio = (url) => {
    props.setPageUrl(url);
    history.push(url)
    setOpenDropDown(false)
  }

  const goToCV = (url) => {
    props.setPageUrl(url);
    history.push(url);
    setOpenDropDown(false)
  }

  return (
    <div className={props.pageUrl === "/" ? "mobile-nav__trans" : "mobile-nav__solid"}>
      {
        props.pageUrl !== "/" ? 
          <div className="mobile-nav__profile" onClick={() => goHome("/")}>
            <img
              alt=""
              src={agwara}
              height="130"
              width="130"
              className="mobile-nav--img"
            />
            <h2>AGWARA NNAEMEKA</h2>
            <h3>FRONT-END SOFTWARE ENGINEER</h3>
          </div> : ""
      }

      <div className="mobile-nav__control">
        <ContactIcons />
        <img
          alt=""
          src={menuBar} 
          width="25"
          height="25"
          onClick={() => setOpenDropDown(!openDropDown)}
        />
      </div>
      <div className={openDropDown ? "open-drop-down" : "close-drop-down"}>
        <ul className="mobile-nav__list">
          <li onClick={() => goToPortfolio("/portfolio")}>
            <p>Portfolio</p>
          </li>

          <li onClick={() => goToOffer("/offer")}>
            <p>My Offer</p>
          </li>

          <li onClick={() => goToContact("/contact-me")}>
            <p>Contact Me</p>
          </li>

          <li onClick={() => goToCV("/my-cv")}>
            <p>My CV</p>
          </li>
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(MobileSideNav);