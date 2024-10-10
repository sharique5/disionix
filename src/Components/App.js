import React from "react";
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

import About from "./Pages/AboutPage";
import BlogDetails from "./Pages/BlogDetails";
import ContactUs from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import ProjectDetails from "./Pages/ProjectDetails";
import ServiceDetails from "./Pages/ServiceDetails";
import Footer from "./Utilities/Footer";
import Header from "./Utilities/Header";
import MosqueSeekPrivacy from "./Pages/MosqueSeekPrivacy";

const App = () => {
  return (
    <Router>
      <div className="page-wrapper">


        <Header />

        <Switch>

          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/service-details'} component={ServiceDetails} />
          <Route exact path={'/project-details'} component={ProjectDetails} />
          <Route exact path={'/blog-details'} component={BlogDetails} />
          <Route exact path={'/mosqueseek/privacy'} component={MosqueSeekPrivacy} />
          <Route exact path={'/contact'} component={ContactUs} />

        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
