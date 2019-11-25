import React from 'react';
import withLoading from "../../shared/hoc/withLoading/withLoading";

const HomeComponent = ({...props}) => {
    return <h1>Home Component</h1>;
};

export default withLoading(HomeComponent);