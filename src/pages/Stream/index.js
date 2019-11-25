import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getInitialAction} from "./actions";
import StreamComponent from "../../components/Stream";

class StreamPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getInitialAction('http://echo.jsontest.com/key/value/one/two');
    }

    render() {
        return (
            <div className="home-container">
                <StreamComponent isLoading={this.props.isLoading} data={this.props.data}/>
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

StreamPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StreamPage);

export default StreamPage;