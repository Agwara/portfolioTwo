import React from "react";
import { connect } from "react-redux"
import {useHistory} from "react-router-dom";
import { setPageUrl } from "../../actions/pageUrl";

import "./Home.css";

const Home = (props) => {
  const history = useHistory();

  const goToPage = (url) => {
    props.setPageUrl(url)
    history.push(url);
    // window.location.reload();
  }

  return (
    <div className="home desktop-view-page">
      <div className="home__intro">
        <h1>Hi, I'm Nnaemeka,</h1>
        <p>a software engineer specialized <br/>in <strong>frontend</strong>.</p>
      </div>

      <div className="home__links">
        <p onClick={() => goToPage("/portfolio")} className="home__link--item">Portfolio</p>
        <p onClick={() => goToPage("/offer")} className="home__link--item">My Offer</p>
      </div>

    </div>
  )
}


const mapDispatchToProps = (dispatch) => ({
  setPageUrl: (url) => dispatch(setPageUrl(url))
});

export default connect(undefined, mapDispatchToProps)(Home);