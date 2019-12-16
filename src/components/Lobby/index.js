import React, {PureComponent} from 'react';
import withHardware from "../../shared/hoc/withHardware/withHardware";
import {currentLobbyAction} from "../../pages/Lobby/actions/currentLobby";
import {connect} from "react-redux";
import LobbyComponent from "./component";

class LobbyContainer extends PureComponent {
    render() {
        console.log(this.props.streamData);
        return (
            <div className="home-container">
                <LobbyComponent isLoading={true} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.getInitial.data,
    streamData: state.shared.stream.streamData,
});

const mapDispatchToProps = {
    getLobbyAction: currentLobbyAction,
};

LobbyContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LobbyContainer);

export default withHardware(LobbyContainer);