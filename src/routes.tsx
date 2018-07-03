import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import App from "./app";
import SigninForm from './components/login/SigninForm';
import Navigation from './components/navigation/Navigation';
import ModalSelector from './components/modal/ModalSelector';
import Tooltip from './components/tooltip/Tooltip';

const Routes: any = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={App} />
      <Route path="/signin" component={SigninForm} />
      <Route path="/modal" component={ModalSelector} />
      <Route path="/tooltip" component={Tooltip} />
    </div>
  </Router>
);

export default Routes;
