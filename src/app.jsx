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
      <p>??? adadadlsodadsdasda blah blah.</p>

      <div class="modal">
 Check it
 <input class="modal-open" id="modal-one" type="checkbox"/>
 <div class="modal-wrap" aria-hidden="true" role="dialog">
  <label class="modal-overlay" for="modal-one"></label>
  <div class="modal-dialog">
   <div class="modal-header">
    <h2>Modal in CSS?</h2>
     <label class="is-button cancel" for="modal-one" aria-hidden="true">×</label>
   </div>
   <div class="modal-body">
    <p>One modal example here</p>
   </div>
   <div class="modal-footer">
    <label class="is-button primary" for="modal-one">okay</label>
   </div>
  </div>
 </div>
</div>
    </div>
  </div>
);

export default App;
