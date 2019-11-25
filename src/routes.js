import React from 'react';
import HomePage from './pages/Home';
import StreamPage from "./pages/Stream";

export const routes = {
    '/': () => <HomePage />,
    '/stream': () => <StreamPage/>,
};