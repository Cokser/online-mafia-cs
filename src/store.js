import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    state: () => ({})
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