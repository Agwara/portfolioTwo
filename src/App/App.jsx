import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ContactMe from "../pages/ContactMe/ContactMe"
import Home from "../pages/Home/Home";
import MyCV from "../pages/MyCV/MyCV";
import Offer from "../pages/Offer/Offer";
import Portfolio from "../pages/Portfolio/Portfolio";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import SideNav from "../component/SideNav/SideNav";

import "./App.css";

const App = () => {
  
  return (
    <Router>
      <div className="router-container">
        <SideNav />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/contact-me" component={ContactMe} />

          <Route exact path="/my-cv" component={MyCV} />

          <Route exact path="/offer" component={Offer} />

          <Route exact path="/portfolio" component={Portfolio}/>

          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;