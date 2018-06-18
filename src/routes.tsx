import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import App from "./app";
import Test from "./components/Test";
import SigninForm from './components/login/SigninForm';
import Navigation from './components/Navigation';

const Routes: any = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={App}/>
      <Route path="/test" component={Test}/>
      <Route path="/signin" component={SigninForm}/>
    </div>
  </Router>
);

export default Routes;
