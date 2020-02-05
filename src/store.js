import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import getInitialReducer from "./pages/Home/reducers/initioalData";
import accountReducer from "./pages/Profile/reducers/account";
import authorizationReducer from "./pages/Auth/reducers";
import lobbyReducer from "./pages/Lobby/reducers";
import sharedReducer from "./shared/store";

const rootReducer = combineReducers({
    Auth: authorizationReducer,
    Account: accountReducer,
    Lobby: lobbyReducer,
    Shared: sharedReducer,
    getInitial: getInitialReducer,
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