import {STORE_SESSION_SUCCESS, CREATE_SESSION_SUCCESS} from "../actions/session";

const initialState = {
    sessionData: null,
    hardwareIsReady: false,
    isLoading: null,
    error: false,
};

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SESSION_SUCCESS: {
            return {
                ...state,
                hardwareIsReady: action.payload,
            };
        }
        case STORE_SESSION_SUCCESS: {
            return {
                ...state,
                sessionData: action.payload,
            };
        }
        default: return state
    }
};

export default sessionReducer;