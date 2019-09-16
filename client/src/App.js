import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
// import logo from "./logo.svg";
// import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
      </Switch>
    </div>
  </Router>
);

export default App;
