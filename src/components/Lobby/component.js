import React from 'react';
import withLoading from "../../shared/hoc/withLoading/withLoading";

const LobbyComponent = ({...props}) => {
    return <h1>LobbyComponent</h1>;
};

export default withLoading(LobbyComponent);