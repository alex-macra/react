import React, { Component } from 'react';

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface LoginFormProps {
    usernameLabel?: string;
    usernameValue?: string;
    usernamePlaceholder?: string;
    passwordLabel?: string;
    passwordValue?: string;
    passwordPlaceholder?: string;
    forgotPasswordEnabled?: boolean;
    forgotPasswordButtonText?: string;
    backButtonEnabled?: boolean;
    backButtonText?: string;
    loginButtonText?: string;
    back?(): void;
    onSubmit?(e: any): void;
}

interface LoginFormState {
    username: string,
    password: string,
    usernameLabel: string;
    usernameValue: string;
    usernamePlaceholder: string;
    passwordLabel: string;
    passwordValue: string;
    passwordPlaceholder: string;
    forgotPasswordButtonText: string;
    backButtonText: string;
    loginButtonText: string;
}

class LoginForm extends Component<LoginFormProps,LoginFormState> {

    state: LoginFormState = {
        username: '',
        password: '',
        usernameLabel: 'Username:',
        usernameValue: '',
        usernamePlaceholder: 'Enter username',
        passwordLabel: 'Password:',
        passwordValue: '',
        passwordPlaceholder: 'Enter password',
        forgotPasswordButtonText: 'Forgot Password?',
        backButtonText: 'Go Back',
        loginButtonText: 'Log In'
    }

    renderForgotPassword = () => {
        if (
            (this.props.forgotPasswordEnabled !== undefined && 
            this.props.forgotPasswordEnabled === true ) ||
            (this.props.forgotPasswordEnabled === undefined) 
        ) {
            return (
                <button type="button" className="button cancel">
                    {this.props.forgotPasswordButtonText || this.state.forgotPasswordButtonText}
                </button>
            );
        } else {
            return null;
        }
    }

    renderBackButton = () => {
            if (
                (this.props.backButtonEnabled !== undefined &&
                this.props.backButtonEnabled === true) ||
                (this.props.backButtonEnabled === undefined)
            ) {
                return (
                    <button 
                        className="button cancel"
                        onClick={() => this.props.back()}
                    >
                        {this.props.backButtonText || this.state.backButtonText}
                    </button>
                );
            }
            else {
                return null;
            }
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        let credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.onSubmit(credentials);
    }

    handleChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as any);
    }   

    render() {
        return (
            <form name="login-form" onSubmit={this.handleSubmit}>
                <div className="acc-default-form">
                    <div className="acc-form" style={{marginLeft: "2em"}}>
                        <label>{this.props.usernameLabel || this.state.usernameLabel}</label>
                        <input 
                            type="text"
                            name="username"
                            onChange={(e: any) => this.handleChange(e)}
                            placeholder={
                                this.props.usernamePlaceholder || 
                                this.state.usernamePlaceholder
                            } 
                        />
                        <label>{this.props.passwordLabel || this.state.passwordLabel}</label>
                        <input 
                            type="password" 
                            name="password"
                            onChange={(e: any) => this.handleChange(e)}
                            placeholder={
                                this.props.passwordPlaceholder ||
                                this.state.passwordPlaceholder
                            }
                        />
                        <button type="submit" className="primary">
                            {this.props.loginButtonText || this.state.loginButtonText}
                        </button>
                    </div>
                    {
                        this.renderBackButton()
                    }
                    {
                        this.renderForgotPassword()
                    }
                </div>
            </form>
        );
    }
}

export default LoginForm;