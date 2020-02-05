import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {LoginComponent, RegistrationComponent} from "../../components/Auth";

import {createNewAccount} from "./actions/createAccount";
import {loginAccountAction} from "./actions/loginAccount";
import './style.scss';

class AuthorizationPage extends PureComponent {
    state = {
        authStatus: false,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    handleCreate = (e) => {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            username: e.target.username.value,
            name: e.target.name.value,
            password: e.target.password.value,
            passwordConfirm: e.target.passwordConfirm.value,
        };

        if (user.password !== user.passwordConfirm) return;
        this.props.createAccount('/auth/register', user);
    };

    handleLogin = (e) => {
        e.preventDefault();
        const user = {
            username: e.target.username.value,
            password: e.target.password.value,
        };
        this.props.loginAccount('/auth/login', user);
    };

    handleAuthStatusChange = (e) => {
        e.preventDefault();
        this.setState({
            authStatus: !this.state.authStatus,
        });
    };


    renderAuth = () => {
        return (
            <div className="authorization-container">
                {
                    this.state.authStatus
                        ? <LoginComponent
                            isLoading
                            handleAction={this.handleAuthStatusChange}
                            handleSubmit={this.handleLogin}
                        />
                        : <RegistrationComponent
                            isLoading
                            handleAction={this.handleAuthStatusChange}
                            handleSubmit={this.handleCreate}
                        />
                }
            </div>
        );
    };

    render() {
        return (
            <div className="authorization-page-container">
                {this.renderAuth()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.Auth.isLoading,
});

const mapDispatchToProps = dispatch => ({
    createAccount: (url, body, cb) => dispatch(createNewAccount(url, body, cb)),
    loginAccount: (url, body, cb) => dispatch(loginAccountAction(url, body, cb)),
});

AuthorizationPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthorizationPage);

export default AuthorizationPage;