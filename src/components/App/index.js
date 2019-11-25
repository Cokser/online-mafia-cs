import React from 'react';
import {useRoutes} from 'hookrouter';
import {routes} from "../../routes";

const App = () => {
    const routeResult = useRoutes(routes);
    return routeResult || <h1>Page Not Found</h1>;
};

export default App;