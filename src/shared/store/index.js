import { combineReducers } from 'redux';
import streamReducer from "./reducers/stream";

const sharedReducer = combineReducers({
    streamReducer,
});


export default sharedReducer;