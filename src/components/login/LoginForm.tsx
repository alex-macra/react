import React, { Component } from 'react';

interface LoginFormProps {
    usernameLabel?: string;
    usernameValue?: string;
    usernamePlaceholder?: string;
    passwordLabel?: string;
    passwordValue?: string;
    passwordPlaceholder?: string;
    forgotPasswordEnabled?: boolean;
}

interface LoginFormState {
    usernameLabel: string;
    usernameValue: string;
    usernamePlaceholder: string;
    passwordLabel: string;
    passwordValue: string;
    passwordPlaceholder: string;
}

class LoginForm extends Component<LoginFormProps,LoginFormState> {

    state = {
        usernameLabel: 'Username:',
        usernameValue: '',
        usernamePlaceholder: 'Enter username',
        passwordLabel: 'Password:',
        passwordValue: '',
        passwordPlaceholder: 'Enter password'
    }

    renderForgotPassword = () => {
        if (
            (this.props.forgotPasswordEnabled !== undefined && 
            this.props.forgotPasswordEnabled === true ) ||
            (this.props.forgotPasswordEnabled === undefined) 
        ) {
            return (
                <button type="button" className="cancel">Forgot password?</button>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <form>
                <div className="acc-default-form">
                    <div className="acc-form">
                        <label>{this.props.usernameLabel || this.state.usernameLabel}</label>
                        <input 
                            type="text"
                            placeholder={
                                this.props.usernamePlaceholder || 
                                this.state.usernamePlaceholder
                            } 
                        />
                        <label>{this.props.passwordLabel || this.state.passwordLabel}</label>
                        <input 
                            type="text" 
                            placeholder={
                                this.props.passwordPlaceholder ||
                                this.state.passwordPlaceholder
                            }
                        />
                        {
                            this.renderForgotPassword()
                        }
                    </div>
                </div>
            </form>
        );
    }
}

export default LoginForm;