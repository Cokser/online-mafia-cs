import postRequestActionCreator from "../../../shared/helpers/postRequestActionCreator";

export const CREATE_LOBBY_SUCCESS = 'CREATE_LOBBY_SUCCESS';
export const receiveNewLobby = payload => ({
    type: CREATE_LOBBY_SUCCESS,
    payload,
});

export const CREATE_LOBBY_REQUEST = 'CREATE_LOBBY_REQUEST';
export const createNewLobbyIsLoading = bool => ({
    type: CREATE_LOBBY_REQUEST,
    payload: bool,
});

export const CREATE_LOBBY_FAILURE = 'CREATE_LOBBY_FAILURE';
export const createNewLobbyHasError = bool => ({
    type: CREATE_LOBBY_FAILURE,
    payload: bool,
});

export const createNewLobby = postRequestActionCreator({
    loadingAction: createNewLobbyIsLoading,
    errorAction: createNewLobbyHasError,
    receivedAction: receiveNewLobby,
});