import React, {Component} from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { LoginFormProps, LoginCredentials } from './LoginForm';
import { RegisterFormProps, RegisterCredentials } from './RegisterForm';

interface SigninFormProps {
    loginButtonText?: string;
    singupButtonText?: string;
    loginFormProps?: LoginFormProps;
    registerFormProps?: RegisterFormProps;
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

    getLoginFormOptions = () => {
        let options: LoginFormProps = {
            passwordLabel: 'Baga parola:',
            usernamePlaceholder: 'Scrie aici',
            forgotPasswordEnabled: true,
            backButtonEnabled: true,
            backButtonText: 'Inapoi',
            back: () => this.onGoBack(),
            onSubmit: (e: any) => this.handleLogin(e)
        }
        return options;
    }

    getRegisterFormOptions = () => {
        let options: RegisterFormProps = {
            back: () => this.onGoBack(),
            onSubmit: (e: any) => this.handleRegister(e)
        };
        return options;
    }

    onGoBack = () => {
        this.setState({
            displayForm: forms.signIn
        });
    }

    handleLogin = (credentials: LoginCredentials) => {
        console.log(`Submitted: ${credentials.username} - ${credentials.password}`);
        this.onGoBack();
    }

    handleRegister = (credentials: RegisterCredentials) => {
        console.log(`Registered username: ${credentials.username} - phone: ${credentials.phoneNumber}`);
        this.onGoBack();
    }

    renderForm = () => {
        switch (this.state.displayForm) {
            case forms.signIn:
                return this.renderSignInForm();
            case forms.logIn:
                let loginOptions: LoginFormProps = this.getLoginFormOptions();
                return <LoginForm {...loginOptions} />;
            case forms.singUp:
                let registerOptions: RegisterFormProps = this.getRegisterFormOptions();
                return <RegisterForm {...registerOptions}/>;
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
            <div className="acc-default-form">
                <button 
                    type="button" 
                    className="primary" 
                    value={forms.logIn}
                    onClick={(e: any) => this.switchForm(e)}
                >
                    {
                        this.state.loginButtonText ||
                        this.props.loginButtonText
                    }
                </button>
                <br />
                <button 
                    type="button" 
                    className="secondary"
                    value={forms.singUp}
                    onClick={(e: any) => this.switchForm(e)}
                >
                    {this.props.singupButtonText || this.state.singupButtonText}
                </button>
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