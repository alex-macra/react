import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

interface SigninFormProps {
    loginButtonText?: string;
    singupButtonText?: string;
}

interface SigninFormState {
    loginButtonText: string;
    singupButtonText: string;
    displayForm: forms;
}


class SigninForm extends Component<SigninFormProps,SigninFormState> {

    state = {
        loginButtonText: 'Log In',
        singupButtonText: 'Sign Up',
        displayForm: forms.signIn
    }

    renderForm = () => {
        switch (this.state.displayForm) {
            case forms.signIn:
                return this.renderSignInForm();
            case forms.logIn:
                let options = {
                    passwordLabel: 'Baga parola:',
                    usernamePlaceholder: 'Scrie aici',
                    forgotPasswordEnabled: true
                }
                return <LoginForm {...options} />
            default:
                return <div />;
        }
    }

    switchForm = (event: any) => {
        this.setState({
            displayForm: Number(event.target.value) || 0
        });
    }

    renderSignInForm = () => {
        return (
            <div className="acc-form">
                <button 
                    type="button" 
                    className="primary" 
                    value={forms.logIn}
                    onClick={(e) => this.switchForm(e)}
                >
                    {
                        this.state.loginButtonText ||
                        this.props.loginButtonText
                    }
                </button>
                <br />
                <button type="button" className="secondary">Sign Up(unavailable)</button>
            </div>
        );
    }

    render() {
        return (
            this.renderForm()
        );
    }
}

const enum forms {
    signIn = 0,
    logIn = 1,
    singUp = 2
}

export default SigninForm;