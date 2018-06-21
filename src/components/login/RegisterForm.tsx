import React, {Component} from 'react';

export interface RegisterFormProps {
    usernameLabel?: string;
    passwordLabel?: string;
    phoneNumberLabel?: string;
    usernamePlaceholder?: string;
    passwordPlaceholder?: string;
    rePasswordPlaceholder?: string;
    phoneNumberPlaceholder?: string;
    backButtonEnabled?: boolean;
    backButtonText?: string;
    registerButtonText?: string;
    back?(): void;
    onSubmit?(credentials: RegisterCredentials): void;
}

export interface RegisterCredentials {
    username: string;
    password: string;
    rePassword: string;
    phoneNumber: string;
}

interface RegisterFormState {
    username: string;
    password: string;
    rePassword: string;
    phoneNumber: string;
    usernameLabel: string;
    passwordLabel: string;
    phoneNumberLabel: string;
    usernamePlaceholder: string;
    passwordPlaceholder: string;
    rePasswordPlaceholder: string;
    phoneNumberPlaceholder: string;
    backButtonText: string;
    registerButtonText: string;
}

class RegisterForm extends Component<RegisterFormProps,RegisterFormState> {

    state: RegisterFormState = {
        username: '',
        password: '',
        rePassword: '',
        phoneNumber: '',
        usernameLabel: 'Email/Username',
        passwordLabel: 'Password',
        phoneNumberLabel: 'Phone No',
        usernamePlaceholder: 'Enter username',
        passwordPlaceholder: 'Enter password',
        rePasswordPlaceholder: 'Re-enter password',
        phoneNumberPlaceholder: 'Enter Phone Number',
        backButtonText: 'Go Back',
        registerButtonText: 'Register'
    }

    handleChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as any);
    }  

    handleSubmit = (e: any) => {
        e.preventDefault();
        let credentials: RegisterCredentials = {
            username: this.state.username,
            password: this.state.password,
            rePassword: this.state.rePassword,
            phoneNumber: this.state.phoneNumber
        }
        this.props.onSubmit(credentials);
    }

    renderBackButton = () => {
        if (
            (this.props.backButtonEnabled !== undefined &&
            this.props.backButtonEnabled === true) ||
            (this.props.backButtonEnabled === undefined)
        ) {
            return (
                <button 
                    className="cancel"
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
                        <label>{this.props.passwordLabel || this.state.passwordLabel}</label>
                        <input 
                            type="password" 
                            name="rePassword"
                            onChange={(e: any) => this.handleChange(e)}
                            placeholder={
                                this.props.rePasswordPlaceholder ||
                                this.state.rePasswordPlaceholder
                            }
                        />
                        <label>{this.props.phoneNumberLabel || this.state.phoneNumberLabel}</label>
                        <input 
                            type="text" 
                            name="phoneNumber"
                            onChange={(e: any) => this.handleChange(e)}
                            placeholder={
                                this.props.phoneNumberPlaceholder ||
                                this.state.phoneNumberPlaceholder
                            }
                        />
                        <button type="submit" className="primary">
                            {this.props.registerButtonText || this.state.registerButtonText}
                        </button>
                    </div>
                    {
                        this.renderBackButton()
                    }
                </div>
            </form>
        );
    }
}

export default RegisterForm;