import React from 'react';
import './style.scss';

import withLoading from "../../shared/hoc/withLoading/withLoading";
import MOButtonComponent from "../../shared/components/MOButton";
import ManageLobby from "../ManageLobby";

const HomeComponent = ({handleCreate, ...props}) => {
    return (
        <main className="main-container">
            <h1>Home Component</h1>
            <ManageLobby handleCreate={handleCreate} option="create" />
        </main>
    );
};

export default withLoading(HomeComponent);