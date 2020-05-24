import React from "react";
import Landing from "./landing";
import Home from "./home";
import Header from "./common/header";
import Footer from "./common/footer";
import Login from "./login";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="main-container">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          {/* <Route component={Notfound} /> */}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
