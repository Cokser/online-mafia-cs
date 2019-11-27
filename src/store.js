import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import getInitialReducer from "./pages/Home/reducers/initioalData";
import createLobbyReducer from "./pages/Home/reducers/createLobby";

const rootReducer = combineReducers({
    getInitialReducer,
    createLobbyReducer,
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