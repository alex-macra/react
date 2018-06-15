import React from "react";
import Navigation from "./Navigation";
const Test: any = () => (
  <div className="testPage">
    <Navigation/>
    <div>
    <button type="button" className="primary">primary button</button>
 <button type="button" className="secondary">secondary button</button>
 <button type="button" className="error">error</button>
 <button type="button" className="go">proceed</button>
 <button type="button">greyed (default button)</button>
 <button type="button" disabled>disabled button</button>
 <button type="button" className="cancel">transparent button</button>
 <button className="pink">Pink buttom</button>


<div className="tooltip">
    <h5>upper right tooltip <i className="acc-info-icon top-right" data-tooltip="this is tooltip">i</i></h5>
    <h5>bottom left tooltip <i className="acc-info-icon bottom-left" data-tooltip="this is tooltip this is tooltip">i</i></h5>
</div>

    </div>
  </div>
);

export default Test;
