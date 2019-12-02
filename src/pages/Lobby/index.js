import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getInitialAction} from "./actions";
import StreamComponent from "../../components/Lobby";
import withHardware from "../../shared/hoc/withHardware/withHardware";

class LobbyPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="home-container">
                <StreamComponent isLoading={true} />
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

LobbyPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LobbyPage);



export default withHardware(LobbyPage);