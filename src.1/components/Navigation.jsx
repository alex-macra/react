import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
  <div>
    <ul>
      <li><Link to="/">Homde</Link></li>
      <li><Link to="/test">test</Link></li>
    </ul>
  </div>
);

export default Navigation;
