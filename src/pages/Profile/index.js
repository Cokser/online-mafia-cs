import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import './style.scss';

class ProfilePage extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('ProfilePage Page');
    }

    renderProfile = () => {
        return (
            <div className="profile-page">
                <h1>hello</h1>
            </div>
        );
    };

    render() {
        return (
            <div className="profile-page-container">
                {this.renderProfile()}
            </div>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

ProfilePage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfilePage);

export default ProfilePage;