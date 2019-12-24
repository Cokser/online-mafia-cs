import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import './style.scss';
import MOButtonComponent from "../../shared/components/MOButton";

class AdminPanelComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('AdminPanel');
    }

    render() {
        return (
            <div className="admin-panel-container">
                <h3 className="user-role">Admin:</h3>
                <MOButtonComponent
                    title="Fake user"
                    btnStyle="btn-success"
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

AdminPanelComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdminPanelComponent);

export default AdminPanelComponent;