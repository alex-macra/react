import React from "react";
import {Link} from "react-router-dom";

const Navigation: any = () => ( //this will be moved
  <header className="acc-main-nav sticky">
      <div className="acc-logo">
        <Link to="/">Logo</Link>
      </div>

    <nav className="acc-main-nav to-right">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
