import React, { Component } from 'react';
import ModalText from './ModalText';
import ModalComponent from './ModalComponent';
import LoginForm from '../login/LoginForm';
import RegisterForm from '../login/RegisterForm';
import SigninForm from '../login/SigninForm';

interface ModalSelectorProps {
}

interface ModalSelectorState {
    title: string;
    text: any;
    buttonText: string;
    modalType: ModalType;
    modalComponent: ModalComponentType;
    modalTextShow: boolean;
    modalComponentShow: boolean;
}

enum ModalType {
    text = 0,
    component = 1
}

enum ModalComponentType {
    login = 0,
    register = 1,
    signIn = 2
}

class ModalSelector extends Component<ModalSelectorProps, ModalSelectorState> {

    state: ModalSelectorState = {
        title: '',
        text: '',
        modalComponent: ModalComponentType.signIn,
        buttonText: '',
        modalType: ModalType.text,
        modalTextShow: false,
        modalComponentShow: false,
    }

    handleChange = (e: any) => {
        let { name, value } = e.target;
        if (name === "modalType") {
            value = Number(value);
            this.setState({
                title: '',
                text: ''
            });
        }
        if (name === "modalComponent") {
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
                <div className="acc-form-inline">
                    <label>Modal Title</label>
                    <input 
                        type="text" 
                        name="title"
                        onChange={(e: any) => this.handleChange(e)}
                        placeholder="Enter Title"
                />
                </div>
                <label htmlFor="select">Choose Component</label>
                <select id="select" name="modalComponent" onChange={(e: any) => this.handleChange(e)}>
                    <option value={ModalComponentType.signIn}>Sign In Form</option>
                    <option value={ModalComponentType.login}>Log In Form</option>
                    <option value={ModalComponentType.register}>Register Form</option>
                </select>
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
                    modalTextShow: true,
                    modalComponentShow: false
                });
                break;
            case ModalType.component:
                this.setState({
                    modalComponentShow: true,
                    modalTextShow: false
                });
                break;
            default: return <div />;
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

    getModalComponent = () => {
        switch (this.state.modalComponent) {
            case ModalComponentType.signIn:
                return <SigninForm />;
            case ModalComponentType.register:
                return <RegisterForm />;
            case ModalComponentType.login:
                return <LoginForm />
        }
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
                {this.getModalComponent()}
            </ModalComponent>
        );
    }

    render() {
        return (
            <div className="acc-default-container flexible">
                <h1>Modal</h1>
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
                <button type="submit" className="acc-button primary" onClick={() => this.displayModal()}>
                    Display Dialog
                </button>
            </div>
        );
    }

}

export default ModalSelector;