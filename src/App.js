import React from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import NewLayout from "./components/NewLayout";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SignUpSucceed from "./components/SignUpSucceed";
import LandingPage from "./components/LandingPage";
import NotMatch from "./components/NotMatch";
import About from "./components/About";
import Help from "./components/Help";
import ForgotPassword from "./components/ForgotPassword";
import jwt from "jsonwebtoken";
import "./App.css"; 

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  
  return true;
};

 const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkToken() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )
    }
  />
);



function LoginRoute() {
  const match = useRouteMatch();
  return(
    <Switch>
        <Route exact path={`${match.path}`} render={(props) => <Login {...props} />} />
        <Route path={`${match.path}/forgot-password`} render={(props) => <ForgotPassword {...props} />} />
      </Switch>
    )
}

function SignUpRoute() {
  const match = useRouteMatch();
  return(
    <Switch>
        <Route exact path={`${match.path}`} render={(props) => <SignUp {...props} />} />
        <Route path={`${match.path}/kfjHFsnf/redirecting`} render={(props) => <SignUpSucceed {...props} />} />
      </Switch>
    )
}

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route path="/register"><SignUpRoute/></Route>
        <Route path="/about"render={(props) => <About {...props} />} />
        <Route path="/help" render={(props) => <Help {...props} />} />
        <Route path="/login"><LoginRoute/></Route>
        <ProtectedRoute path="/u" component={NewLayout} />
        <Route path="*" component={NotMatch} />
      </Switch>
    </div>
  );
}

export default App;
