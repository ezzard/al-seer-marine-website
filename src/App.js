import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Run from "./Run";
import Explore from "./pages/Explore";
import Create from "./pages/Create";
import Own from "./pages/Own";
import Crew from "./pages/Crew";
import See from "./pages/See";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/run" component={Run} />
          <Route path="/explore" component={Explore} />
          <Route path="/create" component={Create} />
          <Route path="/own" component={Own} />
          <Route path="/crew" component={Crew} />
          <Route path="/see" component={See} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
