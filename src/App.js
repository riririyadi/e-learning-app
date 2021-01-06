import React, { useState, createContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NewLayout from "./components/NewLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import NotMatch from "./components/NotMatch";
import About from "./components/About";
import Help from "./components/Help";
import ForgotPassword from "./components/ForgotPassword";
import "./App.css";

const LoginRoute = () => {
  return(
    <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/login/forgot-password" component={ForgotPassword} />
    
      </Switch>
    )
}

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={SignUp} />
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <Route path="/login"><LoginRoute/></Route>
        <Route path="/u" component={NewLayout} />
        <Route path="*" component={NotMatch} />
      </Switch>
    </div>
  );
}

export default App;
