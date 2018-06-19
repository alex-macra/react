import React from "react";
import {Link} from "react-router-dom";

const Navigation: any = () => (
  <nav className="main">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/signin">Signin Form</Link></li>
    </ul>
  </nav>
);

export default Navigation;
