import React from "react";
import {Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import NotMatch from "./components/NotMatch";
import About from "./components/About";
import Help from "./components/Help";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <Route path="/login" component={Login} />
        <Route path="/u" component={Layout} />
        <Route path="*" component={NotMatch}/>
      </Switch>
    </div>
  );
}

export default App;
