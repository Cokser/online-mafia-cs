import React from 'react';

import withLoading from "../../shared/hoc/withLoading/withLoading";
import MOButtonComponent from "../../shared/components/MOButton";

const HomeComponent = ({handleCreate, ...props}) => {
    return (
        <main className="main-container">
            <h1>Home Component</h1>
            <MOButtonComponent
                title="Create Lobby"
                handleClick={handleCreate} />
        </main>
    );
};

export default withLoading(HomeComponent);