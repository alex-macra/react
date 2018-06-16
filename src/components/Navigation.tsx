import React from "react";
import {Link} from "react-router-dom";

const Navigation: any = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/test">test</Link></li>
      <li><Link to="/signin">Signin Form</Link></li>
    </ul>
  </div>
);

export default Navigation;
