import { combineReducers } from 'redux';
import streamReducer from "./reducers/stream";

const sharedReducer = combineReducers({
    stream: streamReducer,
});


export default sharedReducer;