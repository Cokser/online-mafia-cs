import {CREATE_ACCOUNT_FAILURE, CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS} from "../actions/createAccount";
import {LOGIN_ACCOUNT_FAILURE, LOGIN_ACCOUNT_REQUEST, LOGIN_ACCOUNT_SUCCESS} from "../actions/loginAccount";
import {LOGOUT_ACCOUNT_FAILURE, LOGOUT_ACCOUNT_REQUEST, LOGOUT_ACCOUNT_SUCCESS} from "../actions/logoutAccount";

const initialState = {
    accountCreated: null,
    isLoading: null,
    authorized: false,
    token: null,
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
        case LOGIN_ACCOUNT_REQUEST: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case LOGIN_ACCOUNT_FAILURE: {
            return {
                ...state,
                error: action.payload,
            };
        }
        case LOGIN_ACCOUNT_SUCCESS: {
            return {
                ...state,
                authorized: action.payload,
            };
        }
        case LOGOUT_ACCOUNT_REQUEST: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case LOGOUT_ACCOUNT_FAILURE: {
            return {
                ...state,
                error: action.payload,
            };
        }
        case LOGOUT_ACCOUNT_SUCCESS: {
            return {
                ...state,
                authorized: action.payload,
            };
        }
        default: return state
    }
};

export default authorizationReducer;