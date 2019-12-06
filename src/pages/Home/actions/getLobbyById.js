import getRequestActionCreator from '../../../shared/helpers/getRrequestActionCreator';

export const GET_LOBBY_DATA_REQUEST = 'GET_LOBBY_DATA_REQUEST';
export const initialsIsLoading = bool => ({
    type: GET_LOBBY_DATA_REQUEST,
    payload: bool,
});

export const GET_LOBBY_DATA_FAILURE = 'GET_LOBBY_DATA_FAILURE';
export const initialHasError = bool => ({
    type: GET_LOBBY_DATA_FAILURE,
    payload: bool,
});

export const GET_LOBBY_DATA_SUCCESS = 'GET_LOBBY_DATA_SUCCESS';
export const initialReceive = payload => ({
    type: GET_LOBBY_DATA_SUCCESS,
    payload,
});

export const getInitialAction = getRequestActionCreator({
    loadingAction: initialsIsLoading,
    errorAction: initialHasError,
    receivedAction: initialReceive,
});