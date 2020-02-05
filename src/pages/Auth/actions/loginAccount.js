import postRequestActionCreator from "../../../shared/helpers/actionCreators/postRequestActionCreator";

export const LOGIN_ACCOUNT_REQUEST = 'LOGIN_ACCOUNT_REQUEST';
export const loginIsLoading = bool => ({
    type: LOGIN_ACCOUNT_REQUEST,
    payload: bool,
});

export const LOGIN_ACCOUNT_FAILURE = 'LOGIN_ACCOUNT_FAILURE';
export const loginHasError = bool => ({
    type: LOGIN_ACCOUNT_FAILURE,
    payload: bool,
});

export const LOGIN_ACCOUNT_SUCCESS = 'LOGIN_ACCOUNT_SUCCESS';
export const loginSuccess = payload => ({
    type: LOGIN_ACCOUNT_SUCCESS,
    payload,
});

export const loginAccountAction = postRequestActionCreator({
    loadingAction: loginIsLoading,
    errorAction: loginHasError,
    receivedAction: loginSuccess,
});