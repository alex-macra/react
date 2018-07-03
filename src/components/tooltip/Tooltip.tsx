import React, { Component } from 'react';

class Tooltip extends Component<any,any> {
    render() {
        return (
            <div className="tooltip">
                <h5>upper right tooltip <i className="acc-info-icon top-right" data-tooltip="this is tooltip">i</i></h5>
                <h5>bottom left tooltip <i className="acc-info-icon bottom-left" data-tooltip="this is tooltip this is tooltip">i</i></h5>
            </div>
        );
    }
}

export default Tooltip;