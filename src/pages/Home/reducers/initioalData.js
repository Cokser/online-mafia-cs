import {
    GET_INITIAL_DATA_FAILURE,
    GET_INITIAL_DATA_REQUEST,
    GET_INITIAL_DATA_SUCCESS,
} from '../actions/initioalData';

const initialState = {
    data: null,
    isLoading: null,
    error: false,
};

const getInitialReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INITIAL_DATA_REQUEST: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case GET_INITIAL_DATA_FAILURE: {
            return {
                ...state,
                error: action.payload,
            };
        }
        case GET_INITIAL_DATA_SUCCESS: {
            return {
                ...state,
                data: action.payload,
            };
        }
        default: return state
    }
};

export default getInitialReducer;