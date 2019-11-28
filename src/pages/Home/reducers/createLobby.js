import {CREATE_LOBBY_FAILURE, CREATE_LOBBY_REQUEST, CREATE_LOBBY_SUCCESS} from "../actions/createLobby";

const initialState = {
    posted: null,
    isLoading: null,
    error: false,
};

const createLobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LOBBY_SUCCESS: {
            return {
                ...state,
                posted: true,
            };
        }
        case CREATE_LOBBY_REQUEST: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case CREATE_LOBBY_FAILURE: {
            return {
                ...state,
                error: action.payload,
            };
        }
        default: return state
    }
};

export default createLobbyReducer;