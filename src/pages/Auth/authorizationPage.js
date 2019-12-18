import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {LoginComponent, RegistrationComponent} from "../../components/Auth";

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
    };

    handleLogin = (e) => {
        e.preventDefault();
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
                        ? <LoginComponent isLoading handleAction={this.handleAuthStatusChange} />
                        : <RegistrationComponent isLoading handleAction={this.handleAuthStatusChange} />
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

AuthorizationPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthorizationPage);

export default AuthorizationPage;