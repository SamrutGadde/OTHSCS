import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Events from "./pages/events";
import Resources from "./pages/resources";
import PageNotFound from "./pages/pagenotfound";
import About from "./pages/about";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
function App(props) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/resources" component={Resources} exact />
        <Route path="/events" component={Events} exact />
        <Route component={About} exact />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
