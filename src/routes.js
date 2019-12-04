import React from 'react';
import HomePage from './pages/Home';
import LobbyPage from "./pages/Lobby";
import NotFoundPage from "./pages/NotFound";

export const routes = {
    '/': () => <HomePage />,
    '/lobby': () => <h1>Lobby Page</h1>,
    '/lobby/:id': ({id}) => <LobbyPage lobbyId={id} />,
    '/watch/:id': ({id}) => <LobbyPage lobbyId={id} />,
    '*': () => <NotFoundPage />,
};