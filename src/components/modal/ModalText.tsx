import React, { Component } from 'react';

interface ModalTextProps {
    title?: string;
    text?: string;
    buttonText?: string;
    checked?: boolean;
    closeModal(): void;
}

interface ModalTextState {
    title: string;
    text: string;
    buttonText: string;
}

class ModalText extends Component<ModalTextProps,ModalTextState> {

    state: ModalTextState = {
        title: 'Modal in CSS?',
        text: 'One modal example here',
        buttonText: 'okay'
    }

    render() {
        return (
            <div className="modal"> 
               Check it
               <input className="modal-open" id="modal-one" type="checkbox" checked={this.props.checked || false} />
               <div className="modal-wrap" aria-hidden="true" role="dialog">
                <label className="modal-overlay" htmlFor="modal-one"></label>
                <div className="modal-dialog">
                 <div className="modal-header"> 
                  <h2>{this.props.title || this.state.title}</h2>
                   <label className="is-button cancel" htmlFor="modal-one" aria-hidden="true" onClick={() => this.props.closeModal()}>×</label>
                 </div>
                 <div className="modal-body">
                  <p>{this.props.text || this.state.text}</p>
                 </div>
                 <div className="modal-footer">
                  <label className="is-button primary" htmlFor="modal-one" onClick={() => this.props.closeModal()}>{this.props.buttonText || this.state.buttonText}</label>
                 </div>      
                </div>
               </div>
              </div>
        );
    }
}

export default ModalText;