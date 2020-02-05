export const CREATE_SESSION_SUCCESS = 'CREATE_SESSION_SUCCESS';
export const createSession = () => ({
    type: CREATE_SESSION_SUCCESS,
    payload: true,
});
export const STORE_SESSION_SUCCESS = 'STORE_SESSION_SUCCESS';
export const storeSession = (session) => ({
    type: STORE_SESSION_SUCCESS,
    payload: session,
});