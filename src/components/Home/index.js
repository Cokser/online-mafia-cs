import React from 'react';
import withLoading from "../../shared/hoc/withLoading/withLoading";

const HomeComponent = ({...props}) => {
    console.log(props.data);
    return <h1>Page Founded</h1>;
};

export default withLoading(HomeComponent);