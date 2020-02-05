import getRequestActionCreator from '../../../shared/helpers/actionCreators/getRrequestActionCreator';

export const GET_LOBBY_DATA_REQUEST = 'GET_LOBBY_DATA_REQUEST';
export const getLobbyIsLoading = bool => ({
    type: GET_LOBBY_DATA_REQUEST,
    payload: bool,
});

export const GET_LOBBY_DATA_FAILURE = 'GET_LOBBY_DATA_FAILURE';
export const getLobbyHasError = bool => ({
    type: GET_LOBBY_DATA_FAILURE,
    payload: bool,
});

export const GET_LOBBY_DATA_SUCCESS = 'GET_LOBBY_DATA_SUCCESS';
export const getLobbyReceive = payload => ({
    type: GET_LOBBY_DATA_SUCCESS,
    payload,
});

export const currentLobbyAction = getRequestActionCreator({
    loadingAction: getLobbyIsLoading,
    errorAction: getLobbyHasError,
    receivedAction: getLobbyReceive,
});