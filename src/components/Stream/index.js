import React from 'react';
import withLoading from "../../shared/hoc/withLoading/withLoading";

const StreamComponent = ({...props}) => {
    return <h1>Stream Component</h1>;
};

export default withLoading(StreamComponent);