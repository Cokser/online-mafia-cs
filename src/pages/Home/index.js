import React, {PureComponent} from 'react';
import {navigate} from 'hookrouter';
import {connect} from 'react-redux';
import {createNewLobby} from "../Lobby/actions/createLobby";
import {currentLobbyAction} from "../Lobby/actions/currentLobby";

import './styles.scss';
import HomeComponent from "../../components/Home";

class HomePage extends PureComponent {
    constructor(props) {
        super(props);
    }

    handleCreateNewLobby = (body) => {
        const {createNewLobby} = this.props;
        createNewLobby('/lobby', body, this.redirectToLobby);
    };

    redirectToLobby = (newLobbyUrl) => {
        console.log(newLobbyUrl);
        this.props.checkLobby((newLobbyUrl.text), () => navigate(`/lobby/${newLobbyUrl.text}`));
    };

    render() {
        return (
            <div className="home-container">
                <HomeComponent
                    isLoading={this.props.isLoading}
                    data={this.props.data}
                    redirectToLobby={this.redirectToLobby}
                    handleCreate={this.handleCreateNewLobby}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    redirectToNewLobbyUrl: state.Lobby.createLobby.newLobbyUrl,
    isLoading: state.Lobby.createLobby.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    createNewLobby: (url, body, cb) => dispatch(createNewLobby(url, body, cb)),
    checkLobby: (lobbyId, cb) => dispatch(currentLobbyAction(lobbyId, cb)),
});

HomePage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);

export default HomePage;