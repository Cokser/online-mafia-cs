import React, { PureComponent } from 'react';
import { navigate } from 'hookrouter';
import { connect } from 'react-redux';
import {createNewLobby} from "./actions/createLobby";
import HomeComponent from "../../components/Home";

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    handleCreateNewLobby = (body) => {
        const { createNewLobby } = this.props;
        createNewLobby('/lobby', body, this.redirectToNewLobby);
    };

    redirectToNewLobby = (newLobbyUrl) => {
        navigate(`/lobby/${newLobbyUrl.text}`);
    };

    render() {
        console.log(this.props);
        return (
            <div className="home-container">
                <HomeComponent
                    isLoading={this.props.isLoading}
                    data={this.props.data}
                    redirectToNewLobby={this}
                    handleCreate={this.handleCreateNewLobby} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.getInitialReducer.data,
    redirectToNewLobbyUrl: state.createLobbyReducer.newLobbyUrl,
    getInitialReducer: state.getInitialReducer,
    isLoading: state.getInitialReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    createNewLobby: (url, body, cb) => dispatch(createNewLobby(url, body, cb)),
});

HomePage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);

export default HomePage;