export const CREATE_STREAM_SUCCESS = 'CREATE_STREAM_SUCCESS';
export const createStream = () => ({
    type: CREATE_STREAM_SUCCESS,
    payload: true,
});
export const STORE_STREAM_SUCCESS = 'STORE_STREAM_SUCCESS';
export const storeStream = (stream) => ({
    type: STORE_STREAM_SUCCESS,
    payload: stream,
});