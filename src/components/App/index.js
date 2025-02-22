import React from 'react';
import {useRoutes} from 'hookrouter';
import {routes} from "../../routes";
import HeaderComponent from "../Header";

const App = () => {
    const routeResult = useRoutes(routes);
    return (
        <div className="app-container">
            <HeaderComponent />
            {routeResult}
        </div>
    );
};

export default App;