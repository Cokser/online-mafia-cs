import {
    GET_LOBBY_DATA_FAILURE,
    GET_LOBBY_DATA_REQUEST,
    GET_LOBBY_DATA_SUCCESS,
} from '../actions/currentLobby';

const initialState = {
    data: null,
    isLoading: null,
    error: false,
};

const currentLobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOBBY_DATA_REQUEST: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case GET_LOBBY_DATA_FAILURE: {
            return {
                ...state,
                error: action.payload,
            };
        }
        case GET_LOBBY_DATA_SUCCESS: {
            return {
                ...state,
                data: action.payload,
            };
        }
        default: return state
    }
};

export default currentLobbyReducer;