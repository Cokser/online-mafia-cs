import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {getInitialAction} from "./actions";
import HomeComponent from "../../components/Home";

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getInitialAction('http://echo.jsontest.com/key/value/one/two');
    }

    render() {
        return (
            <div className="home-container">
                <HomeComponent isLoading={this.props.isLoading} data={this.props.data} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.getInitialReducer.data,
    getInitialReducer: state.getInitialReducer,
    isLoading: state.getInitialReducer.isLoading,
});

const mapDispatchToProps = {
    getInitialAction,
};

HomePage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);

export default HomePage;