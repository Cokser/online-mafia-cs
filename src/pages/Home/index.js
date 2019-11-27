import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {createNewLobby} from "./actions/createLobby";
import HomeComponent from "../../components/Home";

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    handleCreateNewLobby = () => {
        const { createNewLobby } = this.props;
        createNewLobby('/users/create', {
            id: 123,
            name: 'asdad sadasdas',
            department: 'none'
        });
    };

    render() {
        return (
            <div className="home-container">
                <HomeComponent isLoading={this.props.isLoading} data={this.props.data} handleCreate={this.handleCreateNewLobby()} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.getInitialReducer.data,
    getInitialReducer: state.getInitialReducer,
    isLoading: state.getInitialReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    createNewLobby: () => dispatch(createNewLobby),
});

HomePage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);

export default HomePage;