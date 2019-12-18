import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {currentLobbyAction} from "./actions/currentLobby";
import LobbyContainer from "../../components/Lobby";

class LobbyPage extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('LobbyPage');
    }

    render() {
        const { hardwareIsReady } = this.props;
        return (
            <div className="home-container">
                <LobbyContainer isHardwareInstalled={hardwareIsReady} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.getInitial.isLoading,
    hardwareIsReady: state.Shared.stream.hardwareIsReady,
});

const mapDispatchToProps = {
    getLobbyAction: currentLobbyAction,
};

LobbyPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LobbyPage);

export default LobbyPage;