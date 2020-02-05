import { combineReducers } from 'redux';
import createLobbyReducer from "./createLobby";
import currentLobbyReducer from "./currentLobby";

const lobbyReducer = combineReducers({
    createLobby: createLobbyReducer,
    currentLobby: currentLobbyReducer,
});


export default lobbyReducer;