import getRequestActionCreator from '../../../shared/helpers/actionCreators/getRrequestActionCreator';

export const LOGOUT_ACCOUNT_REQUEST = 'LOGOUT_ACCOUNT_REQUEST';
export const logoutIsLoading = bool => ({
    type: LOGOUT_ACCOUNT_REQUEST,
    payload: bool,
});

export const LOGOUT_ACCOUNT_FAILURE = 'LOGOUT_ACCOUNT_FAILURE';
export const logoutHasError = bool => ({
    type: LOGOUT_ACCOUNT_FAILURE,
    payload: bool,
});

export const LOGOUT_ACCOUNT_SUCCESS = 'LOGOUT_ACCOUNT_SUCCESS';
export const logoutSuccess = payload => ({
    type: LOGOUT_ACCOUNT_SUCCESS,
    payload,
});

export const logoutAccountAction = getRequestActionCreator({
    loadingAction: logoutIsLoading,
    errorAction: logoutHasError,
    receivedAction: logoutSuccess,
});