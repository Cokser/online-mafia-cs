import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import { LoginComponent, RegistrationComponent } from "../../components/Auth";
import './style.scss';

class Index extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Authorization Page');
    }

    renderAuth = () => {
        return (
            <div className="authorization-container">
                <LoginComponent isLoading />
                <RegistrationComponent isLoading />
            </div>
        );
    };

    render() {
        return (
            <div className="profile-page-container">
                {this.renderAuth()}
            </div>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

Index = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);

export default Index;