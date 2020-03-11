import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { BubblePage } from "./components/BubblePage";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Bubbles</h1>
        <Switch>
          <PrivateRoute exact path="/bubbles" component={BubblePage} />
          <Route exact path="/" component={Login} />
        </Switch>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
