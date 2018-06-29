import React, { Component } from 'react';
import ModalText from './ModalText';
import ModalComponent from './ModalComponent';

interface ModalSelectorProps {
}

interface ModalSelectorState {
    title: string;
    text: any;
    buttonText: string;
    modalType: ModalType;
    htmlCode: string;
    modalTextShow: boolean;
    modalComponentShow: boolean;
}

enum ModalType {
    text = 0,
    component = 1
}

class ModalSelector extends Component<ModalSelectorProps, ModalSelectorState> {

    state: ModalSelectorState = {
        title: '',
        text: '',
        htmlCode: '',
        buttonText: '',
        modalType: ModalType.text,
        modalTextShow: false,
        modalComponentShow: false,
    }

    handleChange = (e: any) => {
        let { name, value } = e.target;
        if (name === "modalType") {
            value = Number(value);
        }
        this.setState({ [name]: value } as any);
    }  

    renderTextModalOptions = () => {
        return (
            <div>
                <div className="acc-form-inline">
                    <label>Modal Title</label>
                    <input 
                        type="text" 
                        name="title"
                        onChange={(e: any) => this.handleChange(e)}
                        placeholder="Enter Title"
                    />
                </div>
                <div className="acc-form-inline">
                <label>Modal Text</label>
                <input 
                    type="text"
                    name="text"
                    onChange={(e: any) => this.handleChange(e)}
                    placeholder="Enter Text"
                />
                </div>
                
            </div>
        );
    }

    renderComponentModalOptions = () => {
        return (
            <div className="acc-form">
               <textarea name="text" rows={10} cols={30} onChange={(e: any) => this.handleChange(e)}/>
               <div contentEditable={true}>aci</div>
            </div>
        );
    }

    renderModalOptions = () => {
        switch (this.state.modalType) {
            case ModalType.text:
                return this.renderTextModalOptions();
            case ModalType.component:
                return this.renderComponentModalOptions();
            default: <div />
        }
    }

    displayModal = () => {
        switch (this.state.modalType) {
            case ModalType.text:
                this.setState ({
                    modalTextShow: true
                });
            case ModalType.component:
                this.setState({
                    modalComponentShow: true
                })
            default: <div />
        }
    }

    closeTextModal = () => {
        this.setState({
            modalTextShow: false,
            modalComponentShow: false
        })
    }

    renderTextModal = () => {
        let options = {
            title: this.state.title,
            text: this.state.text,
            checked: this.state.modalTextShow,
            closeModal: this.closeTextModal
        }
        return (
            <ModalText {...options} />
        );
    }

    renderComponentModal = () => {
        let options = {
            title: this.state.title,
            text: this.state.text,
            checked: this.state.modalComponentShow,
            closeModal: this.closeTextModal
        }
        return (
            <ModalComponent {...options} >
                {this.state.text}
            </ModalComponent>
        );
    }

    render() {
        return (
            <div>
                <div className="acc-form">
                    <label htmlFor="select">Modal Type</label>
                    <select id="select" name="modalType" onChange={(e: any) => this.handleChange(e)}>
                        <option value={ModalType.text}>Text</option>
                        <option value={ModalType.component}>Component</option>
                    </select>
                </div>
                { this.renderModalOptions() }
                { this.renderTextModal() }
                { this.renderComponentModal() }
                <button type="submit" className="primary" onClick={() => this.displayModal()}>
                    Display Dialog
                </button>
            </div>
        );
    }

}

export default ModalSelector;