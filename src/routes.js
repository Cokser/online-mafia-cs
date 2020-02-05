import React from 'react';

import HomePage from './pages/Home';
import LobbyPage from "./pages/Lobby";
import NotFoundPage from "./pages/NotFound";
import AuthorizationPage from "./pages/Auth";
import ProfilePage from "./pages/Profile";

// const AuthorizedOnlyComponent = () => <h1>This Page is only for Authorized Users</h1>;
// const authorizedOnly = (children) => {
//
// };

export const routes = {
    '/': () => <HomePage />,
    '/lobby': () => <h1>Lobby Page</h1>,
    '/auth': () => <AuthorizationPage />,
    '/lobby/:id': ({id}) => <LobbyPage lobbyId={id} />,
    '/watch/:id': ({id}) => <LobbyPage lobbyId={id} />,
    '/stream/:id': ({id}) => <LobbyPage lobbyId={id} />,
    '/profile': () => <ProfilePage />,
    '*': () => <NotFoundPage />,
};