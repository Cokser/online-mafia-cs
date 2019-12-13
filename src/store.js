import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import getInitialReducer from "./pages/Home/reducers/initioalData";
import createLobbyReducer from "./pages/Home/reducers/createLobby";
import currentLobbyReducer from "./pages/Lobby/reducers/currentLobby";

const rootReducer = combineReducers({
    getInitialReducer,
    createdLobby: createLobbyReducer,
    currentLobby: currentLobbyReducer,
});

const middleware = applyMiddleware(thunk);

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    reduxDevTools(
        middleware
    )
);

export default store;