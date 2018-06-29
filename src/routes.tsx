import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import App from "./app";
import SigninForm from './components/login/SigninForm';
import Navigation from './components/navigation/Navigation';
import ModalComponent from './components/modal/ModalText';
import ModalSelector from './components/modal/ModalSelector';

const Routes: any = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={App} />
      <Route path="/signin" component={SigninForm} />
      <Route path="/modal" component={ModalSelector} />
    </div>
  </Router>
);

export default Routes;
