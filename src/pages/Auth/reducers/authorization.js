import {
    CREATE_ACCOUNT_FAILURE,
    CREATE_ACCOUNT_REQUEST,
    CREATE_ACCOUNT_SUCCESS
} from "../actions/createAccount";

const initialState = {
    accountCreated: null,
    isLoading: null,
    error: false,
};

const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ACCOUNT_SUCCESS: {
            return {
                ...state,
                accountCreated: action.payload,
            };
        }
        case CREATE_ACCOUNT_REQUEST: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case CREATE_ACCOUNT_FAILURE: {
            return {
                ...state,
                error: action.payload,
            };
        }
        default: return state
    }
};

export default authorizationReducer;