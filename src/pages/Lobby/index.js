import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {currentLobbyAction} from "./actions/currentLobby";
import StreamComponent from "../../components/Lobby";
import withHardware from "../../shared/hoc/withHardware/withHardware";

class LobbyPage extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('LobbyPage');
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
    getLobbyAction: currentLobbyAction,
};

LobbyPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LobbyPage);

export default withHardware(LobbyPage);