import React from 'react';
import HomePage from './pages/Home';
import LobbyPage from "./pages/Lobby";
import NotFoundPage from "./pages/NotFound";
import AuthorizationPage from "./pages/Auth/authorizationPage";

export const routes = {
    '/': () => <HomePage />,
    '/lobby': () => <h1>Lobby Page</h1>,
    '/auth': () => <AuthorizationPage />,
    '/lobby/:id': ({id}) => <LobbyPage lobbyId={id} />,
    '/watch/:id': ({id}) => <LobbyPage lobbyId={id} />,
    '/stream/:id': ({id}) => <LobbyPage lobbyId={id} />,
    '*': () => <NotFoundPage />,
};