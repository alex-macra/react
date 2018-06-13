import React from 'react';
import Navigation from './Navigation'
const Test = () => (
  <div className='testPage'>
    <Navigation/>
    <div>
    <button type="button" class="primary">primary button</button>
 <button type="button" class="secondary">secondary button</button>
 <button type="button" class="error">error</button>
 <button type="button" class="go">proceed</button>
 <button type="button">greyed (default button)</button>
 <button type="button" disabled>disabled button</button>
 <button type="button" class="cancel">transparent button</button>
 <button class="pink">Pink buttom</button>


<div class="tooltip">
    <h5>upper right tooltip <i class="acc-info-icon top-right" data-tooltip="this is tooltip">i</i></h5>
    <h5>bottom left tooltip <i class="acc-info-icon bottom-left" data-tooltip="this is tooltip this is tooltip">i</i></h5>
</div>

    </div>
  </div>
);

export default Test;
