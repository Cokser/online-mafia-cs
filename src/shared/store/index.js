import { combineReducers } from 'redux';
import streamReducer from "./reducers/stream";
import sessionReducer from "./reducers/session";

const sharedReducer = combineReducers({
    stream: streamReducer,
    session: sessionReducer,
});


export default sharedReducer;