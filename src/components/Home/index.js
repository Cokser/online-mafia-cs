import React from 'react';
import './style.scss';

import withLoading from "../../shared/hoc/withLoading/withLoading";
import ManageLobby from "../ManageLobby";

const HomeComponent = ({handleCreate, redirectToLobby, ...props}) => {
    return (
        <main className="main-container">
            <ManageLobby handleCreate={handleCreate} redirectToLobby={redirectToLobby} option="create" />
        </main>
    );
};

export default withLoading(HomeComponent);