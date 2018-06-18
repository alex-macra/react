import React from "react";
import Navigation from "./components/Navigation";
import "normalize.css";

import "styles/base/_main.sass";  // global styles
import "styles/base/_common.sass";  // global styles

const App: any = () => (
  <div className="App">
    <div>
      <h1>testiiing</h1>
      <p>??? adadadlsodadsdasda blah blah.</p>

      <div className="modal">
 Check it
 <input className="modal-open" id="modal-one" type="checkbox"/>
 <div className="modal-wrap" aria-hidden="true" role="dialog">
  <label className="modal-overlay" htmlFor="modal-one"></label>
  <div className="modal-dialog">
   <div className="modal-header">
    <h2>Modal in CSS?</h2>
     <label className="is-button cancel" htmlFor="modal-one" aria-hidden="true">×</label>
   </div>
   <div className="modal-body">
    <p>One modal example here</p>
   </div>
   <div className="modal-footer">
    <label className="is-button primary" htmlFor="modal-one">okay</label>
   </div>
  </div>
 </div>
</div>
    </div>
  </div>
);

export default App;
