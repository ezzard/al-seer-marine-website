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
import Join from "./pages/Join";
import Ask from "./pages/Ask";
import Footer from "./components/Footer";

import "./App.scss";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="" exact component={Home} />
          <Route path="/run" component={Run} />
          <Route path="/explore" component={Explore} />
          <Route path="/create" component={Create} />
          <Route path="/own" component={Own} />
          <Route path="/crew" component={Crew} />
          <Route path="/see" component={See} />
          <Route path="/join" component={Join} />
          <Route path="/ask" component={Ask} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
