import requestActionCreator from '../../shared/helpers/requestActionCreator';

export const GET_INITIAL_DATA_REQUEST = 'GET_INITIAL_DATA_REQUEST';
export const initialsIsLoading = bool => ({
    type: GET_INITIAL_DATA_REQUEST,
    payload: bool,
});

export const GET_INITIAL_DATA_FAILURE = 'GET_INITIAL_DATA_FAILURE';
export const initialHasError = bool => ({
    type: GET_INITIAL_DATA_FAILURE,
    payload: bool,
});

export const GET_INITIAL_DATA_SUCCESS = 'GET_INITIAL_DATA_SUCCESS';
export const initialReceive = payload => ({
    type: GET_INITIAL_DATA_SUCCESS,
    payload,
});

export const getInitialAction = requestActionCreator({
    loadingAction: initialsIsLoading,
    errorAction: initialHasError,
    receivedAction: initialReceive,
});