import React from 'react';
import Navigation from './components/Navigation';
import 'normalize.css';

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles

const App = () => (
  <div className='App'>
    <Navigation/>
    <div>
      <h1>testiiing</h1>
      <p>??? also blah blah.</p>
    </div>
  </div>
);

export default App;
