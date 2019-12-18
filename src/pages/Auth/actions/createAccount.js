import postRequestActionCreator from "../../../shared/helpers/actionCreators/postRequestActionCreator";

export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const receiveAccount = payload => ({
    type: CREATE_ACCOUNT_SUCCESS,
    payload: payload.text,
});

export const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST';
export const createNewAccountIsLoading = bool => ({
    type: CREATE_ACCOUNT_REQUEST,
    payload: bool,
});

export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE';
export const createNewAccountHasError = bool => ({
    type: CREATE_ACCOUNT_FAILURE,
    payload: bool,
});

export const createNewAccount = postRequestActionCreator({
    loadingAction: createNewAccountIsLoading,
    errorAction: createNewAccountHasError,
    receivedAction: receiveAccount,
});