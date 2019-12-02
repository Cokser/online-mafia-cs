import React from 'react';
import HomePage from './pages/Home';
import LobbyPage from "./pages/Lobby";

export const routes = {
    '/': () => <HomePage />,
    '/lobby/:id': ({id}) => <LobbyPage lobbyId={id} />,
};