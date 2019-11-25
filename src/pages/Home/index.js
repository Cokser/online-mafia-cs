import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {getInitialAction} from "./actions";

class HomePage extends React.PureComponent {
    componentDidMount() {
        this.props.getInitialAction('http://echo.jsontest.com/key/value/one/two');
    }

    render() {
        console.log('data', this.props.data);
        return (
            <div className="home-container">
                <p>Hello World Wow</p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state,
});

const mapDispatchToProps = {
    getInitialAction,
};

HomePage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);

export default HomePage;