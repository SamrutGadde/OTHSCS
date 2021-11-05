import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Resources from "./pages/resources";
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
      </Switch>
    </Router>
  );
}

export default App;
